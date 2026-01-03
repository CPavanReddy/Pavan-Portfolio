import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <h2 className="section-title">About Me</h2>

        <p className="about-text">
          I am an <strong>entry-level MERN Stack Developer</strong> with hands-on
          experience in building full-stack web applications using
          <strong> React.js, Node.js, Express.js, and MongoDB</strong>.
          I have developed real-world projects including a MERN CRUD
          Post Application, an AI-powered jewellery visual search engine,
          and a machine learning–based drowsiness detection system.
        </p>

        <p className="about-text">
          I have a strong foundation in <strong>JavaScript (ES6+)</strong>,
          RESTful API development, and database design, with experience
          integrating frontend and backend systems for efficient performance.
          I focus on writing clean, maintainable code and building
          responsive user interfaces.
        </p>

        <p className="about-text">
          I hold a <strong>B.Tech in Artificial Intelligence & Data Science </strong>
          from <strong> Aditya College of Engineering, Madanapalle</strong>
          (2025). I am actively seeking opportunities as a
          <strong> Frontend (REACTJS) / MERN Stack Developer /Backend Developer (NODEJS)  </strong> to start my
          professional career.
        </p>

        <div className="about-info">
          <div>
            <span>🎓</span>
            <p>
              B.Tech – Artificial Intelligence & Data Science <br />
              Aditya College of Engineering, Madanapalle <br />
              2025 Pass Out
            </p>
          </div>

          <div>
            <span>📜</span>
            <p>
              MERN Stack Developer Training <br />
              JSpiders
            </p>
          </div>

          <div>
            <span>📍</span>
            <p>Chittoor, Andhra Pradesh</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
