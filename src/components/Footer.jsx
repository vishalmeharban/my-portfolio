import React from 'react';
import '../css/Footer.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <img src={logo} alt="Logo" className="footer-logo" />
            <p className="footer-about">
              A passionate web developer dedicated to building high-quality, responsive web applications with dynamic user experiences.
            </p>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="footer-contact-list">
              <li>
                <FaMapMarkerAlt className="footer-icon" />
                <span>Indore, Madhya Pradesh</span>
              </li>
              <li>
                <FaPhoneAlt className="footer-icon" />
                <a href="tel:+919302232221" style={{ color: 'inherit', textDecoration: 'none' }}>+91 9302232221</a>
              </li>
              <li>
                <FaEnvelope className="footer-icon" />
                <a href="mailto:vishalmeharban30@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>vishalmeharban30@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} <span className="highlight-text">Vishal Meharban</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
