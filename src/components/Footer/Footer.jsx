import React from 'react';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {currentYear} <span>DMBCode</span>. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
