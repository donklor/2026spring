import React from 'react';
import { Link } from 'react-router-dom';
import { navigationItems, socialLinks, portfolioInfo } from '../config/navigationConfig';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{portfolioInfo.title}</h3>
            <p>Showcasing my journey in technology and development.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {navigationItems.map((item) => {
                const icons = {
                  '/': 'fas fa-home',
                  '/about': 'fas fa-user',
                  '/projects': 'fas fa-project-diagram'
                };
                return (
                  <li key={item.id}>
                    <Link to={item.path}>
                      <i className={icons[item.path]}></i> {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect With Me</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.label}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
            <p className="repo-link">
              <i className="fab fa-github"></i>
              <a href={portfolioInfo.githubRepo} target="_blank" rel="noopener noreferrer">
                View GitHub Repository
              </a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {portfolioInfo.copyYear} {portfolioInfo.title}. All rights reserved. |
            Designed with <i className="fas fa-heart"></i>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
