from pydantic import BaseModel
from datetime import datetime

class NoteCreateOrUpdate(BaseModel):
    title: str
    content: str | None = None
    tag_names: list[str] = []

class NoteResponse(BaseModel):
    id: int
    title: str
    content: str | None
    is_archived: bool
    created_at: datetime
    updated_at: datetime