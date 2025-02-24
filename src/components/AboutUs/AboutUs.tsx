import React from 'react';
import './AboutUs.css';
import arrow from './developerImages/arrow.png';
import dev1 from './developerImages/sanjana.jpg';
import dev2 from './developerImages/sapna.jpg';
import dev3 from './developerImages/thenuja.jpg';
import dev4 from './developerImages/thibakar.jpg';
import dev5 from './developerImages/nirukhika.jpg';
import dev6 from './developerImages/shaleeka.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const AboutUs: React.FC = () => {
  const developers = [
    { name: 'Sanjana', role: 'Full-Stack Developer', image: dev1, linkedin: 'https://linkedin.com/in/sanjana' },
    { name: 'Sapna', role: 'Frontend Developer', image: dev2, linkedin: 'https://linkedin.com/in/sapna' },
    { name: 'Thenuja', role: 'Full-Stack Developer', image: dev3, linkedin: 'https://linkedin.com/in/thenuja' },
    { name: 'Thibakar', role: 'Full-Stack Developer', image: dev4, linkedin: 'https://linkedin.com/in/thibakar' },
    { name: 'Nirukhika', role: 'Frontend Developer', image: dev5, linkedin: 'https://linkedin.com/in/nirukhika' },
    { name: 'Shaleeka', role: 'Frontend Developer', image: dev6, linkedin: 'https://linkedin.com/in/shaleeka' },
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
            <a href={dev.linkedin} target="_blank" rel="noopener noreferrer">
              <img src={dev.image} alt={dev.name} className="developer-image" />
              <h3>{dev.name}</h3>
              <p>{dev.role}</p>
              <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
            </a>
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
