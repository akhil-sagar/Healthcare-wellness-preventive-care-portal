import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardProvider from "./pages/DashboardProvider";
import Services from "./pages/Services";
import HealthTopics from "./pages/HealthTopics";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardProvider />} />
          <Route path="/login" element={<Login />} />
          <Route path="/patient/dashboard" element={<Dashboard />} />
          <Route path="/provider/dashboard" element={<DashboardProvider />} />
          <Route path="/provider/services" element={<Services />} />
          <Route path="/health-topics" element={<HealthTopics />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
