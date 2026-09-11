import { AuroraRibbon } from './AuroraRibbon'

/**
 * Background Elements from Pen Design:
 * 1. Ellipse 32 (top purple ambient glow)
 * 2. Vector Aurora Ribbon (replaces low-res raster IMAGE.png with 100% crisp vector SVG gradient glow)
 */
export function BackgroundGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 overflow-hidden select-none"
      style={{ height: '3392px' }}
      aria-hidden="true"
    >
      {/* Centered 1440px canvas frame */}
      <div className="relative mx-auto h-full max-w-[1440px]">
        {/* 1. Ellipse 32 Ambient Glow */}
        <div
          className="absolute -left-[500px] -top-[550px] h-[1200px] w-[1200px] rounded-full"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(104, 67, 236, 0.65) 0%, rgba(104, 67, 236, 0.45) 20%, rgba(104, 67, 236, 0.26) 40%, rgba(104, 67, 236, 0.12) 60%, rgba(104, 67, 236, 0.03) 78%, rgba(0, 0, 0, 0) 92%)',
            filter: 'blur(100px)',
          }}
        />

        <div
          className="absolute -left-[200px] -top-[250px] h-[600px] w-[600px] rounded-full"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(115, 78, 245, 0.28) 0%, rgba(104, 67, 236, 0.14) 45%, rgba(0, 0, 0, 0) 75%)',
            filter: 'blur(80px)',
          }}
        />

        {/* 2. Vector Aurora Ribbon (100% Crisp SVG - zero pixelation or compression artifacts) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[916px] w-[1440px] h-[1690px] pointer-events-none">
          <AuroraRibbon />
        </div>
      </div>
    </div>
  )
}
