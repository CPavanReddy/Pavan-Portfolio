// import { useState } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="navbar">
//       <div className="nav-container">

//         <div className="logo">
//           <a href="#home">PavanReddy</a>
//         </div>

//         <ul className="nav-links">
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#skills">Skills</a></li>
//           <li><a href="#projects">Projects</a></li>
//           <li><a href="#contact" className="nav-btn">Contact</a></li>
//         </ul>

//         <div
//           className={`hamburger ${menuOpen ? "open" : ""}`}
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>

//       <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
//         <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
//         <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
//         <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
//         <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
//         <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="nav-container">

          {/* Logo */}
          <div className="logo">
            <a href="#home"className="nav-btn">PavanReddy</a>
          </div>

          {/* Desktop Menu */}
          <ul className="nav-links">
            <li><a href="#home"className="nav-btn">Home</a></li>
            <li><a href="#about"className="nav-btn">About</a></li>
            <li><a href="#skills"className="nav-btn">Skills</a></li>
            <li><a href="#projects" className="nav-btn">Projects</a></li>
            <li><a href="#contact" className="nav-btn">Contact</a></li>
          </ul>

          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </header>

      {/* Mobile Menu (OUTSIDE header) */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <a onClick={() => setMenuOpen(false)} href="#home"className="nav-btn">Home</a>
        <a onClick={() => setMenuOpen(false)} href="#about"className="nav-btn">About</a>
        <a onClick={() => setMenuOpen(false)} href="#skills"className="nav-btn">Skills</a>
        <a onClick={() => setMenuOpen(false)} href="#projects"className="nav-btn">Projects</a>
        <a onClick={() => setMenuOpen(false)} href="#contact"className="nav-btn">Contact</a>
      </div>
    </>
  );
};

export default Navbar;
