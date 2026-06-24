import { useState, useEffect } from "react";
import { getSummary } from "../services/api";

export default function Dashboard() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    getSummary().then((res) => setSummary(res.data));
  }, []);

  if (!summary) return <p style={{color: "white", padding: "20px"}}>Loading...</p>;

  return (
    <div style={{padding: "24px", color: "white"}}>
      <h1>Insurance Dashboard</h1>
      <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginTop: "20px"}}>
        
        <div style={{background: "#1a1a2e", padding: "20px", borderRadius: "8px"}}>
          <h3>Total Records</h3>
          <p style={{fontSize: "32px"}}>{summary.total_records}</p>
        </div>

        <div style={{background: "#1a1a2e", padding: "20px", borderRadius: "8px"}}>
          <h3>Avg Charges</h3>
          <p style={{fontSize: "32px"}}>${summary.avg_charges}</p>
        </div>

        <div style={{background: "#1a1a2e", padding: "20px", borderRadius: "8px"}}>
          <h3>Smokers</h3>
          <p style={{fontSize: "32px"}}>{summary.smoker_count}</p>
        </div>

        <div style={{background: "#1a1a2e", padding: "20px", borderRadius: "8px"}}>
          <h3>Non-Smokers</h3>
          <p style={{fontSize: "32px"}}>{summary.non_smoker_count}</p>
        </div>

        <div style={{background: "#1a1a2e", padding: "20px", borderRadius: "8px"}}>
          <h3>Avg Age</h3>
          <p style={{fontSize: "32px"}}>{summary.avg_age}</p>
        </div>

        <div style={{background: "#1a1a2e", padding: "20px", borderRadius: "8px"}}>
          <h3>Avg BMI</h3>
          <p style={{fontSize: "32px"}}>{summary.avg_bmi}</p>
        </div>

      </div>
    </div>
  );
}
