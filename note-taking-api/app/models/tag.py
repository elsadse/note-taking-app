from sqlalchemy import Column, BigInteger, String
from sqlalchemy.orm import relationship
from app.database import Base
from app.models.note_tag import note_tag

class Tag(Base):
    __tablename__ = "tags"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    name = Column(String, unique=True, nullable=False)

    notes = relationship("Note", secondary=note_tag, back_populates="tags")