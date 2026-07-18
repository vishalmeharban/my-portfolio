import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const menuItems = ["Home", "About", "Skills", "Portfolio", "Contact"];
  const logoText = "BrandLogo";

  return (
    <div>
      <Navbar logoText={logoText} menuItems={menuItems} />
      <Hero />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
