import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* LOGO / TITLE → HOME */}
      <NavLink to="/" className="navbar-title">
        Healthcare Portal
      </NavLink>

      <ul className="navbar-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/health-topics">Health Topics</NavLink>
        </li>

        {user ? (
          <>
            <li className="navbar-user">
              {user.name} ({user.role})
            </li>
            <li>
              <button
                className="logout-btn"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <button
              className="login-nav-btn"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
