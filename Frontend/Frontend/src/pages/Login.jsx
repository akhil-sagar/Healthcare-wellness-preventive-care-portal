import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/layout/Navbar";
import "./Login.css";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [role, setRole] = useState("patient");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now login directly (same flow for signup)
    login({ name: "David", role });

    role === "patient"
      ? navigate("/patient/dashboard")
      : navigate("/provider/dashboard");
  };

  return (
    <>
      <Navbar />

      <div className="login-page">
        <div className="login-card">
          {/* Toggle */}
          <div className="auth-toggle">
            <button
              className={!isSignup ? "active" : ""}
              onClick={() => setIsSignup(false)}
            >
              Login
            </button>
            <button
              className={isSignup ? "active" : ""}
              onClick={() => setIsSignup(true)}
            >
              Signup
            </button>
          </div>

          <h2>{isSignup ? "Create Account" : "Welcome Back"}</h2>
          <p className="login-subtext">
            {isSignup
              ? "Sign up to start your healthcare journey"
              : "Login to continue your healthcare journey"}
          </p>

          <form onSubmit={handleSubmit}>
            {isSignup && (
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
            )}

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="form-group">
              <label>Account Type</label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="patient">Patient</option>
                <option value="provider">Provider</option>
              </select>
            </div>

            <button type="submit" className="login-btn">
              {isSignup ? "Create Account" : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
