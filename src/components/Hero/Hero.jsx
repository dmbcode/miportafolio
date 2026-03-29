import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section id="inicio" className="hero section">
      <div className="container hero-content floating-element">
        <p className="greeting">Hola, mi nombre es</p>
        <h1 className="title">
          Diego Manjarres
        </h1>
        <h2 className="subtitle">
          Construyo experiencias en <span className="text-neon">la web.</span>
        </h2>
        <p className="description">
          Soy un desarrollador de software enfocado en crear productos digitales modernos,
          accesibles y centrados en el usuario. Actualmente estoy especializado en
          construir interfaces web dinámicas e impactantes.
        </p>

        <div className="hero-cta">
          <a href="#proyectos" className="btn btn-primary">
            Ver mis proyectos
          </a>
          <a href="#contacto" className="btn btn-outline">
            Contáctame
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
