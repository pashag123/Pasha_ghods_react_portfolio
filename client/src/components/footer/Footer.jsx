import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'


function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Email: pashag123@gmail.com</p> 
        <p>Phone: 310-903-9882</p>         
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FontAwesomeIcon icon={faDiscord} size="2x" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

