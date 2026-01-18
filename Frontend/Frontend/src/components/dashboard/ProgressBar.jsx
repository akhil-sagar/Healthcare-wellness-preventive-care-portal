import "./ProgressBar.css";

const ProgressBar = ({ value, goal }) => {
  const percentage = Math.min((value / goal) * 100, 100);

  return (
    <div className="progress-wrapper">
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="progress-text">
        {Math.round(percentage)}%
      </div>
    </div>
  );
};

export default ProgressBar;
