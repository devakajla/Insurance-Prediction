from fastapi import APIRouter
from services.data_service import get_dataframe
router = APIRouter()

@router.get("/summary")
def summary():
    df = get_dataframe()
    return {
        "total_records": len(df),
        "avg_charges": round(df['charges'].mean(), 2),
        "smoker_count": int(df[df['smoker'] == 'yes'].shape[0]),
        "non_smoker_count": int(df[df['smoker'] == 'no'].shape[0]),
        "avg_age": round(df['age'].mean(), 1),
        "avg_bmi": round(df['bmi'].mean(), 2)
    }
