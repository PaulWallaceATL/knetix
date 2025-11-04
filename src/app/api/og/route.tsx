import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A2E50',
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(0, 196, 180, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)',
        }}
      >
        {/* K Logo */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 32 32"
          style={{ marginBottom: '40px' }}
        >
          <circle cx="16" cy="16" r="16" fill="#00C4B4" />
          <path
            d="M10 8H14L18 12L14 16L18 20L14 24H10L14 20L10 16L14 12L10 8Z"
            fill="#0A2E50"
          />
          <circle cx="22" cy="10" r="2" fill="#FF8C00" />
          <circle cx="22" cy="22" r="2" fill="#FF8C00" />
        </svg>

        {/* Brand Name */}
        <div
          style={{
            fontSize: '80px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '20px',
            letterSpacing: '-0.02em',
          }}
        >
          Knetix
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '32px',
            color: 'rgba(255, 255, 255, 0.8)',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.4,
            fontWeight: 300,
          }}
        >
          Transform Your Business With Enterprise Technology
        </div>

        {/* Trust Badge */}
        <div
          style={{
            marginTop: '60px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '16px 32px',
            borderRadius: '50px',
            border: '2px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#00C4B4',
            }}
          />
          <span
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '20px',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            TRUSTED BY ENTERPRISES WORLDWIDE
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

