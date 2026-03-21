from sqlalchemy import Column, DateTime, String, func, BigInteger, Boolean, ForeignKey, Text
from sqlalchemy.orm import relationship
from app.database import Base
from app.models.note_tag  import note_tag

class Note(Base):
    __tablename__ = "notes"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    user_id = Column(BigInteger, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    title = Column(String, nullable=False)
    content = Column(Text, nullable=True)
    is_archived = Column(Boolean, default=False, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    user = relationship("User", back_populates="notes")
    tags = relationship("Tag", secondary=note_tag, back_populates="notes")