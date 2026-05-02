import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1: Web Application',
      tag: 'Featured',
      description:
        'A comprehensive web application built with modern technologies. This project demonstrates full-stack development skills, responsive design, and user-focused features.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React'],
      image: '/images/project1.jpg',
      links: [
        { icon: 'fas fa-external-link-alt', label: 'Live Demo', url: '#project1-demo' },
        {
          icon: 'fab fa-github',
          label: 'Source Code',
          url: 'https://github.com/username/portfolio',
        },
      ],
    },
    {
      id: 2,
      title: 'Project 2: Hour of Code',
      tag: 'Educational',
      description:
        'An interactive coding tutorial platform created for Hour of Code. It includes hands-on lessons, challenge exercises, and progress feedback for beginner learners.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js'],
      image: '/images/project2.jpg',
      links: [
        { icon: 'fas fa-external-link-alt', label: 'Live Demo', url: '#project2-demo' },
        {
          icon: 'fab fa-github',
          label: 'Source Code',
          url: 'https://github.com/username/portfolio',
        },
      ],
    },
    {
      id: 3,
      title: 'Project 3: Robotics',
      tag: 'Hardware',
      description:
        'An autonomous line-following robot built with Arduino, IR sensors, and motor controllers. This project highlights hardware-software integration and engineering problem solving.',
      technologies: ['Arduino', 'C++', 'Electronics', 'Sensors'],
      image: '/images/project3.jpg',
      links: [
        { icon: 'fas fa-video', label: 'Demo Video', url: '#project3-demo' },
        {
          icon: 'fab fa-github',
          label: 'Source Code',
          url: 'https://github.com/username/portfolio',
        },
      ],
    },
    {
      id: 4,
      title: 'Project 4: Task Manager App',
      tag: 'Mobile',
      description:
        'A mobile productivity app that supports task management, reminders, and team collaboration. It highlights design thinking, usability, and mobile-first development.',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      image: '/images/project4.jpg',
      links: [
        { icon: 'fas fa-external-link-alt', label: 'Live Demo', url: '#project4-demo' },
        {
          icon: 'fab fa-github',
          label: 'Source Code',
          url: 'https://github.com/username/portfolio',
        },
      ],
    },
  ];

  return (
    <main>
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h1 className="hero-title">My Projects</h1>
          <p className="hero-subtitle">Showcasing my work and innovations</p>
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
