import MainLayout from "../components/layout/MainLayout";
import "./Services.css";

const Services = () => {
  const assignedPatients = [
    {
      id: 1,
      name: "John Doe",
      condition: "Diabetes",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Smith",
      condition: "Hypertension",
      status: "Monitoring",
    },
    {
      id: 3,
      name: "Rahul Kumar",
      condition: "Obesity",
      status: "Active",
    },
  ];

  return (
    <MainLayout>
      <h2 className="services-heading">Provider Services</h2>

      <p className="services-sub">
        Manage assigned patients and monitor their health progress.
      </p>

      <div className="patient-table-wrapper">
        <table className="patient-table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Condition</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {assignedPatients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.name}</td>
                <td>{patient.condition}</td>
                <td>
                  <span className={`status ${patient.status.toLowerCase()}`}>
                    {patient.status}
                  </span>
                </td>
                <td>
                  <button className="view-btn">View</button>
                  <button className="assign-btn">Assign Goal</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
};

export default Services;
