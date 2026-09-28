import React, { memo } from 'react';
import { STATS_METRICS } from '../../../config/constants';
import './Stats.css';

export const Stats: React.FC = memo(() => {
  return (
    <section className="stats">
      {STATS_METRICS.map((item) => (
        <article key={item.id} className="stat">
          <span className={`ic ${item.iconClass}`}>
            {item.id === 'massive-data' && (
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round">
                <ellipse cx="12" cy="5.5" rx="7" ry="2.8" />
                <path d="M5 5.5v13c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-13" />
                <path d="M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" />
              </svg>
            )}
            {item.id === 'massive-docs' && (
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                <path d="M14 3v5h5M9 13h6M9 17h6" />
              </svg>
            )}
            {item.id === 'role-based-ai' && (
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round">
                <circle cx="10" cy="8" r="4" />
                <path d="M3 21c0-4 3.1-6.5 7-6.5 1.2 0 2.3.2 3.2.6" />
                <path d="M17 14l3 1.2v2.4c0 1.8-1.3 3.1-3 3.6-1.7-.5-3-1.8-3-3.6v-2.4z" />
              </svg>
            )}
            {item.id === 'pan-india' && (
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round">
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.6" />
              </svg>
            )}
          </span>
          <div>
            <h3>{item.title}</h3>
            <div className="num">{item.metric}</div>
            <div className="unit">{item.unit}</div>
            {item.regions && (
              <div className="regions">
                {item.regions.map((reg, idx) => (
                  <span key={idx}>{reg}</span>
                ))}
              </div>
            )}
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
});

Stats.displayName = 'Stats';
