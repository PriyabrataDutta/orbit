import React from 'react';
import { 
  Database, FileText, UserCheck, Globe,
  Building2, Layers, FileCheck
} from 'lucide-react';
import './NextGenHero.css';

export const NextGenHero: React.FC = () => {
  return (
    <div className="ng-hero-stage">
      {/* 1. Hero Headline Block */}
      <div className="ng-hero-headline-block">
        <div className="ng-eyebrow">
          ENTERPRISE AI FOR A BIGGER TOMORROW
        </div>
        
        <h1 className="ng-hero-heading">
          <span className="block-line text-dark">Your enterprise</span>
          <span className="block-line text-dark">knowledge.</span>
          <span className="block-line text-vivid-blue">One intelligent</span>
          <span className="block-line text-vivid-blue">workspace.</span>
        </h1>

        <p className="ng-hero-copy">
          Orbiter connects your documents, business systems and organizational knowledge so every team can find answers and act faster.
        </p>
      </div>

      {/* 2. Central Orbiter AI Visualization */}
      <div className="ng-orbiter-hero-visual">
        {/* Central Glow Backlight */}
        <div className="ng-visual-glow-backdrop" aria-hidden="true" />

        {/* Orbit Motion Rings */}
        <div className="ng-orbital-ring ring-outer" aria-hidden="true">
          <div className="ng-orbit-particle p1" />
          <div className="ng-orbit-particle p2" />
        </div>
        <div className="ng-orbital-ring ring-inner" aria-hidden="true">
          <div className="ng-orbit-particle p3" />
        </div>

        {/* 5 Floating Source UI Cards */}
        <div className="ng-source-card node-erp">
          <div className="ng-node-icon-box bg-blue">
            <Database size={16} />
          </div>
          <span className="ng-node-title">ERP</span>
        </div>

        <div className="ng-source-card node-documents">
          <div className="ng-node-icon-box bg-green">
            <FileText size={16} />
          </div>
          <span className="ng-node-title">Documents</span>
        </div>

        <div className="ng-source-card node-crm">
          <div className="ng-node-icon-box bg-pink">
            <Building2 size={16} />
          </div>
          <span className="ng-node-title">CRM</span>
        </div>

        <div className="ng-source-card node-analytics">
          <div className="ng-node-icon-box bg-purple">
            <Layers size={16} />
          </div>
          <span className="ng-node-title">Analytics</span>
        </div>

        <div className="ng-source-card node-policies">
          <div className="ng-node-icon-box bg-amber">
            <FileCheck size={16} />
          </div>
          <span className="ng-node-title">Policies</span>
        </div>

        {/* Central Orbiter Sphere (Diameter 130px) */}
        <div className="ng-central-orb">
          <div className="ng-orb-glow" />
          <div className="ng-orb-core">
            <div className="ng-orb-symbol">
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="url(#orbGradClean)" />
                <path d="M11 16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16C21 18.7614 18.7614 21 16 21" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" />
                <circle cx="16" cy="16" r="3.2" fill="#ffffff" />
                <defs>
                  <linearGradient id="orbGradClean" x1="0" y1="0" x2="32" y2="32">
                    <stop offset="0%" stopColor="#3F46F3" />
                    <stop offset="100%" stopColor="#6D4AFF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="ng-orb-label">Orbiter AI</span>
          </div>
        </div>

        {/* 3D Illuminated Podium Base & Capability Strip */}
        <div className="ng-platform-podium">
          <div className="ng-platform-rim" />
          <div className="ng-capability-strip">
            <span>SEARCH</span>
            <span className="cap-dot">|</span>
            <span>UNDERSTAND</span>
            <span className="cap-dot">|</span>
            <span>SUMMARIZE</span>
            <span className="cap-dot">|</span>
            <span>ANALYZE</span>
            <span className="cap-dot">|</span>
            <span>ACT</span>
          </div>
        </div>
      </div>

      {/* 3. Metrics Row Panel (Bottom Left) */}
      <div className="ng-metrics-panel">
        <div className="ng-metric-item">
          <div className="ng-metric-icon bg-blue-light">
            <Database size={18} />
          </div>
          <div className="ng-metric-content">
            <div className="ng-metric-val">500M+</div>
            <div className="ng-metric-lbl">Enterprise Records</div>
          </div>
        </div>

        <div className="ng-metric-divider" aria-hidden="true" />

        <div className="ng-metric-item">
          <div className="ng-metric-icon bg-green-light">
            <FileText size={18} />
          </div>
          <div className="ng-metric-content">
            <div className="ng-metric-val">100s of Docs</div>
            <div className="ng-metric-lbl">Document Sources</div>
          </div>
        </div>

        <div className="ng-metric-divider" aria-hidden="true" />

        <div className="ng-metric-item">
          <div className="ng-metric-icon bg-purple-light">
            <UserCheck size={18} />
          </div>
          <div className="ng-metric-content">
            <div className="ng-metric-val">Role-Based</div>
            <div className="ng-metric-lbl">Intelligence</div>
          </div>
        </div>

        <div className="ng-metric-divider" aria-hidden="true" />

        <div className="ng-metric-item">
          <div className="ng-metric-icon bg-indigo-light">
            <Globe size={18} />
          </div>
          <div className="ng-metric-content">
            <div className="ng-metric-val">All India</div>
            <div className="ng-metric-lbl">Locations</div>
          </div>
        </div>
      </div>
    </div>
  );
};
