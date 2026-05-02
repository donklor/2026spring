import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { portfolioInfo } from '../config/navigationConfig';
import '../styles/Home.css';

const Home = () => {
  useEffect(() => {
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
              <img src="/images/profile.jpg" alt="Profile Photo" className="profile-image" />
              <div className="profile-overlay">
                <i className="fas fa-camera"></i>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h1 className="hero-title">Welcome to My Portfolio</h1>
            <h2 className="hero-subtitle">{portfolioInfo.tagline}</h2>
            <p className="hero-description">
              {portfolioInfo.description}
            </p>
            <p className="hero-description">
              Through various projects and activities, I have developed skills in web development,
              programming, and collaborative teamwork. I am always eager to take on new challenges and
              expand my knowledge in emerging technologies.
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
