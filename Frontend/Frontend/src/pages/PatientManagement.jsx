import { useState, useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import "./PatientManagement.css";

const PatientManagement = () => {
  const [allPatients, setAllPatients] = useState([]);
  const [myPatients, setMyPatients] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const API_BASE = "http://localhost:3000";

  // Fetch all patients from database
  const fetchAllPatients = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE}/providers/patients/all`, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch patients");
      }

      const data = await response.json();
      setAllPatients(data.patients || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch provider's assigned patients
  const fetchMyPatients = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE}/providers/patients/my-patients`, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch your patients");
      }

      const data = await response.json();
      setMyPatients(data.patients || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Add patient to provider's list
  const addPatient = async (patientId) => {
    setError(null);
    setSuccess(null);
    try {
      const response = await fetch(`${API_BASE}/providers/patients/add`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ patientId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to add patient");
      }

      setSuccess(`Patient ${data.patient.name.firstName} added successfully`);
      fetchMyPatients();
      fetchAllPatients();
    } catch (err) {
      setError(err.message);
    }
  };

  // Remove patient from provider's list
  const removePatient = async (patientId) => {
    setError(null);
    setSuccess(null);
    try {
      const response = await fetch(
        `${API_BASE}/providers/patients/remove/${patientId}`,
        {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to remove patient");
      }

      setSuccess("Patient removed successfully");
      fetchMyPatients();
      fetchAllPatients();
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchAllPatients();
    fetchMyPatients();
  }, []);

  // Check if patient is already assigned
  const isPatientAssigned = (patientId) => {
    return myPatients.some((p) => p._id === patientId);
  };

  return (
    <MainLayout>
      <div className="patient-management">
        <h2>Patient Management</h2>

        {/* Notifications */}
        {error && (
          <div className="notification error">
            <span>❌</span> {error}
          </div>
        )}
        {success && (
          <div className="notification success">
            <span>✅</span> {success}
          </div>
        )}

        {/* Tab Navigation */}
        <div className="tabs">
          <button
            className={activeTab === "all" ? "active" : ""}
            onClick={() => setActiveTab("all")}
          >
            All Patients ({allPatients.length})
          </button>
          <button
            className={activeTab === "my" ? "active" : ""}
            onClick={() => setActiveTab("my")}
          >
            My Patients ({myPatients.length})
          </button>
        </div>

        {/* Content */}
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="patients-grid">
            {activeTab === "all" &&
              allPatients.map((patient) => (
                <div key={patient._id} className="patient-card">
                  <div className="patient-info">
                    <h3>
                      {patient.Name?.firstName} {patient.Name?.lastName}
                    </h3>
                    <p className="patient-email">{patient.email}</p>
                    <div className="patient-details">
                      {patient.age && <span>Age: {patient.age}</span>}
                      {patient.gender && <span>Gender: {patient.gender}</span>}
                    </div>
                  </div>
                  <button
                    className={
                      isPatientAssigned(patient._id)
                        ? "btn-secondary"
                        : "btn-primary"
                    }
                    onClick={() => addPatient(patient._id)}
                    disabled={isPatientAssigned(patient._id)}
                  >
                    {isPatientAssigned(patient._id) ? "✓ Assigned" : "+ Add Patient"}
                  </button>
                </div>
              ))}

            {activeTab === "my" &&
              (myPatients.length === 0 ? (
                <div className="empty-state">
                  <p>No patients assigned yet</p>
                  <p className="empty-subtext">
                    Switch to "All Patients" to add patients
                  </p>
                </div>
              ) : (
                myPatients.map((patient) => (
                  <div key={patient._id} className="patient-card">
                    <div className="patient-info">
                      <h3>
                        {patient.Name?.firstName} {patient.Name?.lastName}
                      </h3>
                      <p className="patient-email">{patient.email}</p>
                      <div className="patient-details">
                        {patient.age && <span>Age: {patient.age}</span>}
                        {patient.gender && <span>Gender: {patient.gender}</span>}
                      </div>
                      {patient.consent !== undefined && (
                        <span className="consent-badge">
                          {patient.consent ? "✓ Consent Given" : "⚠ No Consent"}
                        </span>
                      )}
                    </div>
                    <button
                      className="btn-danger"
                      onClick={() => removePatient(patient._id)}
                    >
                      Remove
                    </button>
                  </div>
                ))
              ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default PatientManagement;
