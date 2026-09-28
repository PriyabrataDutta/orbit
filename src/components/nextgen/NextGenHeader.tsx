import React from 'react';
import { HelpCircle, Headphones } from 'lucide-react';
import './NextGenHeader.css';

export const NextGenHeader: React.FC = () => {
  return (
    <header className="ng-header">
      <div className="ng-header-container">
        {/* Left: Godrej Logo & Orbiter Title */}
        <div className="ng-brand-group">
          <div className="ng-godrej-logo">
            <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
              <path d="M18 34C26.8366 34 34 26.8366 34 18C34 9.16344 26.8366 2 18 2C9.16344 2 2 9.16344 2 18C2 26.8366 9.16344 34 18 34Z" fill="url(#godrejHeaderGrad)" />
              <circle cx="18" cy="13" r="4.5" fill="#ffffff" />
              <path d="M13.5 20.5H22.5V28.5H13.5V20.5Z" fill="#ffffff" />
              <defs>
                <linearGradient id="godrejHeaderGrad" x1="0" y1="0" x2="36" y2="36">
                  <stop offset="0%" stopColor="#3F46F3" />
                  <stop offset="100%" stopColor="#6D4AFF" />
                </linearGradient>
              </defs>
            </svg>
            <div className="ng-godrej-text-stack">
              <span className="godrej-title">GODREJ</span>
              <span className="godrej-sub">PROPERTIES</span>
            </div>
          </div>

          <div className="ng-brand-divider" aria-hidden="true" />

          <div className="ng-orbiter-brand-info">
            <div className="ng-orbiter-main-title">Orbiter</div>
            <div className="ng-orbiter-tagline">
              <span>People</span>
              <span className="dot-sep">|</span>
              <span>Data</span>
              <span className="dot-sep">|</span>
              <span>Possibilities</span>
            </div>
          </div>
        </div>

        {/* Right: Help & IT Support Links */}
        <div className="ng-header-actions">
          <a href="#help" className="ng-header-action-link">
            <HelpCircle size={16} />
            <span>Help</span>
          </a>
          <span className="ng-action-divider" aria-hidden="true">|</span>
          <a href="#it-support" className="ng-header-action-link">
            <Headphones size={16} />
            <span>IT Support</span>
          </a>
        </div>
      </div>
    </header>
  );
};
