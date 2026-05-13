import { ImageResponse } from 'next/og';

export const alt = 'MolarPlus, Software for everyone in dentistry. By Clino Health.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #2a276e 0%, #1a1548 100%)',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: 'white',
              letterSpacing: '-0.025em',
            }}
          >
            MolarPlus
          </div>
        </div>

        <div style={{ flex: 1, display: 'flex' }} />

        <div
          style={{
            display: 'flex',
            fontSize: 18,
            fontWeight: 800,
            color: '#a5b4fc',
            textTransform: 'uppercase',
            letterSpacing: '0.22em',
            marginBottom: '28px',
          }}
        >
          The complete dental ecosystem
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 88,
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-0.035em',
            lineHeight: 1.02,
            maxWidth: '950px',
          }}
        >
          Software for everyone in dentistry.
        </div>

        <div style={{ flex: 0.3, display: 'flex' }} />

        {/* Product chips */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '36px',
          }}
        >
          {['Clinic', 'Lab', 'College'].map((p) => (
            <div
              key={p}
              style={{
                display: 'flex',
                padding: '10px 18px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '999px',
                fontSize: 16,
                fontWeight: 700,
                color: 'rgba(255,255,255,0.85)',
              }}
            >
              {p}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '32px',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 18,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.55)',
            }}
          >
            <span style={{ marginRight: '8px' }}>by</span>
            <span style={{ color: '#a3d977', fontWeight: 800 }}>Clino</span>
            <span style={{ color: '#7eb049', marginLeft: '6px', fontWeight: 800 }}>Health</span>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 16,
              fontWeight: 700,
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.1em',
            }}
          >
            molarplus.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
