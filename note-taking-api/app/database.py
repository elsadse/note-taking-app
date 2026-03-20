import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")

# L'engine est le point de départ de toute connexion SQLAlchemy
engine = create_engine(DATABASE_URL)
# SessionLocal sera utilisé pour créer une session unique par requête
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 5. Classe de base pour les modèles
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()