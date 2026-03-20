from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from app.routes import auth_route

app = FastAPI(title="Notes API")

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

@app.get("/health")
def health():
    return {"status": "ok"}