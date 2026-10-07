import React, { useState } from 'react';
import { Smartphone, Zap, Code2, Gauge, ArrowRight, Check, RotateCcw } from 'lucide-react';
import { FEATURES_CONTENT } from '../data/content';
import featResponsive from '../assets/feat-responsive.jpg';
import featInteractive from '../assets/feat-interactive.jpg';
import featModern from '../assets/feat-modern.jpg';
import featPerf from '../assets/feat-perf.jpg';
import FlipCard from './FlipCard';
import './Features.css';

const FEATURE_IMAGES = {
  responsive: featResponsive,
  interactive: featInteractive,
  'modern-tech': featModern,
  performance: featPerf,
};

export default function Features({ onSelectService }) {
  // Track flip state per card (no height expansion, true 3D Y-axis flip)
  const [flippedCards, setFlippedCards] = useState({});

  const getIcon = (id, size = 20) => {
    switch (id) {
      case 'responsive':
        return <Smartphone size={size} className="feature-icon" style={{ color: '#38BDF8' }} />;
      case 'interactive':
        return <Zap size={size} className="feature-icon" style={{ color: '#A78BFA' }} />;
      case 'modern-tech':
        return <Code2 size={size} className="feature-icon" style={{ color: '#2DD4BF' }} />;
      case 'performance':
        return <Gauge size={size} className="feature-icon" style={{ color: '#F472B6' }} />;
      default:
        return <Code2 size={size} className="feature-icon" />;
    }
  };

  const handleToggleFlip = (cardId, nextState) => {
    setFlippedCards((prev) => ({
      ...prev,
      [cardId]: nextState !== undefined ? nextState : !prev[cardId],
    }));
  };

  const handleActionClick = (e, cardTitle) => {
    e.stopPropagation();
    if (onSelectService) {
      onSelectService(cardTitle);
    } else {
      const el = document.getElementById('contact');
      if (el) {
        const offset = el.getBoundingClientRect().top + window.scrollY - 76;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="features" className="section features-section">
      <div className="section-inner">
        {/* Section Header */}
        <div className="section-header-left reveal-on-scroll">
          <span className="section-eyebrow">{FEATURES_CONTENT.eyebrow}</span>
          <h2 className="section-title">{FEATURES_CONTENT.heading}</h2>
          <p className="features-header-subtitle">
            Click any card to flip and inspect core architectural specifications and engineering standards.
          </p>
        </div>

        {/* 4 Feature 3D Flip Cards Grid */}
        <div className="features-card-grid reveal-on-scroll">
          {FEATURES_CONTENT.cards.map((card, index) => {
            const cardImg = FEATURE_IMAGES[card.id] || featResponsive;
            const isFlipped = !!flippedCards[card.id];

            // FRONT FACE: Existing card visual media + header + title + short description
            const frontContent = (
              <>
                {/* Visual Media Header */}
                <div className="feature-card-media">
                  <div
                    className="feature-media-bg"
                    style={{ backgroundImage: `url(${cardImg})` }}
                  />
                  <div className="feature-media-scrim" />
                  <span className={`feature-media-tag tag-${card.accent}`}>
                    {card.tag}
                  </span>
                  <div className="feature-active-indicator">
                    <RotateCcw size={11} className="indicator-flip-icon" />
                    <span>Click to Flip</span>
                  </div>
                </div>

                {/* Card Body Front */}
                <div className="feature-card-body">
                  <div className="feature-card-header-row">
                    <div className={`feature-icon-badge badge-${card.accent}`}>
                      {getIcon(card.id, 20)}
                    </div>
                    <span className="feature-card-number">{card.number}</span>
                  </div>

                  <h3 className="feature-card-title">{card.title}</h3>
                  <p className="feature-card-desc">{card.shortDescription}</p>

                  {/* Card Footer Prompt */}
                  <div className="feature-card-footer">
                    <span className="feature-action-label">Inspect Specifications</span>
                    <span className="feature-flip-action-icon">
                      <RotateCcw size={14} />
                    </span>
                  </div>
                </div>
              </>
            );

            // BACK FACE: Clean relevant specifications, details, and action CTA
            const backContent = (
              <div className="flip-card-back-content">
                <div className="flip-card-back-header">
                  <div className={`feature-icon-badge badge-${card.accent}`}>
                    {getIcon(card.id, 18)}
                  </div>
                  <button
                    type="button"
                    className="flip-card-flip-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleFlip(card.id, false);
                    }}
                    aria-label={`Flip back to front of ${card.title}`}
                  >
                    <RotateCcw size={12} />
                    <span>Front</span>
                  </button>
                </div>

                <div className="feature-back-title-wrap">
                  <span className={`feature-back-kicker kicker-${card.accent}`}>
                    SPECIFICATIONS
                  </span>
                  <h4 className="feature-back-title">{card.title}</h4>
                </div>

                <p className="feature-back-deep-desc">{card.detailedDescription}</p>

                <div className="feature-back-specs-list">
                  <span className="feature-specs-heading">Core Capabilities:</span>
                  {card.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="feature-spec-row">
                      <Check size={14} className="feature-spec-check" />
                      <span className="feature-spec-text">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Action on Back */}
                <button
                  type="button"
                  className="btn btn-secondary feature-back-cta-btn"
                  onClick={(e) => handleActionClick(e, card.title)}
                >
                  <span>Start With This Spec</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            );

            return (
              <div
                key={card.id}
                className={`feature-flip-wrapper stagger-${index + 1}`}
              >
                <FlipCard
                  front={frontContent}
                  back={backContent}
                  isFlipped={isFlipped}
                  onFlip={(nextState) => handleToggleFlip(card.id, nextState)}
                  accent={card.accent}
                  ariaLabel={`Feature ${card.number}: ${card.title}`}
                  className="feature-product-flip-card"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
