import React, { useState } from 'react';
import { Compass, PenTool, Code2, CheckCircle2, Rocket, ArrowRight, Check, RotateCcw } from 'lucide-react';
import { PROCESS_CONTENT } from '../data/content';
import procDiscover from '../assets/proc-discover.jpg';
import procDesign from '../assets/proc-design.jpg';
import procBuild from '../assets/proc-build.jpg';
import procRefine from '../assets/proc-refine.jpg';
import procLaunch from '../assets/proc-launch.jpg';
import FlipCard from './FlipCard';
import './Process.css';

const PROCESS_IMAGES = {
  discover: procDiscover,
  design: procDesign,
  build: procBuild,
  refine: procRefine,
  launch: procLaunch,
};

const STEP_ICONS = [Compass, PenTool, Code2, CheckCircle2, Rocket];

export default function Process({ onSelectService }) {
  // Track flip state per step (no height expansion, true 3D Y-axis flip)
  const [flippedSteps, setFlippedSteps] = useState({});

  const handleToggleFlip = (stepNum, nextState) => {
    setFlippedSteps((prev) => ({
      ...prev,
      [stepNum]: nextState !== undefined ? nextState : !prev[stepNum],
    }));
  };

  const handleActionClick = (e, phaseTitle) => {
    e.stopPropagation();
    if (onSelectService) {
      onSelectService(`Phase: ${phaseTitle}`);
    } else {
      const el = document.getElementById('contact');
      if (el) {
        const offset = el.getBoundingClientRect().top + window.scrollY - 76;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="process" className="section process-section">
      <div className="section-inner">
        {/* Section Header */}
        <div className="section-header-left reveal-on-scroll">
          <span className="section-eyebrow">{PROCESS_CONTENT.eyebrow}</span>
          <h2 className="section-title">{PROCESS_CONTENT.heading}</h2>
          <p className="process-header-sub">{PROCESS_CONTENT.subtitle}</p>
        </div>

        {/* 5 Process Steps Grid with Reusable 3D Flip Cards */}
        <div className="process-card-grid reveal-on-scroll">
          {PROCESS_CONTENT.steps.map((step, index) => {
            const Icon = STEP_ICONS[index] || Compass;
            const stepImg = PROCESS_IMAGES[step.imageKey] || procDiscover;
            const isFlipped = !!flippedSteps[step.number];

            // FRONT FACE: Visual media header + phase badge + title + short description
            const frontContent = (
              <>
                {/* Visual Media Header */}
                <div className="process-card-media">
                  <div
                    className="process-media-bg"
                    style={{ backgroundImage: `url(${stepImg})` }}
                  />
                  <div className="process-media-scrim" />

                  {/* Step Phase Tag & Number Badge */}
                  <div className="process-media-tags-row">
                    <span className="process-step-badge">{step.number}</span>
                    <span className={`process-phase-tag tag-${step.accent}`}>
                      {step.phase}
                    </span>
                  </div>

                  <div className="process-media-hover-status">
                    <RotateCcw size={10} className="process-flip-icon-dot" />
                    <span>Click to Flip</span>
                  </div>
                </div>

                {/* Step Body Front */}
                <div className="process-card-body">
                  <div className="process-body-header">
                    <div className={`process-icon-box badge-${step.accent}`}>
                      <Icon size={18} />
                    </div>
                    <span className="process-phase-kicker">{step.phase}</span>
                  </div>

                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-desc">{step.shortDescription}</p>

                  {/* Footer with Flip Indicator */}
                  <div className="process-card-footer">
                    <span className="process-footer-label">Inspect Deliverables</span>
                    <span className="process-flip-action-icon">
                      <RotateCcw size={13} />
                    </span>
                  </div>
                </div>
              </>
            );

            // BACK FACE: Phase deep dive, deliverables checklist, action button
            const backContent = (
              <div className="flip-card-back-content">
                <div className="flip-card-back-header">
                  <div className={`process-icon-box badge-${step.accent}`}>
                    <Icon size={16} />
                  </div>
                  <button
                    type="button"
                    className="flip-card-flip-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleFlip(step.number, false);
                    }}
                    aria-label={`Flip back to front of step ${step.number}`}
                  >
                    <RotateCcw size={12} />
                    <span>Front</span>
                  </button>
                </div>

                <div className="process-back-title-wrap">
                  <span className={`process-back-kicker kicker-${step.accent}`}>
                    {step.phase} DELIVERABLES
                  </span>
                  <h4 className="process-back-title">{step.title}</h4>
                </div>

                <p className="process-back-deep-desc">{step.detailedDescription}</p>

                <div className="process-back-deliverables-wrap">
                  <span className="process-deliverables-heading">Key Deliverables:</span>
                  <div className="process-deliverables-list">
                    {step.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="process-deliverable-item">
                        <Check size={12} className="deliverable-check-icon" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action on Back */}
                <button
                  type="button"
                  className="btn btn-secondary process-back-cta-btn"
                  onClick={(e) => handleActionClick(e, step.title)}
                >
                  <span>Start With {step.phase}</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            );

            return (
              <div
                key={step.number}
                className={`process-flip-wrapper stagger-${index + 1}`}
              >
                <FlipCard
                  front={frontContent}
                  back={backContent}
                  isFlipped={isFlipped}
                  onFlip={(nextState) => handleToggleFlip(step.number, nextState)}
                  accent={step.accent}
                  ariaLabel={`Process Step ${step.number}: ${step.title}`}
                  className="process-step-flip-card"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
