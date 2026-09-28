import React, { memo } from 'react';
import { BRAND_CONFIG } from '../../../config/constants';
import godrejLogo from '../../../assets/godrej-properties-logo.png';
import './Topbar.css';

export const Topbar: React.FC = memo(() => {
  return (
    <header className="topbar">
      <div className="brandrow">
        <img
          className="godrej-logo"
          src={godrejLogo}
          alt="Godrej Properties"
          width="200"
          height="44"
        />
        <span className="brand-divider" aria-hidden="true"></span>
        <div className="orbiter-mark">
          <div>
            <div className="name">{BRAND_CONFIG.name}</div>
            <div className="sub">
              {BRAND_CONFIG.subtext.map((sub, idx) => (
                <span key={idx}>{sub}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="tagline">
        <span>A Smarter Godrej</span>
        <br className="tagline-br" />
        <span className="tagline-sep"> | </span>
        <span>A Brighter India</span>
      </div>
    </header>
  );
});

Topbar.displayName = 'Topbar';
