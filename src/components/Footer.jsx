import React from 'react';
import { Linkedin, Instagram, Mail, MapPin, ArrowUp, ArrowUpRight } from 'lucide-react';
import officialLogo from '../assets/logo.svg';
import { FOOTER_CONTENT, OFFICIAL_CONTACT } from '../data/content';
import './Footer.css';

// Recognizable official X / Twitter vector glyph
function XIcon({ size = 16, className = '' }) {
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

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-area" aria-label="Site Footer">
      <div className="section-inner footer-inner">
        {/* Main 4-Column Grid: Left Brand + 3 Information Columns */}
        <div className="footer-columns-grid">
          {/* Left Column: Official Logo + Verified Tagline */}
          <div className="footer-brand-col">
            <a
              href="#home"
              className="footer-brand-link"
              onClick={(e) => handleNavClick(e, '#home')}
              aria-label="SkillCraft Technology Home"
            >
              <img
                src={officialLogo}
                alt="SkillCraft Technology"
                className="footer-official-logo"
              />
            </a>
            <p className="footer-tagline">
              Crafting Success through Technology
            </p>
          </div>

          {/* Column 1: Quick Links */}
          <div className="footer-nav-col">
            <h4 className="footer-column-heading">{FOOTER_CONTENT.quickLinksTitle}</h4>
            <ul className="footer-link-list">
              {FOOTER_CONTENT.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="footer-nav-anchor"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Connect (Official Social Channels) */}
          <div className="footer-connect-col">
            <h4 className="footer-column-heading">{FOOTER_CONTENT.connectTitle}</h4>
            <div className="footer-connect-list">
              {/* LinkedIn */}
              <a
                href={OFFICIAL_CONTACT.socials[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-connect-item footer-connect-linkedin"
                aria-label="SkillCraft Technology on LinkedIn"
              >
                <span className="footer-connect-icon">
                  <Linkedin size={16} />
                </span>
                <span className="footer-connect-label">LinkedIn</span>
                <ArrowUpRight size={13} className="footer-connect-arrow" />
              </a>

              {/* Instagram */}
              <a
                href={OFFICIAL_CONTACT.socials[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-connect-item footer-connect-instagram"
                aria-label="SkillCraft Technology on Instagram"
              >
                <span className="footer-connect-icon">
                  <Instagram size={16} />
                </span>
                <span className="footer-connect-label">Instagram</span>
                <ArrowUpRight size={13} className="footer-connect-arrow" />
              </a>

              {/* X / Twitter */}
              <a
                href={OFFICIAL_CONTACT.socials[2].href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-connect-item footer-connect-x"
                aria-label="SkillCraft Technology on X (Twitter)"
              >
                <span className="footer-connect-icon">
                  <XIcon size={15} />
                </span>
                <span className="footer-connect-label">X / Twitter</span>
                <ArrowUpRight size={13} className="footer-connect-arrow" />
              </a>
            </div>
          </div>

          {/* Column 3: Contact (Verified Details) */}
          <div className="footer-contact-col">
            <h4 className="footer-column-heading">{FOOTER_CONTENT.contactTitle}</h4>
            <div className="footer-contact-details">
              {/* Email */}
              <a
                href={OFFICIAL_CONTACT.mailto}
                className="footer-contact-entry footer-contact-email"
                title="Send email to SkillCraft Technology"
              >
                <span className="footer-contact-icon">
                  <Mail size={16} />
                </span>
                <span className="footer-contact-text">{OFFICIAL_CONTACT.email}</span>
              </a>

              {/* Location */}
              <div className="footer-contact-entry footer-contact-location">
                <span className="footer-contact-icon">
                  <MapPin size={16} />
                </span>
                <span className="footer-contact-text">{OFFICIAL_CONTACT.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright-text">{FOOTER_CONTENT.copyright}</p>
          <div className="footer-bottom-actions">
            <button
              type="button"
              className="footer-back-top-btn"
              onClick={scrollToTop}
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
