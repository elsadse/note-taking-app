from sqlalchemy import Column, BigInteger, ForeignKey, Table
from app.database import Base

# Table de jointure Note <-> Tag (Many-to-Many)
note_tag = Table(
    "note_tag",
    Base.metadata,
    Column("note_id", BigInteger, ForeignKey("notes.id", ondelete="CASCADE"), primary_key=True),
    Column("tag_id", BigInteger, ForeignKey("tags.id", ondelete="CASCADE"), primary_key=True),
)
