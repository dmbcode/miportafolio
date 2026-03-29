import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#inicio" className="logo" onClick={closeMenu}>
          Porta<span>folio</span>
        </a>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#inicio" onClick={closeMenu}>Inicio</a></li>
          <li><a href="#sobre-mi" onClick={closeMenu}>Sobre Mí</a></li>
          <li><a href="#proyectos" onClick={closeMenu}>Proyectos</a></li>
          <li><a href="#habilidades" onClick={closeMenu}>Habilidades</a></li>
          <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
        </ul>

        <div className="menu-icon" onClick={toggleMenu}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
