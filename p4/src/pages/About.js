import React from 'react';
import '../styles/About.css';

const About = () => {
  const qualifications = [
    {
      title: 'Education',
      icon: 'fas fa-graduation-cap',
      items: [
        'High School Diploma in Science & Technology',
        'Advanced courses in Computer Science and Mathematics',
        'Completed Codecademy Web Development learning path',
        'Hands-on experience with HTML, CSS, and JavaScript',
      ],
    },
    {
      title: 'Certifications',
      icon: 'fas fa-certificate',
      items: [
        'Responsive Web Design',
        'JavaScript Algorithms',
        'Front-End Development Libraries',
        'Hour of Code Completion',
      ],
    },
    {
      title: 'Technical Skills',
      icon: 'fas fa-tools',
      items: [
        'HTML5, CSS3, JavaScript (ES6+)',
        'React.js, Node.js basics',
        'Git & GitHub workflow',
        'Responsive design and accessibility',
      ],
    },
  ];

  const activities = [
    {
      title: 'Hour of Code',
      icon: 'fas fa-code',
      description:
        'Participated in the Hour of Code initiative and completed interactive lessons that strengthened my programming fundamentals and computational thinking.',
    },
    {
      title: 'Robotics Club',
      icon: 'fas fa-robot',
      description:
        'Worked on robotics projects using Arduino and sensors to build autonomous machines and improve my engineering and teamwork skills.',
    },
    {
      title: 'Hackathons',
      icon: 'fas fa-users',
      description:
        'Joined hackathons to collaborate with peers, generate ideas quickly, and turn prototypes into working products under pressure.',
    },
    {
      title: 'Workshops',
      icon: 'fas fa-chalkboard-teacher',
      description:
        'Organized and led workshops that helped beginners learn web development concepts and develop confidence with code.',
    },
  ];

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">About Me</h1>
          <p className="hero-subtitle">My background, qualifications, and activities.</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-intro">
              <h2 className="section-title">Who I Am</h2>
              <p>
                Hello! I am a passionate learner currently exploring the worlds of computer science, mathematics, and economic theory. With a strong foundation in Olympiad-level problem solving and a keen eye for analytical detail, I enjoy creating innovative solutions grounded in rigorous logic. My journey has been driven by a curiosity about the scientific principles underlying financial systems and a desire to continuously integrate computational methods with quantitative models. Through my background in mathematics and economics competitions, I have developed advanced skills in algorithmic thinking and collaborative teamwork. I am currently focused on leveling up my technical knowledge of finance as a science, exploring the mathematical frameworks that govern the field. I am always eager to take on new challenges that allow me to expand my expertise in emerging technologies and theoretical financial concepts.
              </p>
            </div>
            <div>
              <img src="/images/about.jpg" alt="About Image" className="about-image" />
            </div>
          </div>

          <div className="about-cards section-spacing">
            {qualifications.map((qual, index) => (
              <div key={index} className="about-card">
                <h3>
                  <i className={qual.icon}></i> {qual.title}
                </h3>
                <ul>
                  {qual.items.map((item, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check-circle"></i> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="activity-grid section-spacing">
            {activities.map((activity, index) => (
              <div key={index} className="activity-card">
                <h3>
                  <i className={activity.icon}></i> {activity.title}
                </h3>
                <p>{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
