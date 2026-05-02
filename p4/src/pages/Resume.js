import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
  const experience = [
    {
      title: 'Junior Web Developer',
      company: 'Tech Solutions Inc.',
      date: '2024 - Present',
      description:
        'Developing responsive web applications, collaborating with teams, and applying modern front-end and back-end practices to deliver functional and polished solutions.',
    },
    {
      title: 'Freelance Developer',
      company: 'Self-Employed',
      date: '2023 - 2024',
      description:
        'Built websites and web applications for small businesses, handled project planning, and maintained client relationships across multiple deliveries.',
    },
    {
      title: 'Coding Instructor Assistant',
      company: 'Local Bootcamp',
      date: '2023',
      description:
        'Supported beginner students in learning programming concepts, debugging code, and developing interactive website projects.',
    },
  ];

  const education = [
    {
      title: 'High School Diploma',
      school: 'Science & Technology High School',
      date: '2022 - 2024',
      description:
        'Studied computer science and math, participated in coding competitions, and completed technology-focused coursework.',
    },
    {
      title: 'Online Certifications',
      school: 'Codecademy and Online Platforms',
      date: '2023 - Present',
      description:
        'Completed training in web development, JavaScript, and responsive design to support continuous learning and skill growth.',
    },
  ];

  const skills = [
    { name: 'HTML5 & CSS3', level: '90%' },
    { name: 'JavaScript', level: '85%' },
    { name: 'React.js', level: '80%' },
    { name: 'Node.js', level: '75%' },
    { name: 'Git & GitHub', level: '85%' },
    { name: 'Responsive Design', level: '90%' },
  ];

  const certifications = [
    'Responsive Web Design',
    'JavaScript Algorithms',
    'Front-End Development',
    'Hour of Code Certified',
  ];

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">My Resume</h1>
          <p className="hero-subtitle">Professional background and qualifications.</p>
        </div>
      </section>

      <section className="resume-section">
        <div className="resume-container">
          <div className="resume-header">
            <h1>Professional Resume</h1>
            <p>Full-stack developer with experience in web development, robotics, and educational projects.</p>
            <a href="#download" className="download-btn">
              <i className="fas fa-download"></i> Download PDF
            </a>
          </div>

          <div className="resume-content">
            <div className="main-content">
              <h2 className="section-title">Work Experience</h2>
              {experience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <span className="experience-title">{exp.title}</span>
                    <span className="experience-date">{exp.date}</span>
                  </div>
                  <div className="experience-company">{exp.company}</div>
                  <p className="experience-description">{exp.description}</p>
                </div>
              ))}

              <h2 className="section-title">Education</h2>
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-header">
                    <span className="education-title">{edu.title}</span>
                    <span className="education-date">{edu.date}</span>
                  </div>
                  <div className="education-school">{edu.school}</div>
                  <p className="education-description">{edu.description}</p>
                </div>
              ))}
            </div>

            <aside className="sidebar">
              <div className="sidebar-card">
                <h3>
                  <i className="fas fa-briefcase"></i> Skills
                </h3>
                <ul className="skills-list">
                  {skills.map((skill, index) => (
                    <li key={index}>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card">
                <h3>
                  <i className="fas fa-address-card"></i> Contact
                </h3>
                <ul className="contact-info">
                  <li>
                    <i className="fas fa-envelope"></i> developer@example.com
                  </li>
                  <li>
                    <i className="fas fa-phone"></i> +1 (555) 123-4567
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i> San Francisco, CA
                  </li>
                </ul>
                <div className="social-links">
                  <a href="https://github.com/username/portfolio" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.codecademy.com" target="_blank" rel="noopener noreferrer" aria-label="Codecademy">
                    <i className="fas fa-graduation-cap"></i>
                  </a>
                  <a href="#contact" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>

              <div className="sidebar-card">
                <h3>
                  <i className="fas fa-certificate"></i> Certifications
                </h3>
                <ul className="certifications-list">
                  {certifications.map((cert, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i> {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resume;
