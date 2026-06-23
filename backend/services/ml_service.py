import numpy as np
import joblib as jb

_model=None

def load_model():
    global _model
    _model=jb.load('../models/best_model.pkl')

def predict_cost(age, sex, bmi, children, smoker, region):
    smoke_enc = 1 if smoker == "yes" else 0
    sex_enc = 1 if sex == "male" else 0
    is_obese = 1 if bmi >= 30 else 0
    smoker_obese = smoke_enc * is_obese
    bmi_smoker = bmi * smoke_enc

    northwest = 1 if region == "northwest" else 0
    southeast = 1 if region == "southeast" else 0
    southwest = 1 if region == "southwest" else 0

    features = np.array([[age, bmi, children, smoke_enc, sex_enc,
                          is_obese, smoker_obese, northwest,
                          southeast, southwest, bmi_smoker]])

    prediction = _model.predict(features)[0]
    return round(float(prediction), 2)

