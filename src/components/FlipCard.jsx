import React from 'react';
import './FlipCard.css';

/**
 * Reusable 3D FlipCard Component
 * Strictly adheres to the required DOM structure:
 * <div class="flip-card [is-flipped]">
 *   <div class="flip-card-inner">
 *     <div class="flip-card-front">...</div>
 *     <div class="flip-card-back">...</div>
 *   </div>
 * </div>
 */
export default function FlipCard({
  front,
  back,
  isFlipped = false,
  onFlip,
  className = '',
  accent = 'blue',
  ariaLabel = 'Interactive card',
}) {
  const handleClick = (e) => {
    // If the click originated from an interactive element that stopped propagation, do nothing
    if (onFlip) {
      onFlip(!isFlipped);
    }
  };

  const handleKeyDown = (e) => {
    // Let inner buttons and links handle their own enter/space
    if (
      e.target !== e.currentTarget &&
      (e.target.tagName === 'BUTTON' || e.target.tagName === 'A')
    ) {
      return;
    }

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (onFlip) {
        onFlip(!isFlipped);
      }
    }
  };

  return (
    <div
      className={`flip-card accent-${accent} ${isFlipped ? 'is-flipped' : ''} ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      aria-label={`${ariaLabel}. ${isFlipped ? 'Click to flip back to front' : 'Click to flip for details'}`}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {front}
        </div>
        <div className="flip-card-back">
          {back}
        </div>
      </div>
    </div>
  );
}
