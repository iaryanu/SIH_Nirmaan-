const API_BASE_URL = "http://127.0.0.1:8000";

export interface GrievanceCreate {
  description: string;
  citizen_name: string;
  citizen_contact: string;
}

export interface GrievanceResponse {
  id: number;
  reference_number: string;
  description: string;
  citizen_name: string;
  citizen_contact: string;
}

export async function submitGrievance(
  grievance: GrievanceCreate
): Promise<GrievanceResponse> {
  const response = await fetch(`${API_BASE_URL}/grievances/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(grievance),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "Failed to submit grievance");
  }

  return response.json();
}