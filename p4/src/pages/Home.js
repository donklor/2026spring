import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioInfo } from '../config/navigationConfig';
import '../styles/Home.css';

const Home = () => {
  const [animatedStats, setAnimatedStats] = useState(false);

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

  const handleImageHover = (e) => {
    const image = e.currentTarget;
    if (e.type === 'mouseenter') {
      image.style.transform = 'scale(1.05)';
      image.style.transition = 'transform 0.3s ease';
    } else {
      image.style.transform = 'scale(1)';
    }
  };

  const stats = [
    { icon: 'fas fa-code', number: '10+', label: 'Projects Completed' },
    { icon: 'fas fa-book', number: '5+', label: 'Courses Completed' },
    { icon: 'fas fa-users', number: '3+', label: 'Team Projects' },
    { icon: 'fas fa-award', number: '2', label: 'Achievements' },
  ];

  return (
    <main>
      <section className="hero">
        <div className="hero-container">
          <div className="profile-section">
            <div className="profile-image-container">
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="profile-image"
                onMouseEnter={handleImageHover}
                onMouseLeave={handleImageHover}
              />
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
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <i className={`${stat.icon} stat-icon`}></i>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
