/**
 * Ellipse 32 from Pen Design (AI Generator Base Background)
 * Static atmospheric ambient glow.
 */
export function BackgroundGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 overflow-hidden"
      style={{ height: '950px' }}
      aria-hidden="true"
    >
      {/* Centered to the 1440px design canvas */}
      <div className="relative mx-auto h-full max-w-[1440px]">
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
      </div>
    </div>
  )
}
