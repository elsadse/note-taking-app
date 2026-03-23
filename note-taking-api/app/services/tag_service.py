from app.repositories.tag_repository import TagRepository
from app.models.tag import Tag
from app.schemas.user_schema import UserResponse

class TagService:
    def __init__(self, db):
        self.repo = TagRepository(db)

    def get_tags(self, current_user: UserResponse) -> list[Tag]:
        return self.repo.get_all_for_user(current_user.id)