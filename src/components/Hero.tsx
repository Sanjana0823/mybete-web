import React from "react";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/coming-soon");
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-content">
          <div>
            <br /><br />
            <h2>Live Freely</h2>
            <br></br>
          </div>
          <div>
            <h2>MyBete Take Control of Your Diabetes</h2>
          </div>
          <br /><br />
          <div className="hero-text">
            <h2>Your Partner in Diabetes Management</h2>
            <p>
              Check symptoms, Track your glucose levels, manage your diet, and stay healthy with
              MyBete.
            </p>
            <button onClick={handleGetStartedClick}>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
