import "./HealthCard.css";

const HealthCard = ({ title = "Metric", children }) => {
  return (
    <div className="health-card">
      <h4>{title}</h4>
      {children}
    </div>
  );
};

export default HealthCard;
