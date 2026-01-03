import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <p>
          © {new Date().getFullYear()} C Pavan Kumar Reddy
        </p>

        <p className="footer-sub">
          MERN Stack Developer | ARTIFICIAL INTELLIGENCE & DATA SCIENCE
        </p>

      </div>
    </footer>
  );
};

export default Footer;
