from typing import List

from fastapi import APIRouter
from pydantic import BaseModel


class Book(BaseModel):
    id: int
    title: str
    author: str


router = APIRouter()

FAKE_BOOKS = [
    Book(id=1, title="The Pragmatic Programmer", author="Andrew Hunt"),
    Book(id=2, title="Clean Architecture", author="Robert C. Martin"),
]


@router.get("/", response_model=List[Book])
def list_books() -> List[Book]:
    return FAKE_BOOKS

