from datetime import datetime, timedelta, timezone
import jwt
from pwdlib import PasswordHash

from app.utils.config import settings

password_hash = PasswordHash.recommended()

# Password 
def hash_password(password: str) -> str:
    return password_hash.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return password_hash.verify(plain_password, hashed_password)


# JWT
def create_access_token(user_id: str) -> str:
    expire = datetime.now(timezone.utc) + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    payload = {
        "sub": user_id,
        "exp": expire,
    }
    return jwt.encode(payload, settings.SECRET_KEY, algorithm=settings.ALGORITHM)

def decode_access_token(token: str) -> str:
   try:
      payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
      return payload["sub"]
   except jwt.ExpiredSignatureError:
      raise ValueError("Token expired")
   except jwt.InvalidTokenError:
      raise ValueError("Token invalid")

