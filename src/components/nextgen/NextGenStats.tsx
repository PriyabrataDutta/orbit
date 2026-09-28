import React from 'react';
import { Database, FileText, UserCheck, Map, ArrowUpRight } from 'lucide-react';
import { STATS_METRICS } from '../../config/constants';
import './NextGenStats.css';

export const NextGenStats: React.FC = () => {
  return (
    <section className="ng-stats-section">
      <div className="ng-stats-header">
        <div>
          <span className="ng-stats-kicker">ENTERPRISE SCALE & METRICS</span>
          <h2 className="ng-stats-heading">Built for High-Throughput Enterprise Operations</h2>
        </div>
        <p className="ng-stats-desc">
          Empowering real estate development, manufacturing, consumer goods, and financial operations with real-time AI indexing.
        </p>
      </div>

      <div className="ng-stats-grid">
        {STATS_METRICS.map((item) => {
          let IconComponent = Database;
          let glowColor = 'indigo';
          if (item.id === 'massive-docs') {
            IconComponent = FileText;
            glowColor = 'violet';
          } else if (item.id === 'role-based-ai') {
            IconComponent = UserCheck;
            glowColor = 'cyan';
          } else if (item.id === 'pan-india') {
            IconComponent = Map;
            glowColor = 'emerald';
          }

          return (
            <div key={item.id} className={`ng-stat-card card-glow-${glowColor}`}>
              <div className="ng-stat-card-top">
                <div className={`ng-stat-icon-wrap glow-${glowColor}`}>
                  <IconComponent size={22} />
                </div>
                <ArrowUpRight size={18} className="ng-stat-arrow" />
              </div>

              <div className="ng-stat-number">{item.metric}</div>
              <div className="ng-stat-unit">{item.unit}</div>
              <h3 className="ng-stat-title">{item.title}</h3>
              <p className="ng-stat-p">{item.description}</p>

              {item.regions && (
                <div className="ng-regions-chips">
                  {item.regions.map((reg, idx) => (
                    <span key={idx} className="ng-reg-chip">{reg}</span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
