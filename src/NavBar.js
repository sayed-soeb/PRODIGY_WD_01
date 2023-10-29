import React, { useState, useEffect } from 'react';
import './Styles/Navbar.css';
import icon from './Styles/share.jpg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 0.1) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolling ? 'scrolling' : ''}`}>
      <div className="navbar-left">
        <img src={icon} alt="SpaceX" />
      </div>
      <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>Falcon 9</li>
          <li>Dragon</li>
          <li>Falcon Heavy</li>
          <li>Starship</li>
          <li>Human Spaceship</li>
          <li>Rideshare</li>
          <li>Starlink</li>
        </ul>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
