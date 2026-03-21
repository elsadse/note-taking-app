from sqlalchemy.orm import Session
from app.models.tag import Tag
from app.models.note import Note

class TagRepository:
    def __init__(self, db: Session):
        self.db = db

    async def get_by_names(self, names: list[str]) -> list[Tag]:
        return self.db.query(Tag).filter(Tag.name.in_(names)).all()

    async def get_all_for_user(self, user_id: int) -> list[Tag]:
        return (
            self.db.query(Tag)
            .filter(Tag.notes.any(Note.user_id == user_id))
            .all()
        )