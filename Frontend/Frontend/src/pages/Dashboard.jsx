import { useEffect, useState } from "react";
import HealthCard from "../components/dashboard/HealthCard";
import ProgressBar from "../components/dashboard/ProgressBar";
import "../pages/Dashboard.css";
import { getPatientHealthData } from "../services/healthService";

const Dashboard = () => {
  const [healthData, setHealthData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPatientHealthData();
      setHealthData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Welcome, David</h2>

      {/* Wellness Goals */}
      <section className="dashboard-section">
        <h3>Wellness Goals</h3>

        <div className="goals-grid">
          {healthData.map((item) => (
            <HealthCard key={item.id} title={item.title}>
              <p className="metric-value">
                {item.value} / {item.goal} {item.unit}
              </p>

              <ProgressBar value={item.value} goal={item.goal} />

              {item.extra && (
                <p className="metric-extra">{item.extra}</p>
              )}
            </HealthCard>
          ))}
        </div>
      </section>

      {/* Preventive Care */}
      <section className="dashboard-section">
        <h3>Preventive Care Reminders</h3>
        <ul className="reminder-list">
          <li>🩺 Annual health checkup due</li>
          <li>💉 Flu vaccination recommended</li>
        </ul>
      </section>

      {/* Provider Messages */}
      <section className="dashboard-section">
        <h3>Messages from Provider</h3>
        <div className="message-box">
          <p>
            👨‍⚕️ <strong>Dr. Smith:</strong> Please increase your daily
            step count to 6,000 for better cardiovascular health.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
