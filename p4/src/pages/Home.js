import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioInfo } from '../config/navigationConfig';
import '../styles/Home.css';

const Home = () => {
  const [dashArray, setDashArray] = useState('');
  const [animationSpeed, setAnimationSpeed] = useState(25);
  const [animationDirection, setAnimationDirection] = useState('normal');

  useEffect(() => {
    // Generate random dash array with bigger range
    const segments = [];
    for (let i = 0; i < 20; i++) {
      const dash = Math.floor(Math.random() * 48) + 2; // 2-50px dash
      const gap = Math.floor(Math.random() * 48) + 2; // 2-50px gap
      segments.push(dash, gap);
    }
    setDashArray(segments.join(' '));

    // Randomize speed (10-40 seconds)
    setAnimationSpeed(Math.floor(Math.random() * 31) + 10);

    // Randomize direction (50% chance clockwise or counter-clockwise)
    setAnimationDirection(Math.random() > 0.5 ? 'normal' : 'reverse');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="hero-container">
          <div className="profile-section">
          <div className="profile-image-container">
            <svg
              className="dashed-circle"
              width="530"
              height="530"
              viewBox="0 0 530 530"
              style={{
                animationDuration: `${animationSpeed}s`,
                animationDirection: animationDirection
              }}
            >
              <circle cx="265" cy="265" r="260" fill="none" stroke="#60a5fa" strokeWidth="5" strokeDasharray={dashArray} />
            </svg>
            <img src="./images/profile.jpg" alt="Profile Photo" className="profile-image" />
          </div>
            <h3 className="profile-name">Dargah Guliyev</h3>
          </div>
          <div className="content-section">
            <h1 className="hero-title">Welcome to My Portfolio</h1>
            <h2 className="hero-subtitle">{portfolioInfo.tagline}</h2>
            <p className="hero-description">
              {portfolioInfo.description}
            </p>
            <p className="hero-description">
              Through various projects and activities, I have developed skills in web development,
              programming, collaborative teamwork, and am currently exploring finance. I am always eager to take on new challenges and
              expand my knowledge in emerging technologies and financial concepts.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <i className="fas fa-code stat-icon"></i>
              <h3 className="stat-number">10+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-item">
              <i className="fas fa-book stat-icon"></i>
              <h3 className="stat-number">5+</h3>
              <p className="stat-label">Courses Completed</p>
            </div>
            <div className="stat-item">
              <i className="fas fa-users stat-icon"></i>
              <h3 className="stat-number">3+</h3>
              <p className="stat-label">Team Projects</p>
            </div>
            <div className="stat-item">
              <i className="fas fa-award stat-icon"></i>
              <h3 className="stat-number">2</h3>
              <p className="stat-label">Achievements</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
