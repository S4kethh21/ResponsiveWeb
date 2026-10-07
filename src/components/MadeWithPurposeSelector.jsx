import React from 'react';
import { ChevronRight, Layers, Cpu, Zap, Sparkles } from 'lucide-react';
import './MadeWithPurposeSelector.css';

const PILLAR_ICONS = {
  'user-first': Layers,
  scale: Cpu,
  performance: Zap,
  craft: Sparkles,
};

/**
 * MadeWithPurposeSelector
 * Left-side vertical selection list for "Made with Purpose" section.
 * Fixed height items - zero layout jump - clean active & hover states.
 */
export default function MadeWithPurposeSelector({
  pillars,
  activePillarId,
  onSelectPillar,
}) {
  return (
    <div
      className="about-selector-list"
      role="tablist"
      aria-label="Architectural principles selection"
    >
      {pillars.map((pillar) => {
        const Icon = PILLAR_ICONS[pillar.id] || Layers;
        const isSelected = activePillarId === pillar.id;

        return (
          <button
            key={pillar.id}
            type="button"
            role="tab"
            aria-selected={isSelected}
            aria-controls={`pillar-panel-${pillar.id}`}
            id={`pillar-tab-${pillar.id}`}
            className={`about-selector-option accent-${pillar.accent} ${
              isSelected ? 'is-selected' : ''
            }`}
            onClick={() => onSelectPillar(pillar.id)}
          >
            {/* Left Active Glow Stripe */}
            <span className="selector-active-stripe" aria-hidden="true" />

            {/* Leading Number & Icon */}
            <div className="selector-option-leading">
              <span className="selector-option-num">{pillar.number}</span>
              <div className={`selector-option-icon badge-${pillar.accent}`}>
                <Icon size={16} />
              </div>
            </div>

            {/* Center Title & Subtitle */}
            <div className="selector-option-text">
              <h4 className="selector-option-title">{pillar.tabLabel}</h4>
              <span className="selector-option-subtitle">{pillar.badgeText}</span>
            </div>

            {/* Trailing Active Indicator Arrow */}
            <div className="selector-option-trailing">
              <ChevronRight size={16} className="selector-chevron" />
            </div>
          </button>
        );
      })}
    </div>
  );
}
