import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api"
});

export const getSummary = () => API.get("/analytics/summary");
export const predictCost = (data) => API.post("/predict/cost", data);
export const getModelComparison = () => API.get("/models/comparison");
