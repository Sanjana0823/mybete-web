import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/coming-soon');
  };

  return (
    <section className="hero">
      <h2>Your Partner in Diabetes Management</h2>
      <p>Track your glucose levels, manage your diet, and stay healthy with MyBete.</p>
      <button onClick={handleGetStartedClick}>Get Started</button>
    </section>
  );
}

export default Hero;
