import MainLayout from "../components/layout/MainLayout";
import "./HealthTopics.css";

const HealthTopics = () => {
  const topics = [
    {
      title: "Healthy Diet",
      description: "Learn about balanced nutrition and healthy eating habits."
    },
    {
      title: "Physical Activity",
      description: "Understand the importance of regular exercise and movement."
    },
    {
      title: "Mental Health",
      description: "Tips and guidance to maintain good mental well-being."
    },
    {
      title: "Sleep Hygiene",
      description: "Improve sleep quality with healthy routines."
    }
  ];

  return (
    <MainLayout>
      <h2 className="topics-heading">Health Topics</h2>

      <div className="topics-grid">
        {topics.map((topic, index) => (
          <div key={index} className="topic-card">
            <h4>{topic.title}</h4>
            <p>{topic.description}</p>
            <button className="topic-btn">Learn More</button>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default HealthTopics;
