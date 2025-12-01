from fastapi import FastAPI

from app.routers import books, users, loans


def create_app() -> FastAPI:
    app = FastAPI(title="LibraMind API", version="0.1.0")

    app.include_router(books.router, prefix="/books", tags=["books"])
    app.include_router(users.router, prefix="/users", tags=["users"])
    app.include_router(loans.router, prefix="/loans", tags=["loans"])

    @app.get("/health")
    def health():
        return {"status": "ok"}

    return app


app = create_app()

