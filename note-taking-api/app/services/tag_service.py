from app.repositories.tag_repository import TagRepository
from app.models.tag import Tag

class TagService:
    def __init__(self, db):
        self.repo = TagRepository(db)

    def get_tags(self, current_user_id: int) -> list[Tag]:
        return self.repo.get_all_for_user(user_id=current_user_id)