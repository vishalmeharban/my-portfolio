import React, { useState } from 'react';
import '../css/Contact.css';
import contactImage from '../assets/contact.png';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 1. Save data to Firebase Firestore
      await addDoc(collection(db, "contacts"), formData);

      // 2. Send Email using Web3Forms (You need to add your access key here)
      // Get your free access key from: https://web3forms.com/
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE", // <-- REPLACE THIS
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      alert("Message sent successfully!");
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <p className="contact-subtitle">Contact</p>
          <h2 className="contact-title">Contact With Me</h2>
        </div>
        
        <div className="contact-content">
          {/* Left Column */}
          <div className="contact-left">
            <div className="contact-image-wrapper">
              <img src={contactImage} alt="Contact Us" className="contact-image" />
            </div>
            
            <div className="contact-details">
              <div className="contact-details-item">
                <FaEnvelope className="contact-icon" />
                <span>hello@example.com</span>
              </div>
              <div className="contact-details-item">
                <FaPhoneAlt className="contact-icon" />
                <span>+1 234 567 890</span>
              </div>
            </div>

            <div className="contact-social">
              <h3 className="social-title">Find me on</h3>
              <div className="social-icons-wrapper">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-box" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-box" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-box" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="contact-label">FIRST NAME</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="contact-input" required />
                </div>
                <div className="form-group">
                  <label className="contact-label">LAST NAME</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="contact-input" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="contact-label">PHONE NUMBER</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="contact-input" required />
                </div>
                <div className="form-group">
                  <label className="contact-label">EMAIL</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="contact-input" required />
                </div>
              </div>
              
              <div className="form-group">
                <label className="contact-label">SUBJECT</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="contact-input" required />
              </div>
              
              <div className="form-group">
                <label className="contact-label">YOUR MESSAGE</label>
                <textarea name="message" value={formData.message} onChange={handleChange} className="contact-textarea" required></textarea>
              </div>
              
              <button type="submit" className="submit-btn">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
