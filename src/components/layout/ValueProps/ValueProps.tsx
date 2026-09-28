import React, { memo } from 'react';
import { BRAND_CONFIG } from '../../../config/constants';
import './ValueProps.css';

export const ValueProps: React.FC = memo(() => {
  return (
    <div>
      <p className="kicker">ENTERPRISE AI FOR A BIGGER TOMORROW</p>
      <h2 className="display">{BRAND_CONFIG.name}</h2>
      <p className="lede">{BRAND_CONFIG.lede}</p>
      <p className="intro">
        Harness the power of massive enterprise data and documents to unlock insights,
        accelerate decisions, and empower every Godrej employee across India.
      </p>

      <ul className="features">
        <li>
          <span className="ficon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round">
              <ellipse cx="12" cy="5.5" rx="7" ry="2.8" />
              <path d="M5 5.5v13c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-13" />
              <path d="M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" />
            </svg>
          </span>
          <div>
            <b>Massive Enterprise Data</b>
            <small>All your business systems, unified</small>
          </div>
        </li>
        <li>
          <span className="ficon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
              <path d="M14 3v5h5M9 13h6M9 17h6" />
            </svg>
          </span>
          <div>
            <b>Massive Document Repositories</b>
            <small>Policies, reports, contracts and more</small>
          </div>
        </li>
        <li>
          <span className="ficon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </span>
          <div>
            <b>Secure Role-Based AI</b>
            <small>The right knowledge for the right people</small>
          </div>
        </li>
        <li>
          <span className="ficon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round">
              <circle cx="9" cy="8" r="3.5" />
              <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
              <circle cx="17" cy="9" r="2.6" />
              <path d="M16.5 14.2c2.8.2 5 2.2 5 5" />
            </svg>
          </span>
          <div>
            <b>PAN India Intelligence</b>
            <small>One AI layer across every location</small>
          </div>
        </li>
      </ul>
    </div>
  );
});

ValueProps.displayName = 'ValueProps';
