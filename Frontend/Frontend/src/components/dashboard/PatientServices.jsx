import "./PatientServices.css";

const PatientServices = () => {
  const services = [
    {
      title: "Book Appointment",
      description: "Schedule a visit with your assigned doctor",
    },
    {
      title: "View Health Reports",
      description: "Access your lab results and medical history",
    },
    {
      title: "Assigned Doctor",
      description: "View your healthcare provider details",
    },
  ];

  return (
    <div className="patient-services">
      <h3 className="services-title">My Services</h3>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <button className="service-btn">Open</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientServices;
