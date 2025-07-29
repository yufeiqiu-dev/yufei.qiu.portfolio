import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

// Auto-close the menu on resize if width > 768px
useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Yufei Qiu</h1>

      <div className={`hamburger ${isOpen ? 'is-open' : ''}`} onClick={toggleMenu}>
        {isOpen ? (
          <span className="hamburger-x">×</span>
        ) : (
          <span className="hamburger-icon">&#9776;</span>
        )}
      </div>



      <div className="links">
        <a href="#/">Home</a>
        <a href="#/experience">Experience</a>
        <a href="#/project">Projects</a>
        <a href="#/about">About me</a>
        <a href="#/contact">Contact me</a>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <a href="#/" onClick={closeMenu}>Home</a>
          <a href="#/experience" onClick={closeMenu}>Experience</a>
          <a href="#/project" onClick={closeMenu}>Projects</a>
          <a href="#/about" onClick={closeMenu}>About me</a>
          <a href="#/contact" onClick={closeMenu}>Contact me</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
