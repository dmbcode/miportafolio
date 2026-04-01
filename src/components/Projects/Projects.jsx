import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.scss';

const projectsData = [
  {
    id: 1,
    title: 'Barber Dashboard',
    description: 'Un panel de administración completo para gestionar citas, servicios y usuarios con gráficos interactivos y análisis de datos en tiempo real.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    /*github: '#',*/
    live: 'https://barberprodashboard.netlify.app/',
  },
  {
    id: 2,
    title: 'Landing Page - Sinergia Legal',
    description: 'Landing page para bufete de abogados que permite mostrar sus servicios y contactarlos.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    /*github: '#',*/
    live: 'https://sinergialegal.netlify.app/#inicio',
  },
  {
    id: 3,
    title: 'Pagina Web Educativa - Colegio EduTech',
    description: 'Proyecto de pagina web educativa, que muestra informacion sobre la institucion, sus servicios, sus instalaciones y su metodologia de enseñanza.',
    tech: ['HTML', 'SCSS', 'JavaScript', 'React'],
    /*github: '#',*/
    live: 'https://sitiowebedutech.netlify.app/',
  }
];

const Projects = () => {
  return (
    <section id="proyectos" className="projects section">
      <div className="container">
        <h2 className="section-title">Mis <span>Proyectos</span></h2>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-img">
                <span className="placeholder-text">PROYECTO {project.id}</span>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {/* <a href={project.github} target="_blank" rel="noreferrer">
                    <FiGithub /> Código
                  </a> */}
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
