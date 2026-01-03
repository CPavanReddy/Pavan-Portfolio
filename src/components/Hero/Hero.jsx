import "./Hero.css";
import profileImg from "../../assets/images/image.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="name-animate">C&nbsp;Pavan&nbsp;Kumar&nbsp;Reddy</span>
          </h1>

          <h2 className="role-animate">MERN Stack Developer</h2>

          <p>
            I build modern, scalable, and user-friendly web applications
            using React, Node.js, Express, and MongoDB.
          </p>

          <div className="hero-buttons">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              Download Resume
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image image-animate">
          <img src={profileImg} alt="Pavan Profile" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
