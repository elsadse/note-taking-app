from sqlalchemy.orm import Session
from app.models.note import Note
from app.models.tag import Tag
from app.repositories.note_repository import NoteRepository
from app.repositories.tag_repository import TagRepository
from app.schemas.note_schema import NoteCreateOrUpdate
from app.exception import NotFoundException, ConflictException, ForbiddenException

class NoteService:
    def __init__(self, db: Session):
        self.note_repo = NoteRepository(db)
        self.tag_repo = TagRepository(db)

    def get_all(self, current_user_id: int) -> list[Note]:
        return self.note_repo.get_all_by_user_id(current_user_id)

    def get_by_id(self, note_id: int) -> Note:
        note = self.note_repo.get_by_id(note_id)
        if note is None:
            raise NotFoundException("Note not found")
        return note

    def delete(self, note_id: int) -> None:
        note = self.note_repo.get_by_id(note_id)
        if note is None:
            raise NotFoundException("Note not found")
        if not note.is_archived:
            raise ForbiddenException("Cannot delete a non-archived note")
        self.note_repo.delete(note_id)

    def toggle_archive(self, note_id: int) -> None:
        if not self.note_repo.exists_by_id(note_id):
            raise NotFoundException("Note not found")
        self.note_repo.toggle_archive(note_id)

    def create(self, command: NoteCreateOrUpdate, current_user_id: int) -> Note:
        if self.note_repo.exists_by_user_id_and_title(current_user_id, command.title):
            raise ConflictException("Note with this title already exists")

        note = Note(
            user_id=current_user_id,
            title=command.title,
            content=command.content,
            tags=[]
        )

        if command.tag_names:
            existing_tags = self.tag_repo.get_by_names(command.tag_names)
            existing_tags_by_name = {tag.name: tag for tag in existing_tags}
            for tag_name in command.tag_names:
                note.tags.append(
                    existing_tags_by_name.get(tag_name) or Tag(name=tag_name)
                )

        return self.note_repo.create(note)

    def update(self, note_id: int, command: NoteCreateOrUpdate, current_user_id: int) -> None:
        note = self.note_repo.get_by_id_for_update(note_id)
        if note is None:
            raise NotFoundException("Note not found")

        if note.title != command.title and self.note_repo.exists_by_user_id_and_title(current_user_id, command.title):
            raise ConflictException("Note with this title already exists")

        note.title = command.title
        note.content = command.content

        existing_tags = self.tag_repo.get_by_names(command.tag_names)
        existing_tags_by_name = {tag.name: tag for tag in existing_tags}

        note.tags.clear()
        for tag_name in command.tag_names:
            note.tags.append(
                existing_tags_by_name.get(tag_name) or Tag(name=tag_name)
            )

        self.note_repo.update()