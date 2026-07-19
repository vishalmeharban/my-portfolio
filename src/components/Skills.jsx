import React from 'react';
import '../css/Skills.css';
import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiNextdotjs, SiFirebase } from 'react-icons/si';

const skillsData = [
  { id: 1, name: 'React js', icon: <FaReact />, color: '#61DAFB' },
  { id: 2, name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
  { id: 3, name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
  { id: 4, name: 'Javascript', icon: <IoLogoJavascript />, color: '#F7DF1E' },
  { id: 5, name: 'Next js', icon: <SiNextdotjs />, color: '#ffffff' }, 
  { id: 6, name: 'GitHub', icon: <FaGithub />, color: '#ffffff' },
  { id: 7, name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' }
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="skills-header">
          <p className="skills-subtitle">Features</p>
          <h2 className="skills-title">My Professional Skills</h2>
        </div>
        
        <div className="skills-grid">
          {skillsData.map((skill) => (
            <div key={skill.id} className="skill-card">
              <div 
                className="skill-icon-wrapper"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
