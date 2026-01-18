import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Sidebar.css";

const Sidebar = () => {
  const { user } = useAuth();

  // Sidebar hidden if not logged in (eg: login page)
  if (!user) return null;

  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">
        {user.role === "patient" ? "Patient Panel" : "Provider Panel"}
      </h3>

      <ul className="sidebar-menu">
        {user.role === "patient" && (
          <>
            <li>
              <NavLink to="/patient/dashboard">Dashboard</NavLink>
            </li>
          </>
        )}

        {user.role === "provider" && (
          <>
            <li>
              <NavLink to="/provider/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/provider/profile">My services</NavLink>
            </li>
          </>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
