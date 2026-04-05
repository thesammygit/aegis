from fastapi import FastAPI

from app.api.routes import router

app = FastAPI(
    title="AEGIS API",
    version="0.1.0",
    summary="Template API for conjunction decision-support workflows.",
)

app.include_router(router)

