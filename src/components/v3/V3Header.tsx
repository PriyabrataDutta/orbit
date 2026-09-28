import React from 'react';
import { HelpCircle, Headphones } from 'lucide-react';
import './V3Header.css';

export const V3Header: React.FC = () => {
  return (
    <header className="v3-header">
      <div className="v3-header-container">
        {/* Left Brand Area */}
        <div className="v3-brand-group">
          <div className="v3-godrej-logo">
            {/* Iconic Godrej properties G symbol mark */}
            <svg className="v3-godrej-logo-svg" width="36" height="36" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="10" fill="url(#v3GodrejBgGrad)" />
              <circle cx="20" cy="15" r="5" fill="#ffffff" />
              <path d="M14 23.5C14 21.567 15.567 20 17.5 20H22.5C24.433 20 26 21.567 26 23.5V31H14V23.5Z" fill="#ffffff" />
              <defs>
                <linearGradient id="v3GodrejBgGrad" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stopColor="#4F46E5" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
            </svg>
            <div className="v3-godrej-text-stack">
              <span className="v3-godrej-title">GODREJ</span>
              <span className="v3-godrej-sub">PROPERTIES</span>
            </div>
          </div>

          <div className="v3-brand-divider" aria-hidden="true" />

          <div className="v3-orbiter-brand-info">
            <div className="v3-orbiter-main-title">Orbiter</div>
            <div className="v3-orbiter-tagline">
              <span>People</span>
              <span className="dot-sep">|</span>
              <span>Data</span>
              <span className="dot-sep">|</span>
              <span>Possibilities</span>
            </div>
          </div>
        </div>

        {/* Right Actions Area */}
        <div className="v3-header-actions">
          <a href="#help" className="v3-header-action-link">
            <HelpCircle size={17} />
            <span>Help</span>
          </a>
          <span className="v3-action-divider" aria-hidden="true">|</span>
          <a href="#it-support" className="v3-header-action-link">
            <Headphones size={17} />
            <span>IT Support</span>
          </a>
        </div>
      </div>
    </header>
  );
};
