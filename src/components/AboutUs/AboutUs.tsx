import React from 'react';
import './AboutUs.css';
import arrow from './developerImages/arrow.png';
import dev1 from './developerImages/sanjana.jpg';import dev2 from './developerImages/sapna.jpg';
import dev3 from './developerImages/thenuja.jpg';
import dev4 from './developerImages/thibakar.jpg';
import dev5 from './developerImages/nirukhika.jpg';
import dev6 from './developerImages/shaleeka.jpg';

const AboutUs: React.FC = () => {
  const developers = [
    { name: 'Developer 1', role: 'Full-Stack Developer', image: dev1 },
    { name: 'Developer 2', role: 'Frontend Developer', image: dev2 },
    { name: 'Developer 3', role: 'Frontend Developer', image: dev3 },
    { name: 'Developer 4', role: 'Full-Stack Developer', image: dev4 },
    { name: 'Developer 5', role: 'Full-Stack Developer', image: dev5 },
    { name: 'Developer 6', role: 'Frontend Developer', image: dev6 },
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
