import React from 'react';
import './AboutUs.css';
import arrow from './developerImages/arrow.png';
import dev1 from './developerImages/sanjana.jpg';import dev2 from './developerImages/sapna.jpg';
// import dev3 from '../assets/dev3.jpg';
// import dev4 from '../assets/dev4.jpg';
// import dev5 from '../assets/dev5.jpg';
// import dev6 from '../assets/dev6.jpg';

const AboutUs: React.FC = () => {
  const developers = [
    { name: 'Developer 1', role: 'Full-Stack Developer', image: dev1 },
    { name: 'Developer 2', role: 'Frontend Developer', image: dev2 },
    { name: 'Developer 3', role: 'Frontend Developer', image: 'assets/dev3.jpg' },
    { name: 'Developer 4', role: 'UI/UX Designer', image: 'assets/dev4.jpg' },
    { name: 'Developer 5', role: 'Project Manager', image: 'assets/dev5.jpg' },
    { name: 'Developer 6', role: 'QA Engineer', image: 'assets/dev6.jpg' },
  ];

  const handleBackToTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="about-us">
      <h2>About Us</h2>
      <div className="developers">
        {developers.map((dev, index) => (
          <div className="developer" key={index}>
            <img src={dev.image} alt={dev.name} className="developer-image" />
            <h3>{dev.name}</h3>
            <p>{dev.role}</p>
          </div>
        ))}
      </div>
      <button className="back-to-top" onClick={handleBackToTopClick}>
        <img src={arrow} alt="Back to Top" className="back-to-top-icon" />
      </button>
    </section>
  );
}

export default AboutUs;
