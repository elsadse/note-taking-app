from pydantic import BaseModel, EmailStr
from datetime import datetime

class UserCreate(BaseModel):
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserLoginResponse(BaseModel):
    id: int
    email: EmailStr
    jwt_token: str

class UserResponse(BaseModel):
    id: int
    email: str