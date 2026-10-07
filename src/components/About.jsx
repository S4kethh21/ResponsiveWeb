import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import aboutUserfirst from '../assets/about-userfirst.jpg';
import aboutScale from '../assets/about-scale.jpg';
import aboutPerf from '../assets/about-perf.jpg';
import aboutCraft from '../assets/about-craft.jpg';
import { ABOUT_CONTENT } from '../data/content';
import MadeWithPurposeSelector from './MadeWithPurposeSelector';
import './About.css';

const PILLAR_IMAGES = {
  userfirst: aboutUserfirst,
  scale: aboutScale,
  perf: aboutPerf,
  craft: aboutCraft,
};

export default function About() {
  const [activePillarId, setActivePillarId] = useState('user-first');

  const activePillar =
    ABOUT_CONTENT.pillars.find((p) => p.id === activePillarId) ||
    ABOUT_CONTENT.pillars[0];

  const activeImage = PILLAR_IMAGES[activePillar.imageKey] || aboutUserfirst;

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
    <section id="about" className="section about-section">
      <div className="section-inner about-inner">
        {/* Section Eyebrow & Title */}
        <div className="section-header-left reveal-on-scroll">
          <span className="section-eyebrow">{ABOUT_CONTENT.eyebrow}</span>
          <h2 className="section-title">{ABOUT_CONTENT.defaultHeading}</h2>
          <p className="about-header-sub">
            Select an architectural principle on the left to inspect standards, supporting metrics, and execution philosophy.
          </p>
        </div>

        {/* 2-Column Layout: Left Selector (32%) + Right Context (68%) */}
        <div className="about-split-layout reveal-on-scroll">
          {/* Left Column: Vertical Principle Selector */}
          <div className="about-selector-col">
            <div className="selector-col-header">
              <span className="selector-col-kicker">CORE PRINCIPLES</span>
              <span className="selector-count-badge">4 PILLARS</span>
            </div>
            <MadeWithPurposeSelector
              pillars={ABOUT_CONTENT.pillars}
              activePillarId={activePillarId}
              onSelectPillar={setActivePillarId}
            />
          </div>

          {/* Right Column: Selected Principle Context & Supporting Information */}
          <div className="about-context-col">
            <div className="about-context-wrapper">
              <div
                key={activePillar.id}
                id={`pillar-panel-${activePillar.id}`}
                role="tabpanel"
                aria-labelledby={`pillar-tab-${activePillar.id}`}
                className="about-context-card"
              >
                {/* Top Section: Visual Media Frame + Headline & Description */}
                <div className="context-media-editorial-row">
                  {/* Visual Supporting Image */}
                  <div className="context-visual-frame">
                    <img
                      src={activeImage}
                      alt={activePillar.heading}
                      className="context-visual-img"
                    />
                    <div className="context-visual-scrim" />
                    <div className="context-visual-overlay">
                      <span className={`badge-accent-tag tag-${activePillar.accent}`}>
                        {activePillar.badgeText}
                      </span>
                      <span className="badge-pillar-id">Pillar {activePillar.number}</span>
                    </div>
                  </div>

                  {/* Editorial Text */}
                  <div className="context-editorial-wrap">
                    <span className={`context-kicker kicker-${activePillar.accent}`}>
                      {activePillar.title}
                    </span>
                    <h3 className="context-dynamic-heading">{activePillar.heading}</h3>
                    <p className="context-dynamic-desc">{activePillar.description}</p>
                  </div>
                </div>

                {/* Middle: Dynamic Metric Benchmarks Grid */}
                <div className="context-metrics-grid">
                  {activePillar.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="context-metric-box">
                      <span className="metric-val-big">{m.val}</span>
                      <span className="metric-label-sub">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom: Core Deliverables & Action CTA */}
                <div className="context-bottom-row">
                  <div className="context-details-list">
                    {activePillar.details.map((d, dIdx) => (
                      <div key={dIdx} className="context-detail-item">
                        <Check
                          size={15}
                          className={`detail-check-icon icon-${activePillar.accent}`}
                        />
                        <span className="detail-item-text">{d}</span>
                      </div>
                    ))}
                  </div>

                  <div className="context-action-wrap">
                    <a
                      href="#process"
                      className="btn btn-primary context-cta-btn"
                      onClick={(e) => handleScrollTo(e, 'process')}
                    >
                      <span>Explore How We Build</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
