import React from 'react';
import { NextGenHeader } from '../components/nextgen/NextGenHeader';
import { NextGenHero } from '../components/nextgen/NextGenHero';
import { NextGenLoginForm } from '../components/nextgen/NextGenLoginForm';
import { NextGenFooter } from '../components/nextgen/NextGenFooter';
import interiorBg from '../assets/godrej-interior-bg.jpg';
import './NextGenLoginPage.css';

export const NextGenLoginPage: React.FC = () => {
  return (
    <div className="ng-page-wrapper">
      {/* Background Architectural Interior Photo at Full Visual Strength */}
      <div 
        className="ng-bg-building" 
        style={{ backgroundImage: `url(${interiorBg})` }}
        aria-hidden="true" 
      />
      
      {/* Exact Spec Light Overlay Gradient */}
      <div className="ng-bg-gradient-overlay" aria-hidden="true" />

      {/* Top Header (Height 80px) */}
      <NextGenHeader />

      {/* Main Experience Container (64% / 36% Grid) */}
      <main className="ng-main-container">
        <div className="ng-layout-grid-desktop">
          {/* 64% Left Experience Area */}
          <section className="ng-left-experience-col">
            <NextGenHero />
          </section>

          {/* 36% Right Login Area */}
          <section className="ng-right-login-col">
            <NextGenLoginForm />
          </section>
        </div>
      </main>

      {/* Direct Floating Footer (No White Box) */}
      <NextGenFooter />
    </div>
  );
};
