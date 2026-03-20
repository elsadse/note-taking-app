from fastapi import FastAPI
from app.routes import auth_route

app = FastAPI(title="Notes API")

app.include_router(auth_route.router)

@app.get("/health")
def health():
    return {"status": "ok"}