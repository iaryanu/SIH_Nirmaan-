from typing import Optional

from pydantic import BaseModel, Field


class GrievanceCreate(BaseModel):
    description: str = Field(
        ...,
        min_length=10,
        description="Description of the citizen grievance",
    )

    citizen_name: Optional[str] = None
    citizen_contact: Optional[str] = None


class GrievanceResponse(BaseModel):
    id: int
    reference_number: str
    description: str
    citizen_name: Optional[str] = None
    citizen_contact: Optional[str] = None
    status: str