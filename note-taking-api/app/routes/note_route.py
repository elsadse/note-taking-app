from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas.note_schema import NoteCreateOrUpdate, NoteResponse
from app.services.note_service import NoteService
from app.utils.user_utils import get_current_user
from app.schemas.user_schema import UserResponse

router = APIRouter(prefix="/api/notes", tags=["notes"])

@router.get("/", response_model=list[NoteResponse])
def get_all(current_user: UserResponse = Depends(get_current_user), db: Session = Depends(get_db)):
    return NoteService(db).get_all(current_user)

@router.get("/{note_id}", response_model=NoteResponse)
def get_by_id(note_id: int, current_user: UserResponse = Depends(get_current_user), db: Session = Depends(get_db)):
    return NoteService(db).get_by_id(note_id)

@router.post("/", response_model=NoteResponse, status_code=status.HTTP_201_CREATED)
def create(command: NoteCreateOrUpdate, current_user: UserResponse = Depends(get_current_user), db: Session = Depends(get_db)):
    return NoteService(db).create(command, current_user)

@router.put("/{note_id}", status_code=status.HTTP_204_NO_CONTENT)
def update(note_id: int, command: NoteCreateOrUpdate, current_user: UserResponse = Depends(get_current_user), db: Session = Depends(get_db)):
    NoteService(db).update(note_id, command, current_user)

@router.delete("/{note_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete(note_id: int, current_user: UserResponse = Depends(get_current_user), db: Session = Depends(get_db)):
    NoteService(db).delete(note_id)

@router.patch("/{note_id}/archive", status_code=status.HTTP_204_NO_CONTENT)
def toggle_archive(note_id: int, current_user: UserResponse = Depends(get_current_user), db: Session = Depends(get_db)):
    NoteService(db).toggle_archive(note_id)