from internal.utils import Base
from sqlalchemy import JSON, Boolean, Column, ForeignKey, Integer, String, Table

role = Table(
    "role",
    Base.metadata,
    Column("id", Integer, primary_key=True),
    Column("name", String, nullable=False),
    Column("permissions", JSON),
)


class User(Base):
    user_id = Column(Integer, primary_key=True)
    first_name = Column(String(50), nullable=False)  # имя
    second_name = Column(String(50), nullable=False)  # фамилия
    surname = Column(String(50), nullable=False)  # отчество
    email = Column(String(50), nullable=False, unique=True)
    password = Column(String(50), nullable=False)
    city = Column(String(50), nullable=False)
    cv_file = Column(String(50), nullable=False)
    role_id = Column(Integer, ForeignKey(role.c.id))
