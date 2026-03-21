from sqlalchemy.orm import Session
from app.models.note import Note

class NoteRepository:
    def __init__(self, db: Session):
        self.db = db

    async def get_all_by_user_id(self, user_id: int) -> list[Note]:
        return (
            self.db.query(Note)
            .filter(Note.user_id == user_id)
            .all()
        )

    async def get_by_id(self, note_id: int) -> Note | None:
        return (
            self.db.query(Note)
            .filter(Note.id == note_id)
            .first()
        )

    async def exists_by_id(self, note_id: int) -> bool:
        return self.db.query(Note).filter(Note.id == note_id).count() > 0

    async def exists_by_user_id_and_title(self, user_id: int, title: str) -> bool:
        return (
            self.db.query(Note)
            .filter(Note.user_id == user_id, Note.title == title)
            .count() > 0
        )

    async def create(self, note: Note) -> Note:
        self.db.add(note)
        self.db.commit()
        self.db.refresh(note)
        return note

    async def update(self) -> None:
        self.db.commit()

    async def toggle_archive(self, note_id: int) -> None:
        note = self.db.query(Note).filter(Note.id == note_id).first()
        if note:
            note.is_archived = not note.is_archived
            self.db.commit()

    async def delete(self, note_id: int) -> None:
        self.db.query(Note).filter(Note.id == note_id).delete()
        self.db.commit()