import React from 'react';
import './V3Footer.css';

export const V3Footer: React.FC = () => {
  return (
    <footer className="v3-footer">
      <div className="v3-footer-container">
        <div className="v3-copyright">
          © 2024 Godrej Properties. All rights reserved.
        </div>

        <div className="v3-footer-links">
          <a href="#responsible-ai" className="v3-footer-link">Responsible AI</a>
          <span className="v3-footer-sep">|</span>
          <a href="#secure-data" className="v3-footer-link">Secure Data</a>
          <span className="v3-footer-sep">|</span>
          <a href="#inclusive-growth" className="v3-footer-link">Inclusive Growth</a>
          <span className="v3-footer-sep">|</span>
          <a href="#smarter-india" className="v3-footer-link">A Smarter, More Sustainable India</a>
        </div>
      </div>
    </footer>
  );
};
