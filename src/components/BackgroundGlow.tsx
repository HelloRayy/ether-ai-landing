/**
 * Background Elements from Pen Design:
 * 1. Ellipse 32 (top purple ambient glow)
 * 2. IMAGE (IMAGE.png: glowing ribbon/aurora at y: 916px)
 *    Rendered with native 1440x1690 dimensions and mix-blend-mode: screen
 *    to preserve 1:1 pixel sharpness without horizontal stretching or banding.
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

        {/* 2. Linear/Vercel-style refined filament lighting (Centered on 1440px canvas, top: 1050px) */}
        <img
          src="/assets/aurora.svg"
          alt=""
          width={1440}
          height={1400}
          className="pointer-events-none absolute left-0 top-[1050px] h-[1400px] w-[1440px] select-none mix-blend-screen"
        />
      </div>
    </div>
  )
}
