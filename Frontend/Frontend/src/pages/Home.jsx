import Navbar from "../components/layout/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="home">
        <div className="home-container">
          <div className="home-hero">
            <h1>Healthcare & Wellness Portal</h1>
            <p>
              Track your health, stay informed, and receive personalized care
              through our preventive healthcare platform.
            </p>
          </div>

          <div className="home-topics">
            <h2>Popular Health Topics</h2>

            <div className="topics-grid">
              <div className="topic-card">🥗 Healthy Diet</div>
              <div className="topic-card">🧠 Mental Wellness</div>
              <div className="topic-card">🏃 Physical Activity</div>
              <div className="topic-card">😴 Sleep Hygiene</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
