from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from app.repositories.user_repository import UserRepository
from app.schemas.user_schema import UserCreate, UserLogin, UserResponse, UserLoginResponse
from app.utils.user_utils import verify_password, create_access_token

class AuthService:
    def __init__(self, db: Session):
        self.repo = UserRepository(db)

    async def create(self, data: UserCreate) -> UserResponse:
        if await self.repo.get_by_email(data.email):
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="Email already exists"
            )
        user = await self.repo.create(data)
        return UserResponse(id=user.id, email=user.email)

    async def authenticate_user(self, data: UserLogin) -> UserLoginResponse:
        user = await self.repo.get_by_email(data.email)
        if not user:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User not found"
            )
        if not verify_password(data.password, user.password):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid credentials"
            )
        jwt_token=create_access_token(user_id=str(user.id))
        return UserLoginResponse(id=user.id, email=user.email, jwt_token=jwt_token)
