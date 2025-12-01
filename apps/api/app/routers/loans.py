from datetime import date
from typing import List

from fastapi import APIRouter
from pydantic import BaseModel


class Loan(BaseModel):
    id: int
    user_id: int
    book_id: int
    due_date: date


router = APIRouter()

FAKE_LOANS = [
    Loan(id=1, user_id=1, book_id=2, due_date=date(2025, 12, 20)),
]


@router.get("/", response_model=List[Loan])
def list_loans() -> List[Loan]:
    return FAKE_LOANS

