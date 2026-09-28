import React from 'react';
import { Topbar } from '../components/layout/Topbar/Topbar';
import { ValueProps } from '../components/layout/ValueProps/ValueProps';
import { IndiaMapVisual } from '../components/layout/IndiaMapVisual/IndiaMapVisual';
import { LoginForm } from '../components/layout/LoginForm/LoginForm';
import { Stats } from '../components/layout/Stats/Stats';
import { Footer } from '../components/layout/Footer/Footer';
import '../App.css';

export const ClassicLoginPage: React.FC = () => {
  return (
    <>
      <section className="hero">
        <div className="building" aria-hidden="true" />
        <div className="wrap">
          <Topbar />
          <div className="hero-grid">
            {/* Left Column: Value Props */}
            <ValueProps />

            {/* Center Column: Interactive India Map Visual */}
            <IndiaMapVisual />

            {/* Right Column: Sign-In Card powered by useAuthForm */}
            <LoginForm />

            {/* Far Right Copy */}
            <p className="aside-copy">
              A MORE<br />
              SUSTAINABLE<br />
              INCLUSIVE<br />
              BRIGHTER INDIA
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Footer */}
      <Footer />
    </>
  );
};
