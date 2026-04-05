from fastapi import APIRouter

router = APIRouter()


@router.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "service": "aegis-api-template"}


@router.get("/meta")
def meta() -> dict[str, list[dict[str, str]] | str]:
    return {
        "project": "AEGIS",
        "capabilities": [
            {
                "name": "ingestion",
                "description": "Fetch and normalize public orbital datasets.",
            },
            {
                "name": "screening",
                "description": "Generate and rank conjunction candidates.",
            },
            {
                "name": "maneuver-evaluation",
                "description": "Compare baseline and candidate maneuver outcomes.",
            },
        ],
    }

