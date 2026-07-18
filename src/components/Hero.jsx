import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../css/Hero.css";
import heroImage from "../assets/man-working-on-computer.png";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer.", "Web Designer.", "React JS Developer"],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 40,
    delaySpeed: 2000,
  });
  return (
    <header className="hero-section">
      <div className="hero-container">
        <article className="hero-content">
          <p className="hero-subheading">WELCOME TO MY WORLD</p>
          <h1 className="hero-heading">
            Hi, I’m <span className="hero-name">Jone Lee</span>
            <br />
            <span className="hero-typing-line">
              a <span>{text}</span>
              <Cursor cursorStyle="|" />
            </span>
          </h1>
          <p className="hero-description">
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </p>
          <div className="hero-btn-group">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-download-btn"
            >
              Download CV
            </a>
          </div>
        </article>
        <div className="hero-image-wrapper">
          <img
            src={heroImage}
            alt="Man working on computer"
            className="hero-image"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
