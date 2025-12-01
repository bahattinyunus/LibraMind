from typing import List

from fastapi import APIRouter
from pydantic import BaseModel, EmailStr


class User(BaseModel):
    id: int
    name: str
    email: EmailStr


router = APIRouter()

FAKE_USERS = [
    User(id=1, name="Ada Lovelace", email="ada@example.com"),
    User(id=2, name="Alan Turing", email="alan@example.com"),
]


@router.get("/", response_model=List[User])
def list_users() -> List[User]:
    return FAKE_USERS

