import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Process from './components/Process';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedProjectType, setSelectedProjectType] = useState('Web Development');

  // IntersectionObserver for smooth scroll-reveal transitions
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      '.reveal-on-scroll, .reveal-left, .reveal-right'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: '60px 0px 20px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Smooth scroll and auto-preselect service in unified project form
  const handleSelectService = (serviceType) => {
    setSelectedProjectType(serviceType);
    const element = document.getElementById('contact');
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="app-root">
      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main id="main-content">
        <Hero />
        <Features onSelectService={handleSelectService} />
        <About />
        <Process onSelectService={handleSelectService} />
        <Services onSelectService={handleSelectService} />
        {/* Unified Final CTA + Project Form */}
        <Contact
          selectedProjectType={selectedProjectType}
          setSelectedProjectType={setSelectedProjectType}
        />
      </main>

      {/* Clean 3-Column Footer */}
      <Footer />
    </div>
  );
}
