import { useState } from "react";
import { predictCost } from "../services/api";

export default function Predict() {
  const [form, setForm] = useState({
    age: "", sex: "male", bmi: "", children: "0", smoker: "no", region: "northeast"
  });
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    predictCost({
      ...form,
      age: parseInt(form.age),
      bmi: parseFloat(form.bmi),
      children: parseInt(form.children)
    }).then((res) => setResult(res.data));
  };

  return (
    <div style={{padding: "24px", color: "white"}}>
      <h1>Predict Insurance Cost</h1>
      <form onSubmit={handleSubmit} style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", maxWidth: "500px", marginTop: "20px"}}>
        
        <label>Age<input type="number" value={form.age} onChange={e => setForm({...form, age: e.target.value})} style={{width: "100%", padding: "8px", marginTop: "4px"}} /></label>
        
        <label>BMI<input type="number" step="0.1" value={form.bmi} onChange={e => setForm({...form, bmi: e.target.value})} style={{width: "100%", padding: "8px", marginTop: "4px"}} /></label>
        
        <label>Sex<select value={form.sex} onChange={e => setForm({...form, sex: e.target.value})} style={{width: "100%", padding: "8px", marginTop: "4px"}}><option value="male">Male</option><option value="female">Female</option></select></label>
        
        <label>Children<input type="number" value={form.children} onChange={e => setForm({...form, children: e.target.value})} style={{width: "100%", padding: "8px", marginTop: "4px"}} /></label>
        
        <label>Smoker<select value={form.smoker} onChange={e => setForm({...form, smoker: e.target.value})} style={{width: "100%", padding: "8px", marginTop: "4px"}}><option value="no">No</option><option value="yes">Yes</option></select></label>
        
        <label>Region<select value={form.region} onChange={e => setForm({...form, region: e.target.value})} style={{width: "100%", padding: "8px", marginTop: "4px"}}><option value="northeast">Northeast</option><option value="northwest">Northwest</option><option value="southeast">Southeast</option><option value="southwest">Southwest</option></select></label>

        <button type="submit" style={{gridColumn: "span 2", padding: "12px", background: "#4CAF50", color: "white", border: "none", cursor: "pointer", fontSize: "16px"}}>Predict Cost</button>
      </form>

      {result && (
        <div style={{marginTop: "24px", background: "#1a1a2e", padding: "24px", borderRadius: "8px", maxWidth: "500px"}}>
          <h2>Predicted Annual Cost</h2>
          <p style={{fontSize: "48px", color: "#4CAF50"}}>${result.predicted_cost.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}
