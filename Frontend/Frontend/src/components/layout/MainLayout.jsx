import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <div className="app-layout">
      {/* Top Navbar */}
      <Navbar />

      <div className="layout-body">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Page Content */}
        <main className="layout-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
