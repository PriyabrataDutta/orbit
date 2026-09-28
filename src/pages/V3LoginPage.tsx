import React from 'react';
import { V3Header } from '../components/v3/V3Header';
import { V3Hero } from '../components/v3/V3Hero';
import { V3LoginForm } from '../components/v3/V3LoginForm';
import { V3Footer } from '../components/v3/V3Footer';
import interiorBg from '../assets/godrej-interior-bg.jpg';
import './V3LoginPage.css';

export const V3LoginPage: React.FC = () => {
  return (
    <div className="v3-page-wrapper">
      {/* Background Architectural Interior Photo */}
      <div 
        className="v3-bg-photo" 
        style={{ backgroundImage: `url(${interiorBg})` }}
        aria-hidden="true" 
      />
      
      {/* Light Overlay Gradient */}
      <div className="v3-bg-overlay" aria-hidden="true" />

      {/* Top Header */}
      <V3Header />

      {/* Main Container */}
      <main className="v3-main-container">
        <div className="v3-layout-grid-desktop">
          {/* Left Experience Area */}
          <section className="v3-left-col">
            <V3Hero />
          </section>

          {/* Right Login Card Area */}
          <section className="v3-right-col">
            <V3LoginForm />
          </section>
        </div>

        {/* Decorative "A Brighter India" hardcover book object in bottom right corner */}
        <div className="v3-table-book-detail" aria-hidden="true">
          <div className="v3-book-object">
            <div className="v3-book-spine" />
            <span>A Brighter India</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <V3Footer />
    </div>
  );
};
