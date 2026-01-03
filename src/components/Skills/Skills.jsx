import "./Skills.css";
import { FaHtml5,  FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt} from "react-icons/fa";
import {  SiExpress,  SiMongodb,  SiMysql,  SiPostman,  SiTensorflow,  SiOpencv,SiNumpy} from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Frontend</h3>
            <ul>
              <li><FaHtml5 /> HTML</li>
              <li><FaCss3Alt /> CSS</li>
              <li><FaJs /> JavaScript (ES6+)</li>
              <li><FaReact /> React.js</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <ul>
              <li><FaNodeJs /> Node.js</li>
              <li><SiExpress /> Express.js</li>
              <li>RESTful APIs</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Databases</h3>
            <ul>
              <li><SiMongodb /> MongoDB</li>
              <li><SiMysql /> MySQL</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>AI / ML</h3>
            <ul>
              <li><SiTensorflow /> TensorFlow</li>
              <li><SiOpencv /> OpenCV</li>
              <li><SiNumpy /> NumPy</li>
              <li>Machine Learning</li>
              <li>Computer Vision</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <ul>
              <li><FaGitAlt /> Git & GitHub</li>
              <li><SiPostman /> Postman</li>
              <li>VS Code</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
