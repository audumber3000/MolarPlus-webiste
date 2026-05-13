import { ImageResponse } from 'next/og';

export const alt = 'MolarPlus College, The platform for dental education';
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                fontSize: 32,
                fontWeight: 800,
                color: 'white',
                letterSpacing: '-0.02em',
              }}
            >
              MolarPlus
            </div>
            <div
              style={{
                display: 'flex',
                marginLeft: '20px',
                paddingLeft: '20px',
                borderLeft: '1px solid rgba(255,255,255,0.2)',
                fontSize: 14,
                fontWeight: 800,
                color: 'rgba(255,255,255,0.6)',
                textTransform: 'uppercase',
                letterSpacing: '0.22em',
              }}
            >
              College
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 20px',
              background: 'rgba(251, 191, 36, 0.12)',
              border: '1px solid rgba(251, 191, 36, 0.4)',
              borderRadius: '999px',
              fontSize: 14,
              fontWeight: 800,
              color: '#fcd34d',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
            }}
          >
            Coming soon
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
          For dental colleges
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 84,
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-0.035em',
            lineHeight: 1.02,
            maxWidth: '950px',
          }}
        >
          The platform for dental education.
        </div>

        <div style={{ flex: 0.5, display: 'flex' }} />

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
            molarplus.com/college
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
