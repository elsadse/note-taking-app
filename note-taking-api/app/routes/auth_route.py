from fastapi import APIRouter, Depends, Response, Cookie
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas.user_schema import UserCreate, UserLogin, UserResponse
from app.services.auth_service import AuthService
from app.utils.config import settings
from typing import Optional
from app.exception import UnauthorizedException

router = APIRouter(prefix="/api/auth", tags=["auth"])

@router.post("/register", response_model=UserResponse, status_code=201)
async def register(data: UserCreate, db: Session = Depends(get_db)):
    return await AuthService(db).create(data)


@router.post("/login", response_model=UserResponse, status_code=200)
async def login(data: UserLogin, response: Response, db: Session = Depends(get_db)):
    user_with_token= await AuthService(db).authenticate_user(data)
    is_dev = settings.ENV == "development"
    response.set_cookie(
        key="token",
        value=user_with_token.jwt_token,
        httponly=True,
        secure=not is_dev,
        samesite="strict" if is_dev else "none",
        max_age=settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60,
    )
    return UserResponse(id=user_with_token.id, email=user_with_token.email)

@router.post("/logout", status_code=204)
async def logout(response: Response):
    is_dev = settings.ENV == "development"
    response.delete_cookie(
        key="token",
        httponly=True,
        secure=not is_dev,
        samesite="strict" if is_dev else "none",
        path="/",
    )

@router.get("/me", response_model=UserResponse)
async def me(token: Optional[str] = Cookie(default=None, alias="token"), db: Session = Depends(get_db)):
    print("Cookie token reçu:", token)
    if token is None:
        raise UnauthorizedException(detail="Not authenticated")
    return await AuthService(db).get_current_user(token)