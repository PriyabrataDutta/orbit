import React, { memo } from 'react';
import { FOOTER_NAV_LINKS } from '../../../config/constants';
import './Footer.css';

export const Footer: React.FC = memo(() => {
  return (
    <footer>
      <span>© 2024 Godrej. All rights reserved.</span>
      <nav>
        {FOOTER_NAV_LINKS.map((link, idx) => (
          <a key={idx} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
});

Footer.displayName = 'Footer';
