import uvicorn
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from app.routes import auth_route
from app.routes import note_route
from app.routes import tag_route
from fastapi.middleware.cors import CORSMiddleware

from app.utils.config import settings

app = FastAPI(title="Notes API")

origins=["http://localhost:5173",]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# handler valueError exception 
@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    errors = [
        {
            "field": e["loc"][-1],
            "message": e["msg"]
        }
        for e in exc.errors()
    ]
    return JSONResponse(
        status_code=422,
        content={"detail": errors}
    )

app.include_router(auth_route.router)
app.include_router(note_route.router)
app.include_router(tag_route.router)

@app.get("/health")
def health():
    return {"status": "ok"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="localhost", port=8080, reload=True)