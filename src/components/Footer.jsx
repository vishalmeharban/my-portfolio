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
                <span>New Delhi, India</span>
              </li>
              <li>
                <FaPhoneAlt className="footer-icon" />
                <span>+91 98765 43210</span>
              </li>
              <li>
                <FaEnvelope className="footer-icon" />
                <span>hello@example.com</span>
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
