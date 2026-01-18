import MainLayout from "../components/layout/MainLayout";
import "./DashboardProvider.css";

const DashboardProvider = () => {
  const stats = [
    { label: "Total Patients", value: 24 },
    { label: "Active Cases", value: 16 },
    { label: "Pending Reviews", value: 8 },
  ];

  const recentPatients = [
    { id: 1, name: "John Doe", condition: "Diabetes" },
    { id: 2, name: "Sarah Smith", condition: "Hypertension" },
    { id: 3, name: "Rahul Kumar", condition: "Obesity" },
  ];

  return (
    <MainLayout>
      <h2 className="provider-heading">Provider Dashboard</h2>

      {/* Stats */}
      <div className="provider-stats">
        {stats.map((item, index) => (
          <div key={index} className="stat-card">
            <p className="stat-label">{item.label}</p>
            <h3 className="stat-value">{item.value}</h3>
          </div>
        ))}
      </div>

      {/* Recent Patients */}
      <div className="recent-section">
        <h3>Recently Assigned Patients</h3>

        <table className="recent-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            {recentPatients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.name}</td>
                <td>{patient.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
};

export default DashboardProvider;
