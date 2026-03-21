from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from app.repositories.user_repository import UserRepository
from app.schemas.user_schema import UserCreate, UserLogin, UserResponse, UserLoginResponse
from app.utils.user_utils import verify_password, create_access_token, decode_access_token
from app.exception import ConflictException, UnauthorizedException, NotFoundException

class AuthService:
    def __init__(self, db: Session):
        self.repo = UserRepository(db)

    async def create(self, data: UserCreate) -> UserResponse:
        if await self.repo.get_by_email(data.email):
            raise ConflictException(detail="Email already exists")
        user = await self.repo.create(data)
        return UserResponse(id=user.id, email=user.email)

    async def authenticate_user(self, data: UserLogin) -> UserLoginResponse:
        user = await self.repo.get_by_email(data.email)
        if not user:
            raise NotFoundException(detail="User not found")
        if not verify_password(data.password, user.password):
            raise UnauthorizedException(detail="Email or Password Invalid")
        jwt_token=create_access_token(user_id=str(user.id))
        return UserLoginResponse(id=user.id, email=user.email, jwt_token=jwt_token)
    
    async def get_current_user(self, token: str)->UserResponse:
        user_id = decode_access_token(token)
        user= await self.repo.get_by_id(int(user_id))
        if not user:
            raise UnauthorizedException(detail="User not found")
        return UserResponse(id=user.id, email=user.email)

    

