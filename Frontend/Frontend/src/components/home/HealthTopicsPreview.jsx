import "./HealthTopicsPreview.css";

const HealthTopicsPreview = () => {
  const topics = [
    "Healthy Diet",
    "Physical Activity",
    "Mental Wellness",
    "Sleep Hygiene",
  ];

  return (
    <div className="topics-preview">
      <h3>Popular Health Topics</h3>

      <div className="topics-list">
        {topics.map((topic, index) => (
          <span key={index} className="topic-pill">
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HealthTopicsPreview;
