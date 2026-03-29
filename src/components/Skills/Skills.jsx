import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiSass
} from 'react-icons/si';
import './Skills.scss';

const skillsData = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Sass', icon: <SiSass /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Git', icon: <FaGitAlt /> }
];

const Skills = () => {
  return (
    <section id="habilidades" className="skills section">
      <div className="container">
        <h2 className="section-title">Mis <span>Habilidades</span></h2>

        <div className="skills-container">
          {skillsData.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-icon">
                {skill.icon}
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
