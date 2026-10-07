import React, { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import officialLogo from '../assets/logo.svg';
import { NAV_LINKS } from '../data/content';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll offset to transition navbar styling (transparent to blurred frosted glass)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Monitor active section via IntersectionObserver with high accuracy
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.replace('#', ''));
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0.1,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Prevent background scroll when mobile navigation sheet is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setActiveSection(targetId);
    }
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="section-inner navbar-inner">
          {/* Brand: Official SkillCraft Technology Logo Asset */}
          <a
            href="#home"
            className="navbar-brand-official"
            onClick={(e) => handleNavClick(e, '#home')}
            aria-label="SkillCraft Technology Home"
          >
            <img
              src={officialLogo}
              alt="SkillCraft Technology"
              className="brand-official-logo"
            />
          </a>

          {/* Desktop Center Links with Subtle Active Indicator */}
          <nav className="navbar-nav-links" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const linkId = link.href.replace('#', '');
              const isActive = activeSection === linkId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`nav-link-item ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <span className="nav-link-text">{link.name}</span>
                  {isActive && <span className="nav-link-active-bar" />}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Clean CTA Pill + Modern Menu Toggle (No 3-line hamburger) */}
          <div className="navbar-actions">
            <a
              href="#contact"
              className="btn btn-primary nav-cta-pill"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              <span>Start a Project</span>
              <ArrowRight size={14} />
            </a>

            {/* Modern interactive pill button replacing traditional 3-line hamburger */}
            <button
              type="button"
              className={`nav-interactive-toggle ${mobileMenuOpen ? 'is-active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="nav-toggle-indicator" />
              <span className="nav-toggle-label">{mobileMenuOpen ? 'Close' : 'Menu'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      {/* Mobile Interactive Glass Drawer */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <a
            href="#home"
            className="mobile-brand-link"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <img
              src={officialLogo}
              alt="SkillCraft Technology"
              className="brand-official-logo mobile-logo-img"
            />
          </a>
          <button
            type="button"
            className="mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Navigation"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mobile-nav-items" aria-label="Mobile Navigation">
          {NAV_LINKS.map((link, idx) => {
            const linkId = link.href.replace('#', '');
            const isActive = activeSection === linkId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{ animationDelay: `${idx * 0.04}s` }}
              >
                <div className="mobile-nav-link-left">
                  <span className="mobile-nav-index">0{idx + 1}</span>
                  <span className="mobile-nav-name">{link.name}</span>
                </div>
                {isActive && <span className="mobile-active-pill">Active</span>}
              </a>
            );
          })}
        </nav>

        <div className="mobile-menu-footer">
          <a
            href="#contact"
            className="btn btn-primary mobile-cta-btn"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span>Start a Project</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </>
  );
}
