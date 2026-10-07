import React, { useState, useEffect } from 'react';
import {
  Code2,
  Compass,
  ShoppingBag,
  Layout,
  Sparkles,
  RefreshCw,
  Layers,
  Mail,
  MapPin,
  Globe,
  Linkedin,
  Instagram,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Check,
} from 'lucide-react';
import ctaMountain from '../assets/cta-mountain.jpg';
import {
  CTA_FORM_CONTENT,
  PROJECT_TYPES_LIST,
  TIMELINE_OPTIONS,
  OFFICIAL_CONTACT,
} from '../data/content';
import './Contact.css';

const PROJECT_TYPE_ICONS = {
  Code2,
  Compass,
  ShoppingBag,
  Layout,
  Sparkles,
  RefreshCw,
  Layers,
};

// Official recognizable X / Twitter vector glyph
function XIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Contact({ selectedProjectType, setSelectedProjectType }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: selectedProjectType || 'Web Development',
    timeline: '1 Month',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync external preselection from Services "Get Started" clicks
  useEffect(() => {
    if (selectedProjectType) {
      setFormData((prev) => ({ ...prev, projectType: selectedProjectType }));
    }
  }, [selectedProjectType]);

  const handleTypeSelect = (label) => {
    setFormData((prev) => ({ ...prev, projectType: label }));
    if (setSelectedProjectType) {
      setSelectedProjectType(label);
    }
  };

  const handleTimelineSelect = (option) => {
    setFormData((prev) => ({ ...prev, timeline: option }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@company.com).';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide project details (at least 10 characters).';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Construct genuine mailto link with encoded subject & body
    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.projectType} — ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${
        formData.company || 'N/A'
      }\nProject Type: ${formData.projectType}\nTimeline: ${
        formData.timeline
      }\n\nProject Scope & Goals:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${OFFICIAL_CONTACT.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      try {
        const mailLink = document.createElement('a');
        mailLink.href = mailtoUrl;
        mailLink.style.display = 'none';
        document.body.appendChild(mailLink);
        mailLink.click();
        document.body.removeChild(mailLink);
      } catch (err) {
        console.warn('Mailto dispatch notice:', err);
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 450);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: 'Web Development',
      timeline: '1 Month',
      message: '',
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="section unified-cta-section">
      <div className="section-inner unified-inner">
        {/* Panoramic Statement Header Card */}
        <div
          className="cta-panoramic-header reveal-on-scroll"
          style={{ backgroundImage: `url(${ctaMountain})` }}
        >
          <div className="cta-panoramic-scrim" />
          <div className="cta-header-text">
            <span className="cta-kicker-tag">{CTA_FORM_CONTENT.eyebrow}</span>
            <h2 className="cta-grand-heading">{CTA_FORM_CONTENT.heading}</h2>
            <p className="cta-grand-sub">{CTA_FORM_CONTENT.description}</p>
          </div>
        </div>

        {/* Form and Direct Communication Grid */}
        <div className="unified-form-grid reveal-on-scroll">
          {/* Main Inquiry Form */}
          <div className="unified-form-card">
            {isSuccess ? (
              <div className="unified-success-panel" role="alert">
                <div className="success-icon-badge">
                  <CheckCircle2 size={40} className="success-check-icon" />
                </div>
                <h3 className="success-title">Inquiry Prepared Successfully!</h3>
                <p className="success-body">
                  Thank you, <strong>{formData.name}</strong>. Your project inquiry for{' '}
                  <strong>{formData.projectType}</strong> with timeline{' '}
                  <strong>{formData.timeline}</strong> has been configured.
                </p>
                <p className="success-note">
                  Your mail client should now open automatically with the inquiry details pre-filled.
                  If it didn't open, write directly to{' '}
                  <a href={`mailto:${OFFICIAL_CONTACT.email}`} className="success-email-link">
                    {OFFICIAL_CONTACT.email}
                  </a>.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary success-reset-btn"
                  onClick={handleReset}
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="inquiry-form-body" noValidate>
                {/* 1. Project Type Selector Chips */}
                <div className="form-group">
                  <label className="form-label">
                    Select Project Type <span className="req-star">*</span>
                  </label>
                  <p className="form-helper-text">
                    Choose the primary category that matches your product requirements:
                  </p>
                  <div className="project-chips-grid" role="radiogroup" aria-label="Project Type">
                    {PROJECT_TYPES_LIST.map((type) => {
                      const Icon = PROJECT_TYPE_ICONS[type.icon] || Code2;
                      const isSelected =
                        formData.projectType.toLowerCase().includes(type.label.toLowerCase()) ||
                        formData.projectType === type.label;

                      return (
                        <button
                          key={type.id}
                          type="button"
                          className={`project-chip-btn ${isSelected ? 'is-selected' : ''}`}
                          onClick={() => handleTypeSelect(type.label)}
                          role="radio"
                          aria-checked={isSelected}
                        >
                          <Icon size={16} className="chip-icon" />
                          <span className="chip-label">{type.label}</span>
                          {isSelected && <Check size={14} className="chip-check" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Name & Email Two-Column Row */}
                <div className="form-two-col">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Your Name <span className="req-star">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      className={`form-input ${errors.name ? 'input-error' : ''}`}
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                    />
                    {errors.name && (
                      <span className="error-message" role="alert">
                        <AlertCircle size={13} />
                        <span>{errors.name}</span>
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">
                      Work Email <span className="req-star">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      className={`form-input ${errors.email ? 'input-error' : ''}`}
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                    />
                    {errors.email && (
                      <span className="error-message" role="alert">
                        <AlertCircle size={13} />
                        <span>{errors.email}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* 3. Company Field */}
                <div className="form-group">
                  <label htmlFor="contact-company" className="form-label">
                    Company / Organization <span className="opt-tag">(Optional)</span>
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Acme Studio or Independent"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>

                {/* 4. Timeline Selector */}
                <div className="form-group">
                  <label className="form-label">Expected Timeline</label>
                  <div className="timeline-chips-row">
                    {TIMELINE_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        className={`timeline-chip-btn ${
                          formData.timeline === opt ? 'is-selected' : ''
                        }`}
                        onClick={() => handleTimelineSelect(opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 5. Project Description */}
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Project Description <span className="req-star">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                    placeholder="Describe your project vision, target audience, key deliverables, and any specific deadlines..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                  />
                  {errors.message && (
                    <span className="error-message" role="alert">
                      <AlertCircle size={13} />
                      <span>{errors.message}</span>
                    </span>
                  )}
                </div>

                {/* 6. Submit Button */}
                <div className="form-actions-row">
                  <button
                    type="submit"
                    className="btn btn-primary unified-submit-btn"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Preparing Inquiry...' : 'Send Project Inquiry'}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Premium "Get in Touch" & "Let's Connect" Hub */}
          <div className="unified-sidebar">
            {/* Primary Get in Touch Card */}
            <div className="sidebar-connect-hub">
              <div className="connect-hub-header">
                <span className="hub-eyebrow">DIRECT CONTACT</span>
                <h3 className="hub-title">Get in Touch</h3>
                <p className="hub-desc">
                  Connect with the official SkillCraft Technology team for project inquiries,
                  technical collaborations, and student internship programs.
                </p>
              </div>

              {/* Verified Contact Details Grid */}
              <div className="contact-channels-list">
                {/* 1. Official Email */}
                <a
                  href={`mailto:${OFFICIAL_CONTACT.email}?subject=Project%20Inquiry%20-%20SkillCraft%20Technology`}
                  className="contact-channel-item channel-email"
                  title="Open mail application"
                >
                  <div className="channel-icon-box">
                    <Mail size={18} />
                  </div>
                  <div className="channel-text">
                    <span className="channel-label">Official Email</span>
                    <span className="channel-value">{OFFICIAL_CONTACT.email}</span>
                  </div>
                  <ArrowUpRight size={16} className="channel-arrow" />
                </a>

                {/* 2. Official Location */}
                <div className="contact-channel-item channel-location">
                  <div className="channel-icon-box">
                    <MapPin size={18} />
                  </div>
                  <div className="channel-text">
                    <span className="channel-label">Office Location</span>
                    <span className="channel-value">{OFFICIAL_CONTACT.location}</span>
                  </div>
                </div>

                {/* 3. Official Website */}
                <a
                  href={OFFICIAL_CONTACT.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item channel-website"
                  title="Visit official website"
                >
                  <div className="channel-icon-box">
                    <Globe size={18} />
                  </div>
                  <div className="channel-text">
                    <span className="channel-label">Official Portal</span>
                    <span className="channel-value">{OFFICIAL_CONTACT.websiteDisplay}</span>
                  </div>
                  <ArrowUpRight size={16} className="channel-arrow" />
                </a>
              </div>

              {/* Official Social Channels ("Let's Connect") */}
              <div className="connect-socials-wrapper">
                <span className="socials-kicker">OFFICIAL SOCIAL CHANNELS</span>
                <div className="connect-social-grid">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/skillcraft-technology/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-platform-card platform-linkedin"
                    aria-label="SkillCraft Technology on LinkedIn"
                  >
                    <div className="platform-icon-wrap">
                      <Linkedin size={18} />
                    </div>
                    <div className="platform-info">
                      <span className="platform-name">LinkedIn</span>
                      <span className="platform-handle">skillcraft-technology</span>
                    </div>
                    <ArrowUpRight size={14} className="platform-arrow" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/skillcrafttechnology/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-platform-card platform-instagram"
                    aria-label="SkillCraft Technology on Instagram"
                  >
                    <div className="platform-icon-wrap">
                      <Instagram size={18} />
                    </div>
                    <div className="platform-info">
                      <span className="platform-name">Instagram</span>
                      <span className="platform-handle">@skillcrafttechnology</span>
                    </div>
                    <ArrowUpRight size={14} className="platform-arrow" />
                  </a>

                  {/* X / Twitter */}
                  <a
                    href="https://twitter.com/SkillCraftTech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-platform-card platform-x"
                    aria-label="SkillCraft Technology on X (Twitter)"
                  >
                    <div className="platform-icon-wrap">
                      <XIcon size={16} />
                    </div>
                    <div className="platform-info">
                      <span className="platform-name">X</span>
                      <span className="platform-handle">@SkillCraftTech</span>
                    </div>
                    <ArrowUpRight size={14} className="platform-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
