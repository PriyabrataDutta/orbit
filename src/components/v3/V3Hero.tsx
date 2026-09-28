import React from 'react';
import { 
  Database, FileText, Building2, Layers, FileCheck
} from 'lucide-react';
import './V3Hero.css';

export const V3Hero: React.FC = () => {
  return (
    <div className="v3-hero-stage">
      {/* 1. Top Section Grid (Headline Left, Graphic Right) */}
      <div className="v3-hero-top-grid">
        {/* Left Headline */}
        <div className="v3-hero-headline-block">
          <div className="v3-eyebrow">
            ENTERPRISE AI FOR A BIGGER TOMORROW
          </div>

          <h1 className="v3-hero-heading">
            <span className="v3-block-line">Your enterprise</span>
            <span className="v3-block-line">knowledge.</span>
            <span className="v3-block-line v3-gradient-text">One intelligent</span>
            <span className="v3-block-line v3-gradient-text">workspace.</span>
          </h1>

          <p className="v3-hero-copy">
            Orbiter connects your documents, business systems and organizational knowledge so every team can find answers and act faster.
          </p>
        </div>

        {/* Right 3D Central Graphic */}
        <div className="v3-graphic-container">
          {/* Backdrop Glow */}
          <div className="v3-glow-backdrop" aria-hidden="true" />

          {/* Orbit Rings */}
          <div className="v3-orbit-ring outer" aria-hidden="true">
            <div className="v3-orbit-particle p-top" />
            <div className="v3-orbit-particle p-right" />
          </div>
          <div className="v3-orbit-ring inner" aria-hidden="true">
            <div className="v3-orbit-particle p-left" />
          </div>

          {/* SVG Dotted Connectors */}
          <svg className="v3-connector-line" width="100%" height="100%" viewBox="0 0 500 380">
            <line x1="120" y1="135" x2="250" y2="190" stroke="rgba(99, 102, 241, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="250" y1="60" x2="250" y2="190" stroke="rgba(34, 197, 94, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="380" y1="140" x2="250" y2="190" stroke="rgba(219, 39, 119, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="140" y1="260" x2="250" y2="190" stroke="rgba(147, 51, 234, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="360" y1="265" x2="250" y2="190" stroke="rgba(217, 119, 6, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
          </svg>

          {/* Floating Nodes */}
          <div className="v3-node-card node-documents">
            <div className="v3-node-icon icon-green">
              <FileText size={17} />
            </div>
            <span className="v3-node-label">Documents</span>
          </div>

          <div className="v3-node-card node-erp">
            <div className="v3-node-icon icon-blue">
              <Database size={17} />
            </div>
            <span className="v3-node-label">ERP</span>
          </div>

          <div className="v3-node-card node-crm">
            <div className="v3-node-icon icon-pink">
              <Building2 size={17} />
            </div>
            <span className="v3-node-label">CRM</span>
          </div>

          <div className="v3-node-card node-analytics">
            <div className="v3-node-icon icon-purple">
              <Layers size={17} />
            </div>
            <span className="v3-node-label">Analytics</span>
          </div>

          <div className="v3-node-card node-policies">
            <div className="v3-node-icon icon-yellow">
              <FileCheck size={17} />
            </div>
            <span className="v3-node-label">Policies</span>
          </div>

          {/* Central Orbiter AI Glowing Sphere */}
          <div className="v3-central-orb">
            <div className="v3-orb-sphere">
              <div className="v3-orb-icon-mark">
                <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#ffffff" strokeWidth="2.5" opacity="0.4" />
                  <circle cx="18" cy="12" r="4.5" fill="#ffffff" />
                  <path d="M12.5 20C12.5 18.3431 13.8431 17 15.5 17H20.5C22.1569 17 23.5 18.3431 23.5 20V26H12.5V20Z" fill="#ffffff" />
                </svg>
              </div>
              <span className="v3-orb-text">Orbiter AI</span>
            </div>
          </div>

          {/* 3D Glass Pedestal Base & Capability Ribbon */}
          <div className="v3-pedestal-base" />
          <div className="v3-pedestal-ribbon">
            <span>SEARCH</span>
            <span className="v3-ribbon-sep">|</span>
            <span>UNDERSTAND</span>
            <span className="v3-ribbon-sep">|</span>
            <span>SUMMARIZE</span>
            <span className="v3-ribbon-sep">|</span>
            <span>ANALYZE</span>
            <span className="v3-ribbon-sep">|</span>
            <span>ACT</span>
          </div>
        </div>
      </div>

      {/* 2. Bottom Section: Key Metrics Strip */}
      <div className="v3-hero-bottom-section">
        {/* Key Metrics Row */}
        <div className="v3-metrics-row">
          <div className="v3-metric-item">
            <div className="v3-metric-badge v3-badge-blue">
              <Database size={20} />
            </div>
            <div className="v3-metric-info">
              <span className="v3-metric-val">500M+</span>
              <span className="v3-metric-lbl">Enterprise Records</span>
            </div>
          </div>

          <div className="v3-metric-item">
            <div className="v3-metric-badge v3-badge-green">
              <FileText size={20} />
            </div>
            <div className="v3-metric-info">
              <span className="v3-metric-val">100s of</span>
              <span className="v3-metric-lbl">Document Sources</span>
            </div>
          </div>

          <div className="v3-metric-item">
            <div className="v3-metric-badge v3-badge-purple">
              <Building2 size={20} />
            </div>
            <div className="v3-metric-info">
              <span className="v3-metric-val">Role-Based</span>
              <span className="v3-metric-lbl">Intelligence</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
