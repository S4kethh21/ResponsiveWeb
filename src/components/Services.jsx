import React from 'react';
import {
  Code2,
  Compass,
  Building2,
  ShoppingBag,
  Layout,
  Sparkles,
  Cpu,
  RefreshCw,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { SERVICES_CONTENT } from '../data/content';
import './Services.css';

const SERVICE_ICONS = {
  Code2,
  Compass,
  Building2,
  ShoppingBag,
  Layout,
  Sparkles,
  Cpu,
  RefreshCw,
  Layers,
};

export default function Services({ onSelectService }) {
  const handleGetStarted = (e, projectType) => {
    e.preventDefault();
    if (onSelectService) {
      onSelectService(projectType);
    } else {
      const element = document.getElementById('contact');
      if (element) {
        const navOffset = 76;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navOffset,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section id="services" className="section services-section">
      <div className="section-inner">
        {/* Section Header */}
        <div className="section-header-left reveal-on-scroll">
          <span className="section-eyebrow">{SERVICES_CONTENT.eyebrow}</span>
          <h2 className="section-title">{SERVICES_CONTENT.heading}</h2>
          <p className="services-header-sub">{SERVICES_CONTENT.subtitle}</p>
        </div>

        {/* 9 Expanded Service Cards Grid */}
        <div className="services-card-grid">
          {SERVICES_CONTENT.services.map((service, index) => {
            const Icon = SERVICE_ICONS[service.iconName] || Code2;

            return (
              <div
                key={service.id}
                className={`service-card-item accent-${service.accent} reveal-on-scroll stagger-${(index % 3) + 1}`}
                onClick={(e) => handleGetStarted(e, service.projectType)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleGetStarted(e, service.projectType);
                  }
                }}
                aria-label={`Service: ${service.title}. Click Get Started to select this project in the inquiry form.`}
              >
                {/* Top Subtle Gradient Accent Line */}
                <div className={`service-top-glow-bar glow-${service.accent}`} />

                {/* Card Content Layout */}
                <div className="service-card-content">
                  <div className="service-header-row">
                    <div className={`service-icon-box badge-${service.accent}`}>
                      <Icon size={20} />
                    </div>
                    <div className="service-meta-tags">
                      <span className="service-number-pill">{service.number}</span>
                      <span className={`service-category-tag tag-${service.accent}`}>
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  <h3 className="service-item-title">{service.title}</h3>
                  <p className="service-item-desc">{service.description}</p>

                  {/* Get Started Action Button */}
                  <div className="service-item-action">
                    <button
                      type="button"
                      className="service-get-started-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleGetStarted(e, service.projectType);
                      }}
                    >
                      <span className="service-action-prompt">Get Started</span>
                      <span className="service-arrow-indicator">
                        <ArrowRight size={14} />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
