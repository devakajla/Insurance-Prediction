import { useState, useEffect } from "react";
import { getModelComparison } from "../services/api";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function Models() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getModelComparison().then((res) => setData(res.data));
  }, []);

  if (!data) return <p style={{color: "white", padding: "20px"}}>Loading...</p>;

  return (
    <div style={{padding: "24px", color: "white"}}>
      <h1>Model Comparison</h1>
      <p>Best Model: <strong style={{color: "#4CAF50"}}>{data.best_model}</strong></p>

      <h2 style={{marginTop: "32px"}}>R² Score Comparison</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data.models}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
          <YAxis domain={[0.7, 1.0]} />
          <Tooltip />
          <Bar dataKey="r2" fill="#4CAF50" />
        </BarChart>
      </ResponsiveContainer>

      <h2 style={{marginTop: "32px"}}>All Metrics</h2>
      <table style={{width: "100%", borderCollapse: "collapse", marginTop: "16px"}}>
        <thead>
          <tr style={{borderBottom: "2px solid white"}}>
            <th style={{padding: "12px", textAlign: "left"}}>Model</th>
            <th style={{padding: "12px", textAlign: "left"}}>R²</th>
            <th style={{padding: "12px", textAlign: "left"}}>RMSE</th>
            <th style={{padding: "12px", textAlign: "left"}}>MAE</th>
          </tr>
        </thead>
        <tbody>
          {data.models.map((m) => (
            <tr key={m.name} style={{borderBottom: "1px solid #333"}}>
              <td style={{padding: "12px"}}>{m.name}</td>
              <td style={{padding: "12px"}}>{m.r2}</td>
              <td style={{padding: "12px"}}>${m.rmse}</td>
              <td style={{padding: "12px"}}>${m.mae}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
