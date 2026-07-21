import React, { useState } from "react";
import "../css/Contact.css";
import contactImage from "../assets/contact.png";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import CursorGrid from "./CursorGrid";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 1. Send Email using EmailJS
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_r4vf7n2",
        "template_hjapaim",
        templateParams,
        {
          publicKey: "WF_sZlqQpTgRFiTRg",
        },
      );
    } catch (emailError) {
      console.error("EmailJS Error: ", emailError);
      alert(
        "EmailJS Error: " +
          (emailError.text || emailError.message || JSON.stringify(emailError)),
      );
      return;
    }

    alert("Message sent successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-header">
          <p className="contact-subtitle">Contact</p>
          <h2 className="contact-title">Contact With Me</h2>
        </div>

        <div className="contact-content">
          {/* Left Column */}
          <div className="contact-left">
            <div className="cursor-grid-wrapper">
              <CursorGrid
                cellSize={40}
                color="#FF014F"
                radius={120}
                falloff="smooth"
                holdTime={400}
                fadeDuration={800}
                lineWidth={1.2}
                maxOpacity={1}
                fillOpacity={0}
                gridOpacity={0}
                cellRadius={0}
                clickPulse
                pulseSpeed={600}
              />
            </div>
            <div className="contact-image-wrapper">
              <img
                src={contactImage}
                alt="Contact Us"
                className="contact-image"
              />
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
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-box"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-box"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-box"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="contact-right">
            <div className="cursor-grid-wrapper">
              <CursorGrid
                cellSize={40}
                color="#FF014F"
                radius={120}
                falloff="smooth"
                holdTime={400}
                fadeDuration={800}
                lineWidth={1.2}
                maxOpacity={1}
                fillOpacity={0}
                gridOpacity={0}
                cellRadius={0}
                clickPulse
                pulseSpeed={600}
              />
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="contact-label">FIRST NAME</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="contact-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="contact-label">LAST NAME</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="contact-input"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="contact-label">PHONE NUMBER</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="contact-label">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="contact-label">SUBJECT</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="contact-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="contact-label">YOUR MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-textarea"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
