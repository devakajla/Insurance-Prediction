from fastapi import APIRouter
from pydantic import BaseModel
from services.ml_service import predict_cost

router = APIRouter()

class PredictRequest(BaseModel):
    age: int
    sex: str
    bmi: float
    children: int
    smoker: str
    region: str

@router.post("/cost")
def predict(request: PredictRequest):
    result = predict_cost(
        request.age, request.sex, request.bmi,
        request.children, request.smoker, request.region
    )
    return {"predicted_cost": result}
