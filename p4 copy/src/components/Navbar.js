import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems, portfolioInfo } from '../config/navigationConfig';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" onClick={closeMobileMenu}>
            {portfolioInfo.title}
          </Link>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navigationItems.map((item) => (
            <li className="nav-item" key={item.id}>
              <Link
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? 'active' : ''
                }`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={`nav-toggle ${isOpen ? 'active' : ''}`}
          id="mobile-menu"
          onClick={toggleMobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
