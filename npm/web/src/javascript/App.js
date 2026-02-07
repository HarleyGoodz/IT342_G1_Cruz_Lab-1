import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login_js";
import Registration from "./Registration_js";
import Dashboard from "./Dashboard_js";
import '../css/App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;