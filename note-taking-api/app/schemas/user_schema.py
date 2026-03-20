from pydantic import BaseModel, EmailStr, Field, field_validator
from datetime import datetime

class UserCreate(BaseModel):
    email: EmailStr
    password: str= Field(min_length=8)
    
#    @field_validator("password")
#   @classmethod
#    def validate_password(cls, v: str) -> str:
#        if not any(c.isupper() for c in v):
#            raise ValueError("Password must contain at least one uppercase letter")
#        if not any(c.isdigit() for c in v):
#            raise ValueError("Password must contain at least one digit")
#        return v

class UserLogin(BaseModel):
    email: EmailStr
    password: str= Field(min_length=8)


class UserLoginResponse(BaseModel):
    id: int
    email: EmailStr
    jwt_token: str

class UserResponse(BaseModel):
    id: int
    email: str