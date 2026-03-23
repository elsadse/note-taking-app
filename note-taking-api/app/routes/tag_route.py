from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.services.tag_service import TagService
from app.utils.user_utils import get_current_user
from app.schemas.user_schema import UserResponse

router = APIRouter(prefix="/api/tags", tags=["tags"])

@router.get("/")
def get_tags(
    current_user: UserResponse = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    return TagService(db).get_tags(current_user)