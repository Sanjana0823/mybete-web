import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: </p>
          <p>Phone: </p>
          <p>Address: </p>
        </div>
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
          </p>
          <p>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
            </a>
          </p>
          <p>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 MyBete. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
