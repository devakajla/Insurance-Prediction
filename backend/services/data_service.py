import pandas as pd
from functools import lru_cache

@lru_cache()
def get_dataframe():
    return pd.read_csv('../data/cleaned_insurance.csv')

@lru_cache()
def get_features_dataframe():
    return pd.read_csv('../data/features_insurance.csv')