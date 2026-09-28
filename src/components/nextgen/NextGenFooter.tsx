import React from 'react';
import './NextGenFooter.css';

export const NextGenFooter: React.FC = () => {
  return (
    <footer className="ng-footer">
      <div className="ng-footer-left">
        © 2026 Godrej Properties. All rights reserved.
      </div>

      <div className="ng-footer-center">
        <a href="#responsible-ai" className="ng-footer-link">Responsible AI</a>
        <span className="ng-footer-sep">|</span>
        <a href="#secure-data" className="ng-footer-link">Secure Data</a>
        <span className="ng-footer-sep">|</span>
        <a href="#inclusive-growth" className="ng-footer-link">Inclusive Growth</a>
      </div>

      <div className="ng-footer-right">
        A Smarter, More Sustainable India
      </div>
    </footer>
  );
};
