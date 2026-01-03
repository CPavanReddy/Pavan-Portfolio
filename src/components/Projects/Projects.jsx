import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <h3>Drowsiness Detection Using Machine Learning</h3>
            <p>
              Developed a real-time drowsiness detection system using computer
              vision and machine learning to monitor eye-blink patterns and
              alert users to prevent accidents.
            </p>
            <div className="tech-stack">
              <span>Python</span>
              <span>OpenCV</span>
              <span>Machine Learning</span>
              <span>CNN</span>
            </div>
          </div>
          <div className="project-card">
            <h3>AI Powered Jewellery Visual Search Engine</h3>
            <p>
              Built an AI-based visual search system that allows users to upload
              jewellery images and find visually similar products using deep
              learning image embeddings and cosine similarity.
            </p>
            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Python</span>
              <span>Deep Learning</span>
              <span>MongoDB</span>
            </div>
          </div>
          <div className="project-card">
            <h3>Laboratory Website</h3>
            <p>
              Designed and developed a responsive laboratory website with
              service listings, test information, and contact features to
              improve online presence and accessibility.
            </p>
            <div className="tech-stack">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>
          <div className="project-card">
            <h3>PostApp (MERN Stack)</h3>
            <p>
              Developed a MERN-based post application supporting full CRUD
              operations with secure authentication and RESTful APIs.
            </p>
            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>JWT</span>
            </div>
          </div>

          <div className="project-card">
            <h3>Personal Portfolio Website</h3>
            <p>
              Created a modern and responsive personal portfolio website using
              React and pure CSS to showcase projects, skills, and contact
              information.
            </p>
            <div className="tech-stack">
              <span>React</span>
              <span>Vite</span>
              <span>CSS</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
