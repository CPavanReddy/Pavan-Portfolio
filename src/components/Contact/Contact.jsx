import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <h2 className="section-title">Contact Me</h2>
        <p className="contact-subtitle">
          Open to opportunities, collaborations, and professional connections.
        </p>

        <div className="contact-grid">

          <a href="https://www.linkedin.com/in/cpavankumarreddy-mern-developer-fresher" target="_blank" className="contact-item">
            🔗 LinkedIn
          </a>

          <a href="https://github.com/CPavanReddy" target="_blank" className="contact-item">
            💻 GitHub
          </a>

          <a href="https://cpavankumarreddy.vercel.app/" target="_blank" className="contact-item">
            🌐 Portfolio
          </a>

          <a href="https://wa.me/9121652993" target="_blank" className="contact-item">
            📱 WhatsApp
          </a>

          <a href="https://t.me/pavanreddypv" target="_blank" className="contact-item">
            ✈️ Telegram
          </a>

          <a href="https://x.com/pavanreddy993?s=09" target="_blank" className="contact-item">
            🐦 Twitter
          </a>

          <a href="https://www.instagram.com/itz_me_pavanreddi" target="_blank" className="contact-item">
            📸 Instagram
          </a>

          <a href="https://www.facebook.com/share/1FTFNbtsic/" target="_blank" className="contact-item">
            📘 Facebook
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;
