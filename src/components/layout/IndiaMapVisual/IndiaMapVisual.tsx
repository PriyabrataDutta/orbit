import React, { memo } from 'react';
import './IndiaMapVisual.css';

export const IndiaMapVisual: React.FC = memo(() => {
  return (
    <div className="visual" aria-hidden="true">
      <svg className="map" viewBox="-20 50 510 570" preserveAspectRatio="xMidYMin meet">
        <defs>
          <radialGradient id="mapfill" cx="42%" cy="52%" r="62%">
            <stop offset="0" stopColor="#6b5cff" stopOpacity=".8" />
            <stop offset=".6" stopColor="#3437c9" stopOpacity=".58" />
            <stop offset="1" stopColor="#1c2090" stopOpacity=".45" />
          </radialGradient>

          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="softglow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" />
          </filter>

          <linearGradient id="streams" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#3fb8ff" stopOpacity=".25" />
            <stop offset="1" stopColor="#a88bff" stopOpacity=".95" />
          </linearGradient>

          <path
            id="india"
            d="M137.9 33.8 L143.3 34.1 L156.2 26.6 L162.9 26.4 L166.0 27.7 L167.8 31.5 L171.9 32.0 L172.6 34.7 L174.7 32.4 L177.5 33.9 L172.9 45.3 L169.0 46.4 L169.1 48.6 L165.2 49.0 L166.5 52.2 L163.7 55.7 L156.7 56.1 L159.4 61.1 L156.9 61.3 L157.4 64.9 L159.7 67.5 L163.8 67.7 L162.7 70.5 L165.7 75.2 L157.8 80.3 L155.2 78.2 L154.6 75.0 L149.9 77.4 L155.2 85.3 L155.2 95.4 L159.6 93.3 L164.1 99.7 L170.1 100.4 L175.2 103.5 L174.9 106.2 L186.0 111.1 L176.9 118.5 L177.5 120.7 L175.2 123.0 L176.0 126.5 L173.9 128.0 L172.9 132.1 L179.0 136.1 L179.7 134.1 L188.5 139.0 L189.9 142.3 L191.7 141.9 L197.7 146.4 L200.2 145.4 L205.4 149.0 L209.0 148.4 L209.3 151.6 L215.5 152.3 L217.3 154.2 L218.3 152.0 L224.8 153.9 L224.6 152.5 L228.7 151.4 L235.1 154.0 L235.5 158.4 L242.9 161.0 L243.2 162.6 L248.9 160.9 L252.0 165.4 L258.6 164.7 L264.0 167.6 L268.7 165.2 L269.0 167.2 L272.4 168.7 L279.9 166.6 L281.5 168.5 L283.9 162.9 L281.2 157.3 L284.1 147.4 L283.0 145.5 L290.1 142.5 L293.6 146.4 L291.8 150.7 L293.9 154.7 L291.6 156.9 L296.9 161.9 L300.3 161.1 L306.9 163.4 L313.6 160.5 L318.6 162.4 L331.9 161.9 L334.7 160.2 L336.9 161.3 L336.7 155.2 L337.8 154.8 L336.4 151.9 L331.4 151.9 L330.2 149.7 L331.3 147.8 L335.1 148.5 L339.5 145.9 L342.4 147.3 L346.1 144.6 L345.4 142.0 L348.8 141.3 L355.7 134.5 L359.6 134.5 L367.1 130.5 L368.5 129.1 L367.5 127.3 L372.1 125.1 L380.8 128.5 L391.6 123.9 L395.0 126.7 L393.5 129.0 L395.4 127.8 L399.5 133.4 L396.5 136.8 L397.7 137.9 L397.7 136.3 L400.6 135.3 L403.6 139.1 L409.5 141.3 L410.0 144.1 L409.6 146.1 L403.1 150.1 L406.5 157.7 L400.5 153.5 L394.0 154.9 L379.3 164.7 L378.1 167.2 L379.8 172.7 L375.8 180.2 L372.2 182.7 L371.4 185.4 L373.7 186.7 L373.3 189.5 L365.7 205.6 L360.2 203.2 L356.8 204.2 L354.3 202.1 L355.8 208.0 L355.1 216.1 L353.9 218.0 L351.6 217.4 L352.6 229.0 L348.6 233.7 L345.7 230.6 L345.5 232.7 L344.4 233.2 L340.0 207.5 L336.8 208.6 L335.6 207.3 L335.7 211.0 L332.9 213.7 L333.9 216.7 L330.9 219.0 L328.1 213.9 L327.2 216.6 L324.6 209.1 L327.6 201.7 L330.5 202.3 L331.6 199.9 L332.9 201.2 L332.7 199.7 L334.8 201.3 L335.1 198.4 L338.4 197.1 L340.2 192.5 L339.3 190.0 L343.0 190.4 L342.0 188.1 L337.0 185.8 L314.8 186.4 L306.6 184.2 L307.2 174.6 L304.4 170.3 L303.0 174.3 L300.0 173.7 L297.2 171.8 L296.3 167.9 L293.8 167.8 L295.8 170.2 L290.5 169.9 L291.6 168.7 L286.9 164.6 L285.9 166.7 L288.6 168.5 L283.8 171.6 L282.9 176.5 L285.1 176.6 L288.8 181.1 L292.5 180.8 L295.2 184.7 L294.0 186.1 L287.4 185.5 L286.9 189.4 L283.3 189.5 L281.5 193.5 L286.0 197.7 L291.5 199.2 L291.9 203.6 L289.3 205.4 L289.0 208.5 L292.4 210.8 L291.2 214.3 L295.0 214.9 L293.0 218.0 L296.4 230.6 L294.9 234.4 L296.4 238.2 L294.0 238.3 L293.2 236.1 L293.0 238.5 L291.3 237.6 L292.1 232.6 L290.1 231.7 L289.0 235.6 L288.5 233.6 L287.7 234.4 L287.6 238.6 L285.2 236.8 L284.8 239.3 L284.3 230.7 L283.9 230.0 L281.7 229.6 L284.0 231.3 L278.7 237.3 L269.0 239.7 L266.5 242.6 L265.3 245.6 L267.4 250.3 L265.9 250.9 L268.7 251.7 L264.0 254.5 L264.8 256.8 L263.2 258.0 L265.0 257.3 L259.1 263.1 L247.7 266.9 L240.9 271.4 L228.4 287.3 L220.6 291.5 L215.9 298.0 L203.5 306.1 L203.4 313.2 L195.3 316.9 L189.2 317.1 L184.7 325.7 L181.2 323.1 L175.5 326.3 L172.6 335.1 L174.6 342.4 L173.6 350.0 L176.6 361.5 L174.0 373.7 L168.6 385.3 L170.3 405.4 L162.2 406.2 L156.8 417.6 L157.7 419.7 L160.8 420.6 L148.2 424.5 L145.5 434.0 L138.4 438.4 L131.0 434.4 L124.6 426.2 L126.3 424.9 L124.5 425.7 L122.0 419.4 L120.8 409.5 L115.4 393.4 L110.9 384.8 L106.2 380.4 L101.1 368.1 L99.7 356.3 L95.6 346.9 L96.8 347.4 L93.7 340.4 L88.6 335.0 L86.9 326.6 L82.3 320.6 L81.1 315.8 L82.5 315.3 L81.1 315.6 L80.4 313.9 L82.2 314.0 L80.4 312.6 L81.6 312.3 L80.5 306.1 L78.7 302.3 L79.7 302.9 L80.2 302.4 L75.2 288.7 L77.5 289.8 L77.3 287.2 L75.0 286.8 L74.8 283.9 L76.2 285.0 L74.1 281.7 L75.3 279.7 L76.0 280.4 L75.8 280.8 L76.1 281.2 L76.3 281.3 L75.9 279.1 L74.8 278.7 L77.0 276.8 L75.9 274.3 L75.5 276.6 L73.4 278.7 L73.2 272.6 L74.9 272.9 L72.6 270.4 L74.6 269.4 L72.4 269.3 L71.4 264.8 L75.1 251.2 L72.4 247.6 L74.0 247.1 L72.1 246.3 L73.2 245.0 L71.2 246.4 L71.1 244.6 L71.5 244.3 L71.9 244.8 L72.5 244.7 L70.6 243.2 L75.1 237.6 L69.7 237.8 L72.7 233.2 L69.3 233.2 L70.4 229.8 L72.8 230.3 L74.9 228.9 L69.7 228.3 L68.3 229.8 L66.9 228.3 L64.9 232.5 L65.8 234.0 L65.6 233.7 L65.3 233.5 L64.6 233.5 L66.6 238.4 L63.9 244.7 L46.3 252.2 L37.2 246.8 L20.4 228.3 L22.3 225.8 L24.4 229.1 L28.3 226.6 L30.5 228.1 L31.3 225.8 L32.4 227.0 L37.4 224.9 L41.1 218.5 L38.0 217.3 L38.1 218.8 L33.4 219.4 L31.1 222.0 L24.0 220.5 L22.4 218.8 L22.2 219.3 L21.5 218.3 L21.2 218.8 L21.1 218.2 L20.8 218.6 L18.0 216.9 L16.3 215.6 L17.5 216.2 L15.6 214.7 L16.9 213.6 L13.5 210.6 L18.7 205.1 L14.7 207.1 L13.5 206.0 L12.4 209.5 L10.0 209.0 L12.4 207.3 L10.2 207.4 L12.5 203.7 L18.0 203.8 L18.7 198.7 L19.5 200.2 L20.6 198.9 L29.5 199.0 L35.4 200.8 L42.7 197.1 L42.8 199.6 L44.8 200.1 L50.3 197.4 L48.7 196.8 L50.0 193.2 L44.1 182.7 L44.1 178.2 L38.7 178.0 L36.4 174.7 L37.4 165.7 L28.3 162.8 L29.4 156.3 L40.1 144.1 L43.1 144.1 L47.0 148.6 L61.0 144.9 L67.7 132.9 L75.3 129.1 L81.5 115.6 L89.4 111.8 L88.9 107.5 L99.3 98.9 L96.8 98.0 L98.7 93.7 L96.4 89.4 L98.1 86.9 L108.6 81.9 L104.9 78.2 L99.1 78.0 L99.4 72.8 L94.9 73.9 L84.8 69.1 L84.2 57.3 L81.5 50.1 L82.3 47.3 L85.1 47.4 L86.0 44.4 L90.4 42.6 L91.6 39.2 L86.3 37.7 L86.8 33.2 L81.6 33.1 L77.8 30.3 L78.5 28.2 L70.2 28.4 L69.9 22.7 L75.6 19.1 L76.9 15.9 L87.9 15.5 L85.3 12.6 L90.3 13.9 L99.2 10.0 L102.1 12.3 L105.5 10.9 L109.2 12.0 L109.8 15.4 L113.5 15.1 L117.5 19.7 L127.0 23.8 L128.6 28.3 L135.6 30.3 L137.9 33.8Z"
          />
        </defs>

        <g fill="none" stroke="url(#streams)" strokeWidth="1.3" opacity=".8">
          <path className="flowline" d="M40 610 C 110 560, 150 520, 158 455" />
          <path className="flowline" d="M120 610 C 150 560, 160 520, 160 455" />
          <path className="flowline" d="M210 610 C 190 560, 168 520, 162 455" />
          <path className="flowline" d="M300 610 C 230 560, 175 520, 164 455" />
          <path className="flowline" d="M390 610 C 270 560, 185 520, 166 455" />
          <path className="flowline" d="M480 610 C 320 560, 195 520, 168 455" />
          <path d="M0 570 C 100 530, 145 500, 156 460" />
          <path d="M470 600 C 330 540, 200 500, 170 460" />
        </g>

        <g transform="translate(20 10)">
          <use href="#india" fill="#6b5cff" opacity=".35" filter="url(#softglow)" />
          <use
            href="#india"
            fill="url(#mapfill)"
            stroke="#c4bdff"
            strokeWidth="1.6"
            strokeLinejoin="round"
            filter="url(#glow)"
          />

          <g stroke="#d3ceff" strokeWidth=".8" opacity=".55" fill="none">
            <path d="M101 55 L134 135 L159 245 L286 224 L333 172 M134 135 L70 218 L74 276 L151 301 L176 365 L139 366 L74 276 M70 218 L159 245 L151 301 L286 224 M134 135 L286 224 M159 245 L74 276 M151 301 L139 366" />
          </g>
          <g fill="#fff" filter="url(#glow)">
            <circle cx="101" cy="55" r="3" />
            <circle cx="134" cy="135" r="4" />
            <circle cx="70" cy="218" r="3.2" />
            <circle cx="74" cy="276" r="4" />
            <circle cx="286" cy="224" r="4" />
            <circle cx="333" cy="172" r="3.2" />
            <circle cx="151" cy="301" r="3.5" />
            <circle cx="176" cy="365" r="3.5" />
            <circle cx="139" cy="366" r="3.5" />
          </g>

          <g className="core-ring" filter="url(#glow)">
            <circle cx="159" cy="235" r="40" fill="#8f7bff" opacity=".35" filter="url(#softglow)" />
            <circle cx="159" cy="235" r="22" fill="none" stroke="#fff" strokeWidth="6.5" />
            <ellipse
              cx="159"
              cy="235"
              rx="34"
              ry="14"
              fill="none"
              stroke="#d6d0ff"
              strokeWidth="2"
              transform="rotate(-25 159 235)"
            />
          </g>

          <g stroke="#e7e8ff" strokeWidth=".8" fill="none">
            <path d="M134 135 L180 108 L205 108" />
            <path d="M74 276 L30 292 L12 292" />
            <path d="M286 224 L330 246 L350 246" />
            <path d="M139 366 L96 392 L78 392" />
            <path d="M333 172 L318 90 L304 82" />
            <path d="M300 250 L360 320" />
          </g>
          <g fill="#e7e8ff">
            <circle cx="205" cy="108" r="2" />
            <circle cx="12" cy="292" r="2" />
            <circle cx="350" cy="246" r="2" />
            <circle cx="78" cy="392" r="2" />
          </g>

          <g
            fontFamily="Plus Jakarta Sans, Segoe UI, sans-serif"
            fill="#eceeff"
            fontWeight="600"
            letterSpacing="1.6"
          >
            <text x="210" y="112" fontSize="11">NORTH</text>
            <text x="48" y="282" fontSize="11" textAnchor="end">WEST</text>
            <text x="355" y="250" fontSize="11">EAST</text>
            <text x="74" y="396" fontSize="11" textAnchor="end">SOUTH</text>
            <text x="162" y="290" fontSize="12.5" textAnchor="middle" letterSpacing="2">
              ONE INDIA
            </text>
            <text x="162" y="308" fontSize="12.5" textAnchor="middle" letterSpacing="2">
              ONE INTELLIGENCE
            </text>
            <text x="300" y="48" fontSize="10" fontWeight="500" letterSpacing="1" textAnchor="end">
              MILLIONS
            </text>
            <text x="300" y="62" fontSize="10" fontWeight="500" letterSpacing="1" textAnchor="end">
              OF DOCUMENTS
            </text>
            <text x="300" y="76" fontSize="10" fontWeight="500" letterSpacing="1" textAnchor="end">
              REAL INSIGHTS
            </text>
            <text x="364" y="334" fontSize="13" letterSpacing="2">INDIA</text>
            <text x="364" y="352" fontSize="13" letterSpacing="2">CONNECTED</text>
          </g>
        </g>
      </svg>

      <div className="docs">
        <span style={{ left: 0, top: '92px', transform: 'rotate(-8deg) scale(.8)' }}></span>
        <span style={{ left: '26px', top: '62px', transform: 'rotate(-6deg) scale(.9)' }}></span>
        <span style={{ left: '56px', top: '34px', transform: 'rotate(-4deg)' }}></span>
        <span style={{ left: '90px', top: '12px', transform: 'rotate(-2deg) scale(1.05)' }}></span>
        <span style={{ left: '110px', top: '70px', transform: 'rotate(-3deg) scale(.95)' }}></span>
      </div>

      <div className="sources">
        <div className="src">
          <span className="glyph">SAP</span>
          ERP
        </div>
        <div className="src">
          <span className="glyph">SP</span>
          Microsoft<br />SharePoint
        </div>
        <div className="src">
          <span className="glyph">SF</span>
          CRM
        </div>
        <div className="src">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#9fd8ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="7" ry="2.5" />
            <path d="M5 5v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5" />
            <path d="M8 20l3-4 3 2 4-5" />
          </svg>
          Azure Synapse<small>Analytics</small>
        </div>
        <div className="src">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#5fb4ff">
            <path d="M10 3h5l-7 18H3zM14 8l7 13h-9l4-3z" />
          </svg>
          Azure<small>Cloud</small>
        </div>
        <div className="src">
          <span style={{ fontSize: '14px' }}>+ More</span>Sources
        </div>
      </div>
    </div>
  );
});

IndiaMapVisual.displayName = 'IndiaMapVisual';
