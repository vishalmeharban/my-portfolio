import React, { useState } from 'react';
import '../css/Portfolio.css';
import projectImage from '../assets/project-placeholder.png';
import netflixImage from '../assets/netflix-clone.png';
import ecommerceImage from '../assets/ecommerce-thumbnail.png';

const portfolioData = [
  {
    id: 0,
    title: 'Netflix Clone',
    category: 'Recent Work',
    image: netflixImage,
    description: 'A modern Netflix clone web application with a sleek dark theme.',
    link: 'https://netflix-clone-efjv77x5k-vishal-meharbans-projects.vercel.app'
  },
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Recent Work',
    image: ecommerceImage,
    description: 'A full-stack e-commerce solution with dynamic routing and payment integration.',
    link: 'https://e-commerce-forever-ufh5.vercel.app/login'
  },
  {
    id: 2,
    title: 'Social Media App',
    category: 'All Projects',
    image: projectImage,
    description: 'A real-time social networking app with chat and live notifications.'
  },
  {
    id: 3,
    title: 'SaaS Dashboard',
    category: 'Recent Work',
    image: projectImage,
    description: 'A modern, responsive analytics dashboard for tracking SaaS metrics.'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    category: 'All Projects',
    image: projectImage,
    description: 'A customizable personal portfolio template for developers and designers.'
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    category: 'All Projects',
    image: projectImage,
    description: 'A mobile-first progressive web app to track daily workouts and nutrition.'
  },
  {
    id: 6,
    title: 'Booking System',
    category: 'All Projects',
    image: projectImage,
    description: 'An appointment scheduling system with calendar integration and reminders.'
  }
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All Projects');

  const filteredProjects = activeTab === 'All Projects' 
    ? portfolioData 
    : portfolioData.filter(project => project.category === activeTab);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <p className="portfolio-subtitle">Visit my portfolio</p>
          <h2 className="portfolio-title">My Portfolio</h2>
        </div>
        
        <div className="portfolio-tabs">
          <button 
            className={`tab-btn ${activeTab === 'All Projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('All Projects')}
          >
            All Projects
          </button>
          <button 
            className={`tab-btn ${activeTab === 'Recent Work' ? 'active' : ''}`}
            onClick={() => setActiveTab('Recent Work')}
          >
            Recent Work
          </button>
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <a 
              key={project.id} 
              href={project.link || '#'} 
              target={project.link ? "_blank" : "_self"} 
              rel="noopener noreferrer" 
              className="portfolio-card"
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <div className="portfolio-image-wrapper">
                <img src={project.image} alt={project.title} className="portfolio-image" />
                <div className="portfolio-overlay">
                  <span className="view-project-btn">View Project</span>
                </div>
              </div>
              <div className="portfolio-info">
                <h3 className="portfolio-project-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
