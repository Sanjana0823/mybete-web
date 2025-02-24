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
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const AboutUs: React.FC = () => {
  const developers = [
    { name: 'Sanjana', role: 'Full-Stack Developer', image: dev1, linkedin: 'https://www.linkedin.com/in/sanjana-senevirathna-09421b264/', github: 'https://github.com/Sanjana0823' },
    { name: 'Sapna', role: 'Full-Stack Developer', image: dev2, linkedin: 'http://www.linkedin.com/in/sapna-hansani-a371612b1', github: 'https://github.com/Sapnahansani' },
    { name: 'Thenujaa', role: 'Full-Stack Developer', image: dev3, linkedin: 'http://linkedin.com/in/thenujaa-suntharesan-475726310', github: 'https://github.com/ThenujaaSuntharesan' },
    { name: 'Thibakar', role: 'Full-Stack Developer', image: dev4, linkedin: 'https://www.linkedin.com/in/thibakar-sri', github: 'https://github.com/ThibakarSri' },
    { name: 'Nirukhika', role: 'Full-Stack Developer', image: dev5, linkedin: 'https://www.linkedin.com/in/nirukshika-wijesiri-8229662b5/', github: 'https://github.com/Nirukshika' },
    { name: 'Shaleeka', role: 'Full-Stack Developer', image: dev6, linkedin: 'http://www.linkedin.com/in/shaleeka-bandara-59b4502b6', github: 'https://github.com/Shaleeka2002' },
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
            <div className="social-icons">
              <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href={dev.github} target="_blank" rel="noopener noreferrer" className="github">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
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
