import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Predict from "./pages/Predict";
import Models from "./pages/Models";

function App() {
  return (
    <BrowserRouter>
      <nav style={{background: "#1a1a2e", padding: "16px", display: "flex", gap: "24px"}}>
        <Link to="/" style={{color: "white", textDecoration: "none"}}>Dashboard</Link>
        <Link to="/predict" style={{color: "white", textDecoration: "none"}}>Predict</Link>
        <Link to="/models" style={{color: "white", textDecoration: "none"}}>Models</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/models" element={<Models />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
