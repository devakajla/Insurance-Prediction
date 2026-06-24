from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def fun():
    return {'Message':'Hello World'}

from routers import analytics, predict, model_info
from services.ml_service import load_model

app.include_router(analytics.router, prefix="/api/analytics")

app.include_router(predict.router, prefix="/api/predict")

@app.on_event("startup")
def startup():
    load_model()

app.include_router(model_info.router, prefix="/api/models")