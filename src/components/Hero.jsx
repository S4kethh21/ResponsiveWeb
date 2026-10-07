import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import heroMountain from '../assets/hero-mountain.jpg';
import { HERO_CONTENT } from '../data/content';
import './Hero.css';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  // Smooth mouse movement tracking with graceful spring reset on leave
  const handleMouseMove = (e) => {
    if (window.innerWidth < 992 || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)) * 16;
    const y = ((e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)) * 16;
    setMousePos({
      x: Math.max(-18, Math.min(18, x)),
      y: Math.max(-18, Math.min(18, y)),
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
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
    <section id="home" className="hero-section">
      {/* Subtle Minimal Ambient Background Glows */}
      <div className="hero-ambient-glow-top" aria-hidden="true" />
      <div className="hero-ambient-glow-right" aria-hidden="true" />
      
      {/* Light subtle particle field */}
      <div className="hero-particle-grid" aria-hidden="true">
        <span className="particle p1" />
        <span className="particle p2" />
        <span className="particle p3" />
        <span className="particle p4" />
      </div>

      <div className="section-inner hero-inner">
        {/* Left Column: Typography, Eyebrow, Real Action CTAs & Quality Metrics */}
        <div className="hero-left-col reveal-on-scroll is-revealed">
          {/* Eyebrow Chip */}
          <div className="hero-eyebrow-chip">
            <span className="hero-eyebrow-dot" />
            <span className="hero-eyebrow-text">{HERO_CONTENT.eyebrow}</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-main-title">
            <span className="hero-title-line">{HERO_CONTENT.headingLine1}</span>
            <span className="hero-title-line">
              <span className="hero-gradient-text">{HERO_CONTENT.headingAccent}</span>
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="hero-description-text">{HERO_CONTENT.description}</p>

          {/* Action Buttons: "Start a Project" & "Explore What We Do" */}
          <div className="hero-button-row">
            <a
              href="#contact"
              className="btn btn-primary hero-btn-cta"
              onClick={(e) => handleScrollTo(e, 'contact')}
            >
              <span>{HERO_CONTENT.primaryCta}</span>
              <ArrowRight size={15} />
            </a>

            <a
              href="#services"
              className="btn btn-secondary hero-btn-explore"
              onClick={(e) => handleScrollTo(e, 'services')}
            >
              <Compass size={15} className="hero-explore-icon" />
              <span>{HERO_CONTENT.secondaryCta}</span>
            </a>
          </div>

          {/* Minimal Supporting Metric Strip */}
          <div className="hero-metrics-strip" aria-label="Core Quality Pillars">
            {HERO_CONTENT.metrics.map((metric, idx) => (
              <React.Fragment key={metric}>
                <span className="hero-metric-item">{metric}</span>
                {idx < HERO_CONTENT.metrics.length - 1 && (
                  <span className="hero-metric-sep" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Column: Sophisticated Interactive 3D Product Showcase */}
        <div
          ref={containerRef}
          className={`hero-right-col ${isHovered ? 'is-hovered' : ''}`}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-label="Interactive SkillCraft Showcase Object"
        >
          {/* Layer 1: Ambient Orbital Halo Ring (Reacts to cursor with subtle lag) */}
          <div
            className="hero-orbital-ring"
            style={{
              transform: `translate3d(${mousePos.x * 0.35}px, ${mousePos.y * 0.35}px, 0) rotate(${mousePos.x * 0.6}deg)`,
            }}
          />

          {/* Layer 2: Floating Syntax Code Editor Window (Foreground parallax) */}
          <div
            className="hero-floating-code-card"
            style={{
              transform: `translate3d(${mousePos.x * 1.2}px, ${mousePos.y * 1.2}px, 25px)`,
            }}
          >
            <div className="code-card-header">
              <span className="code-dot red" />
              <span className="code-dot yellow" />
              <span className="code-dot green" />
              <span className="code-meta-badge">REACT 18</span>
            </div>
            <div className="code-card-body">
              <div className="code-line">
                <span className="c-kw">const</span> <span className="c-fn">skillcraft</span> ={' '}
                <span className="c-str">'production'</span>;
              </div>
              <div className="code-line">
                <span className="c-kw">const</span> <span className="c-var">stack</span> = [
              </div>
              <div className="code-line indent">
                <span className="c-str">'React'</span>, <span className="c-str">'Vite'</span>,{' '}
                <span className="c-str">'Modular CSS'</span>
              </div>
              <div className="code-line">];</div>
              <div className="code-line">
                <span className="c-fn">render</span>({'{'} responsive:{' '}
                <span className="c-bool">true</span>, fps: <span className="c-num">60</span> {'}'});
              </div>
            </div>
          </div>

          {/* Layer 3: Main 3D Laptop Display Object (Subtle tilt & depth) */}
          <div
            className="hero-laptop-container"
            style={{
              transform: `perspective(1200px) rotateY(${-12 + mousePos.x * 0.7}deg) rotateX(${7 - mousePos.y * 0.7}deg) translateZ(${isHovered ? 15 : 0}px)`,
            }}
          >
            {/* Screen Lid with Glowing Mountain Landscape */}
            <div className="laptop-lid">
              <div className="laptop-screen-bezel">
                <div className="laptop-webcam" />
                <div
                  className="laptop-screen-display"
                  style={{ backgroundImage: `url(${heroMountain})` }}
                >
                  <div className="laptop-screen-overlay">
                    <div className="laptop-screen-words">
                      <span className="word-item">Responsive</span>
                      <span className="word-item">Interactive</span>
                      <span className="word-item">Production</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop Deck & Trackpad */}
            <div className="laptop-base">
              <div className="laptop-notch" />
              <div className="laptop-trackpad" />
            </div>
          </div>

          {/* Layer 4: Floating Metallic Status Orb */}
          <div
            className="hero-floating-sphere"
            style={{
              transform: `translate3d(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px, 40px)`,
            }}
          />

          {/* Layer 5: Translucent Glass Ribbon with </ > Badge */}
          <div
            className="hero-floating-ribbon"
            style={{
              transform: `translate3d(${mousePos.x * 0.75}px, ${mousePos.y * 0.75}px, 15px) rotate(${16 + mousePos.x * 0.3}deg) skewY(-6deg)`,
            }}
          >
            <div className="hero-ribbon-badge">
              <code>&lt;/&gt;</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
