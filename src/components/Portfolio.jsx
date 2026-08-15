import React, { useState } from 'react';
import '../css/Portfolio.css';
import netflixImage from '../assets/netflix-clone.png';
import ecommerceImage from '../assets/ecommerce-thumbnail.png';
import expenseTrackerImage from '../assets/expense-tracker-thumbnail.jpg';
import GlareHover from './GlareHover';

const portfolioData = [
  {
    id: 0,
    title: 'Expense Tracker',
    category: 'Recent Work',
    image: expenseTrackerImage,
    description: 'A comprehensive web app for tracking income, expenses, and managing personal finances effortlessly.',
    link: 'https://expense-tracker-app-jet-delta.vercel.app/'
  },
  {
    id: 1,
    title: 'Netflix Clone',
    category: 'Recent Work',
    image: netflixImage,
    description: 'A modern Netflix clone web application with a sleek dark theme.',
    link: 'https://netflix-clone-efjv77x5k-vishal-meharbans-projects.vercel.app'
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'Recent Work',
    image: ecommerceImage,
    description: 'A full-stack e-commerce solution with dynamic routing and payment integration.',
    link: 'https://e-commerce-forever-ufh5.vercel.app/login'
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
            <GlareHover
              key={project.id}
              className="portfolio-card"
              href={project.link || '#'}
              target={project.link ? "_blank" : "_self"}
              rel="noopener noreferrer"
              glareColor="#ffffff"
              glareOpacity={0.2}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={1200}
              background="linear-gradient(145deg, #1a1c20 0%, #121416 100%)"
              borderRadius="20px"
              borderColor="rgba(255, 255, 255, 0.05)"
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
            </GlareHover>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
