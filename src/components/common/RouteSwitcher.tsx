import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Sparkles, Layers, History } from 'lucide-react';
import './RouteSwitcher.css';

export const RouteSwitcher: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isV3 = location.pathname === '/' || location.pathname === '/v3';
  const isV2 = location.pathname === '/v2';
  const isV1 = location.pathname === '/v1' || location.pathname === '/classic';

  return (
    <div className="route-switcher-dock">
      <div className="route-switcher-pill">
        <span className="route-label">Design View:</span>
        
        <button
          type="button"
          className={`switch-btn ${isV3 ? 'active' : ''}`}
          onClick={() => navigate('/')}
        >
          <Sparkles className="btn-icon text-indigo" size={14} />
          <span>V3 Orbiter AI</span>
          {isV3 && <span className="badge-new">Active</span>}
        </button>

        <button
          type="button"
          className={`switch-btn ${isV2 ? 'active' : ''}`}
          onClick={() => navigate('/v2')}
        >
          <Layers className="btn-icon text-muted" size={14} />
          <span>V2 Next-Gen</span>
          {isV2 && <span className="badge-new">Active</span>}
        </button>

        <button
          type="button"
          className={`switch-btn ${isV1 ? 'active' : ''}`}
          onClick={() => navigate('/classic')}
        >
          <History className="btn-icon text-muted" size={14} />
          <span>V1 Classic</span>
          {isV1 && <span className="badge-new">Active</span>}
        </button>
      </div>
    </div>
  );
};

