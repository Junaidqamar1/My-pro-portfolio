import React, { useState } from 'react';
import '../styles/nav.css';
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Function to handle smooth scrolling and close the menu
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowMenu(false); // Closes the mobile menu after clicking
  };

  return (
    <>
      <div className="menu">
        <img src={menu} onClick={() => setShowMenu(!showMenu)} alt="Open Menu" />
      </div>
  
      <div className={`nav ${showMenu ? 'active' : ''}`}>
        <img src={close} onClick={() => setShowMenu(!showMenu)} alt="Close Menu" />
        
        <div className="nav-links">
          {/* Replaced generic list items with clickable actions */}
          <li data-text="Home" onClick={() => handleScroll('home')}>
            <span className="rolling-text">Home</span>
          </li>
          <li data-text="About" onClick={() => handleScroll('about')}>
            <span className="rolling-text rolling-text-1">About</span>
          </li>
          <li data-text="Projects" onClick={() => handleScroll('project')}>
            <span className="rolling-text rolling-text-2">Projects</span>
          </li>
        </div>

        <div className="btn">
          <button onClick={() => handleScroll('contact')}>
            <li data-text="contact-btn" className='contact-btn'>
              <span className="rolling-text rolling-text-contact">Contact</span>
            </li>
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;