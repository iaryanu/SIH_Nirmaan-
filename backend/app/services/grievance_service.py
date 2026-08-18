from datetime import datetime

# Temporary in-memory storage.
# PostgreSQL will replace this later.
grievances = []

_next_id = 1


def create_grievance(data):
    global _next_id

    grievance = {
        "id": _next_id,
        "reference_number": (
            f"GRV-{datetime.now().strftime('%Y%m%d')}-{_next_id:04d}"
        ),
        "description": data.description,
        "citizen_name": data.citizen_name,
        "citizen_contact": data.citizen_contact,
        "status": "SUBMITTED",
    }

    grievances.append(grievance)
    _next_id += 1

    return grievance


def get_all_grievances():
    return grievances


def get_grievance(grievance_id: int):
    for grievance in grievances:
        if grievance["id"] == grievance_id:
            return grievance

    return None