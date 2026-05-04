import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1: Logic Gates with Arduino',
      
      description:
        'A project demonstrating digital logic gates implemented using Arduino. This hands-on project explores fundamental electronics and programming concepts through practical circuit building.',
      technologies: ['Arduino', 'Electronics', 'Logic Gates', '#SITE1101', '#LogicGates', '#ADAUniversity'],
      image: '/images/project1.jpg',
      links: [
        { icon: 'fab fa-youtube', label: 'Demo Video', url: 'https://www.youtube.com/watch?v=qtVFufVrY3M' },
      ],
    },
    {
      id: 2,
      title: 'Project 2: Hour of Code Teaching',
      
      description:
        'Volunteering to teach programming basics to school students during Hour of Code. Focused on introducing young learners to coding concepts through interactive sessions and hands-on activities.',
      technologies: ['Teaching', 'Programming', 'Education'],
      image: '/images/project2.jpg',
      links: [],
    },
    {
      id: 3,
      title: 'Project 3: Robotic Drawing',
      
      description:
        'A robotic arm designed to draw patterns and shapes using Arduino and servo motors. This project combines mechanical engineering, programming, and creativity to create artistic outputs through automation.',
      technologies: ['Robotics', 'Drawing', 'Servo Motors', '#Mindstorms', '#SITE1101', '#CodeArt', '#BotlarYurdu'],
      image: '/images/project3.jpg',
      links: [
        { icon: 'fab fa-youtube', label: 'Demo Video', url: 'https://www.youtube.com/watch?v=roJi6C8b-4I' },
      ],
    },
  ];

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">My Projects</h1>
          <p className="hero-subtitle">Showcasing my work and innovation.</p>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-content">
                  <span className="project-tag">{project.tag}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <i className={link.icon}></i> {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
