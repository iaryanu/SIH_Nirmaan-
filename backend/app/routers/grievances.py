from fastapi import APIRouter, HTTPException

from app.schemas import GrievanceCreate, GrievanceResponse
from app.services.grievance_service import (
    create_grievance,
    get_all_grievances,
    get_grievance,
)


router = APIRouter(
    prefix="/grievances",
    tags=["Grievances"],
)


@router.post("/", response_model=GrievanceResponse)
def submit_grievance(grievance: GrievanceCreate):
    return create_grievance(grievance)


@router.get("/", response_model=list[GrievanceResponse])
def list_grievances():
    return get_all_grievances()


@router.get("/{grievance_id}", response_model=GrievanceResponse)
def get_single_grievance(grievance_id: int):
    grievance = get_grievance(grievance_id)

    if grievance is None:
        raise HTTPException(
            status_code=404,
            detail="Grievance not found",
        )

    return grievance