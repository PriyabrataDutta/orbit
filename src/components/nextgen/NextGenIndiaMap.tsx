import React, { useState } from 'react';
import { MapPin, Activity, Globe } from 'lucide-react';
import './NextGenIndiaMap.css';

interface RegionalNode {
  id: string;
  name: string;
  role: string;
  cx: number;
  cy: number;
  users: string;
  docs: string;
  latency: string;
  status: 'optimal' | 'syncing';
}

const REGIONS: RegionalNode[] = [
  { id: 'mumbai', name: 'Mumbai HQ', role: 'Central Operations & Godrej One', cx: 74, cy: 276, users: '12,400+', docs: '24.2M', latency: '14ms', status: 'optimal' },
  { id: 'delhi', name: 'Delhi NCR', role: 'North Regional Head Office', cx: 134, cy: 135, users: '6,200+', docs: '12.8M', latency: '22ms', status: 'optimal' },
  { id: 'bengaluru', name: 'Bengaluru Hub', role: 'South Tech & Real Estate HQ', cx: 139, cy: 366, users: '4,800+', docs: '9.4M', latency: '18ms', status: 'optimal' },
  { id: 'pune', name: 'Pune Regional', role: 'West Manufacturing & Sales', cx: 88, cy: 295, users: '2,100+', docs: '3.6M', latency: '16ms', status: 'optimal' },
  { id: 'kolkata', name: 'Kolkata East', role: 'East Regional Center', cx: 286, cy: 224, users: '1,900+', docs: '2.8M', latency: '28ms', status: 'optimal' },
  { id: 'hyderabad', name: 'Hyderabad Ops', role: 'South-East Development', cx: 151, cy: 301, users: '1,600+', docs: '2.4M', latency: '20ms', status: 'optimal' },
];

export const NextGenIndiaMap: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<RegionalNode>(REGIONS[0]);

  return (
    <div className="ng-map-card">
      {/* Map Header */}
      <div className="ng-map-header">
        <div className="ng-map-title-group">
          <Globe size={18} className="text-cyan" />
          <div>
            <h3>PAN India Intelligence Grid</h3>
            <p>Real-time node latency & document telemetry</p>
          </div>
        </div>
        <div className="ng-live-sync-badge">
          <Activity size={12} className="text-emerald" />
          <span>LIVE MESH SYNC</span>
        </div>
      </div>

      {/* SVG Container */}
      <div className="ng-svg-wrapper">
        <svg viewBox="-20 50 510 570" preserveAspectRatio="xMidYMin meet" className="ng-map-svg">
          <defs>
            <radialGradient id="ngMapFill" cx="42%" cy="52%" r="62%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#312e81" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.4" />
            </radialGradient>

            <filter id="ngGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient id="ngBeam" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* India Boundary Path */}
          <g transform="translate(20 10)">
            <path
              d="M137.9 33.8 L143.3 34.1 L156.2 26.6 L162.9 26.4 L166.0 27.7 L167.8 31.5 L171.9 32.0 L172.6 34.7 L174.7 32.4 L177.5 33.9 L172.9 45.3 L169.0 46.4 L169.1 48.6 L165.2 49.0 L166.5 52.2 L163.7 55.7 L156.7 56.1 L159.4 61.1 L156.9 61.3 L157.4 64.9 L159.7 67.5 L163.8 67.7 L162.7 70.5 L165.7 75.2 L157.8 80.3 L155.2 78.2 L154.6 75.0 L149.9 77.4 L155.2 85.3 L155.2 95.4 L159.6 93.3 L164.1 99.7 L170.1 100.4 L175.2 103.5 L174.9 106.2 L186.0 111.1 L176.9 118.5 L177.5 120.7 L175.2 123.0 L176.0 126.5 L173.9 128.0 L172.9 132.1 L179.0 136.1 L179.7 134.1 L188.5 139.0 L189.9 142.3 L191.7 141.9 L197.7 146.4 L200.2 145.4 L205.4 149.0 L209.0 148.4 L209.3 151.6 L215.5 152.3 L217.3 154.2 L218.3 152.0 L224.8 153.9 L224.6 152.5 L228.7 151.4 L235.1 154.0 L235.5 158.4 L242.9 161.0 L243.2 162.6 L248.9 160.9 L252.0 165.4 L258.6 164.7 L264.0 167.6 L268.7 165.2 L269.0 167.2 L272.4 168.7 L279.9 166.6 L281.5 168.5 L283.9 162.9 L281.2 157.3 L284.1 147.4 L283.0 145.5 L290.1 142.5 L293.6 146.4 L291.8 150.7 L293.9 154.7 L291.6 156.9 L296.9 161.9 L300.3 161.1 L306.9 163.4 L313.6 160.5 L318.6 162.4 L331.9 161.9 L334.7 160.2 L336.9 161.3 L336.7 155.2 L337.8 154.8 L336.4 151.9 L331.4 151.9 L330.2 149.7 L331.3 147.8 L335.1 148.5 L339.5 145.9 L342.4 147.3 L346.1 144.6 L345.4 142.0 L348.8 141.3 L355.7 134.5 L359.6 134.5 L367.1 130.5 L368.5 129.1 L367.5 127.3 L372.1 125.1 L380.8 128.5 L391.6 123.9 L395.0 126.7 L393.5 129.0 L395.4 127.8 L399.5 133.4 L396.5 136.8 L397.7 137.9 L397.7 136.3 L400.6 135.3 L403.6 139.1 L409.5 141.3 L410.0 144.1 L409.6 146.1 L403.1 150.1 L406.5 157.7 L400.5 153.5 L394.0 154.9 L379.3 164.7 L378.1 167.2 L379.8 172.7 L375.8 180.2 L372.2 182.7 L371.4 185.4 L373.7 186.7 L373.3 189.5 L365.7 205.6 L360.2 203.2 L356.8 204.2 L354.3 202.1 L355.8 208.0 L355.1 216.1 L353.9 218.0 L351.6 217.4 L352.6 229.0 L348.6 233.7 L345.7 230.6 L345.5 232.7 L344.4 233.2 L340.0 207.5 L336.8 208.6 L335.6 207.3 L335.7 211.0 L332.9 213.7 L333.9 216.7 L330.9 219.0 L328.1 213.9 L327.2 216.6 L324.6 209.1 L327.6 201.7 L330.5 202.3 L331.6 199.9 L332.9 201.2 L332.7 199.7 L334.8 201.3 L335.1 198.4 L338.4 197.1 L340.2 192.5 L339.3 190.0 L343.0 190.4 L342.0 188.1 L337.0 185.8 L314.8 186.4 L306.6 184.2 L307.2 174.6 L304.4 170.3 L303.0 174.3 L300.0 173.7 L297.2 171.8 L296.3 167.9 L293.8 167.8 L295.8 170.2 L290.5 169.9 L291.6 168.7 L286.9 164.6 L285.9 166.7 L288.6 168.5 L283.8 171.6 L282.9 176.5 L285.1 176.6 L288.8 181.1 L292.5 180.8 L295.2 184.7 L294.0 186.1 L287.4 185.5 L286.9 189.4 L283.3 189.5 L281.5 193.5 L286.0 197.7 L291.5 199.2 L291.9 203.6 L289.3 205.4 L289.0 208.5 L292.4 210.8 L291.2 214.3 L295.0 214.9 L293.0 218.0 L296.4 230.6 L294.9 234.4 L296.4 238.2 L294.0 238.3 L293.2 236.1 L293.0 238.5 L291.3 237.6 L292.1 232.6 L290.1 231.7 L289.0 235.6 L288.5 233.6 L287.7 234.4 L287.6 238.6 L285.2 236.8 L284.8 239.3 L284.3 230.7 L283.9 230.0 L281.7 229.6 L284.0 231.3 L278.7 237.3 L269.0 239.7 L266.5 242.6 L265.3 245.6 L267.4 250.3 L265.9 250.9 L268.7 251.7 L264.0 254.5 L264.8 256.8 L263.2 258.0 L265.0 257.3 L259.1 263.1 L247.7 266.9 L240.9 271.4 L228.4 287.3 L220.6 291.5 L215.9 298.0 L203.5 306.1 L203.4 313.2 L195.3 316.9 L189.2 317.1 L184.7 325.7 L181.2 323.1 L175.5 326.3 L172.6 335.1 L174.6 342.4 L173.6 350.0 L176.6 361.5 L174.0 373.7 L168.6 385.3 L170.3 405.4 L162.2 406.2 L156.8 417.6 L157.7 419.7 L160.8 420.6 L148.2 424.5 L145.5 434.0 L138.4 438.4 L131.0 434.4 L124.6 426.2 L126.3 424.9 L124.5 425.7 L122.0 419.4 L120.8 409.5 L115.4 393.4 L110.9 384.8 L106.2 380.4 L101.1 368.1 L99.7 356.3 L95.6 346.9 L96.8 347.4 L93.7 340.4 L88.6 335.0 L86.9 326.6 L82.3 320.6 L81.1 315.8 L82.5 315.3 L81.1 315.6 L80.4 313.9 L82.2 314.0 L80.4 312.6 L81.6 312.3 L80.5 306.1 L78.7 302.3 L79.7 302.9 L80.2 302.4 L75.2 288.7 L77.5 289.8 L77.3 287.2 L75.0 286.8 L74.8 283.9 L76.2 285.0 L74.1 281.7 L75.3 279.7 L76.0 280.4 L75.8 280.8 L76.1 281.2 L76.3 281.3 L75.9 279.1 L74.8 278.7 L77.0 276.8 L75.9 274.3 L75.5 276.6 L73.4 278.7 L73.2 272.6 L74.9 272.9 L72.6 270.4 L74.6 269.4 L72.4 269.3 L71.4 264.8 L75.1 251.2 L72.4 247.6 L74.0 247.1 L72.1 246.3 L73.2 245.0 L71.2 246.4 L71.1 244.6 L71.5 244.3 L71.9 244.8 L72.5 244.7 L70.6 243.2 L75.1 237.6 L69.7 237.8 L72.7 233.2 L69.3 233.2 L70.4 229.8 L72.8 230.3 L74.9 228.9 L69.7 228.3 L68.3 229.8 L66.9 228.3 L64.9 232.5 L65.8 234.0 L65.6 233.7 L65.3 233.5 L64.6 233.5 L66.6 238.4 L63.9 244.7 L46.3 252.2 L37.2 246.8 L20.4 228.3 L22.3 225.8 L24.4 229.1 L28.3 226.6 L30.5 228.1 L31.3 225.8 L32.4 227.0 L37.4 224.9 L41.1 218.5 L38.0 217.3 L38.1 218.8 L33.4 219.4 L31.1 222.0 L24.0 220.5 L22.4 218.8 L22.2 219.3 L21.5 218.3 L21.2 218.8 L21.1 218.2 L20.8 218.6 L18.0 216.9 L16.3 215.6 L17.5 216.2 L15.6 214.7 L16.9 213.6 L13.5 210.6 L18.7 205.1 L14.7 207.1 L13.5 206.0 L12.4 209.5 L10.0 209.0 L12.4 207.3 L10.2 207.4 L12.5 203.7 L18.0 203.8 L18.7 198.7 L19.5 200.2 L20.6 198.9 L29.5 199.0 L35.4 200.8 L42.7 197.1 L42.8 199.6 L44.8 200.1 L50.3 197.4 L48.7 196.8 L50.0 193.2 L44.1 182.7 L44.1 178.2 L38.7 178.0 L36.4 174.7 L37.4 165.7 L28.3 162.8 L29.4 156.3 L40.1 144.1 L43.1 144.1 L47.0 148.6 L61.0 144.9 L67.7 132.9 L75.3 129.1 L81.5 115.6 L89.4 111.8 L88.9 107.5 L99.3 98.9 L96.8 98.0 L98.7 93.7 L96.4 89.4 L98.1 86.9 L108.6 81.9 L104.9 78.2 L99.1 78.0 L99.4 72.8 L94.9 73.9 L84.8 69.1 L84.2 57.3 L81.5 50.1 L82.3 47.3 L85.1 47.4 L86.0 44.4 L90.4 42.6 L91.6 39.2 L86.3 37.7 L86.8 33.2 L81.6 33.1 L77.8 30.3 L78.5 28.2 L70.2 28.4 L69.9 22.7 L75.6 19.1 L76.9 15.9 L87.9 15.5 L85.3 12.6 L90.3 13.9 L99.2 10.0 L102.1 12.3 L105.5 10.9 L109.2 12.0 L109.8 15.4 L113.5 15.1 L117.5 19.7 L127.0 23.8 L128.6 28.3 L135.6 30.3 L137.9 33.8Z"
              fill="url(#ngMapFill)"
              stroke="#818cf8"
              strokeWidth="1.8"
              strokeLinejoin="round"
              filter="url(#ngGlow)"
            />

            {/* Connecting Beams to Mumbai HQ */}
            {REGIONS.filter(r => r.id !== 'mumbai').map((r) => (
              <line
                key={`line-${r.id}`}
                x1={REGIONS[0].cx}
                y1={REGIONS[0].cy}
                x2={r.cx}
                y2={r.cy}
                stroke="url(#ngBeam)"
                strokeWidth="1.2"
                strokeDasharray="4 3"
                className="ng-beam-line"
              />
            ))}

            {/* Regional Interactive Nodes */}
            {REGIONS.map((node) => {
              const isSelected = selectedNode.id === node.id;
              return (
                <g
                  key={node.id}
                  className="ng-map-node-group"
                  onClick={() => setSelectedNode(node)}
                >
                  {/* Pulsing ring */}
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={isSelected ? 14 : 9}
                    className={`ng-node-pulse ${isSelected ? 'active' : ''}`}
                  />
                  {/* Outer circle */}
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={isSelected ? 6 : 4.5}
                    fill={isSelected ? '#38bdf8' : '#ffffff'}
                    stroke="#6366f1"
                    strokeWidth="2"
                    className="ng-node-dot"
                  />
                  {/* City Label */}
                  <text
                    x={node.cx + 8}
                    y={node.cy + 3}
                    fontSize="9.5"
                    fontWeight={isSelected ? '800' : '600'}
                    fill={isSelected ? '#38bdf8' : 'rgba(255,255,255,0.75)'}
                    className="ng-node-label"
                  >
                    {node.name.split(' ')[0]}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      {/* Selected Node Telemetry Box */}
      <div className="ng-telemetry-box">
        <div className="ng-telemetry-header">
          <div className="ng-tel-name">
            <MapPin size={15} className="text-violet" />
            <span>{selectedNode.name}</span>
          </div>
          <span className="ng-tel-role">{selectedNode.role}</span>
        </div>

        <div className="ng-telemetry-metrics">
          <div className="ng-tel-stat">
            <span className="ng-tel-lbl">Active AI Users</span>
            <span className="ng-tel-val">{selectedNode.users}</span>
          </div>
          <div className="ng-tel-stat">
            <span className="ng-tel-lbl">Indexed Docs</span>
            <span className="ng-tel-val">{selectedNode.docs}</span>
          </div>
          <div className="ng-tel-stat">
            <span className="ng-tel-lbl">RAG Latency</span>
            <span className="ng-tel-val text-emerald">{selectedNode.latency}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
