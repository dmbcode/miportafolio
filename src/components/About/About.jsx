import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section id="sobre-mi" className="about section">
      <div className="container">
        <h2 className="section-title">Sobre <span>Mí</span></h2>

        <div className="about-content">
          <div className="about-text">
            <h3>¡Hola de nuevo!</h3>
            <p>
              Soy un apasionado de la tecnología con experiencia en el desarrollo de
              paginas web completas. Mi objetivo es transformar ideas complejas en
              interfaces de usuario simples, hermosas e intuitivas.
            </p>
            <p>
              Me considero un <span className="highlight">solucionador de problemas</span> y
              siempre estoy en la búsqueda de aprender nuevas tecnologías y mejorar
              mis habilidades. Cuando no estoy programando, me gusta contribuir a
              proyectos Open Source y leer sobre las últimas tendencias tecnológicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
