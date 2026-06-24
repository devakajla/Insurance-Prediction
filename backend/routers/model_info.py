from fastapi import APIRouter

router = APIRouter()

@router.get("/comparison")
def comparison():
    return {
        "models": [
            {"name": "Linear Regression", "r2": 0.909, "rmse": 4085, "mae": 2276},
            {"name": "Ridge", "r2": 0.909, "rmse": 4091, "mae": 2278},
            {"name": "Lasso", "r2": 0.909, "rmse": 4085, "mae": 2274},
            {"name": "Decision Tree", "r2": 0.784, "rmse": 6294, "mae": 3000},
            {"name": "Random Forest", "r2": 0.881, "rmse": 4685, "mae": 2640},
            {"name": "XGBoost", "r2": 0.846, "rmse": 5315, "mae": 3079}
        ],
        "best_model": "Linear Regression"
    }
