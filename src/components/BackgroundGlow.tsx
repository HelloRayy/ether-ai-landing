import { motion } from 'motion/react'

/**
 * Ellipse 32 from Pen Design (AI Generator Base Background)
 * Spec & Analysis:
 * - Original node: 457px x 457px, x: -128px, y: -178px, blur: 305px, fill: #6843ec
 * - Mathematical Center: x = 100px, y = 50px (directly behind Logo "Ether")
 * - Spread with 305px blur: ~850px diameter fading seamlessly into pitch black #000000
 */
export function BackgroundGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 overflow-hidden"
      style={{ height: '900px' }}
      aria-hidden="true"
    >
      {/* 1440px Centered Canvas Anchor */}
      <div className="relative mx-auto h-full max-w-[1440px]">
        {/* Ambient Outer Halo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -left-[320px] -top-[350px] h-[850px] w-[850px] rounded-full will-change-transform"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(104, 67, 236, 0.38) 0%, rgba(104, 67, 236, 0.22) 28%, rgba(104, 67, 236, 0.08) 55%, rgba(104, 67, 236, 0) 75%)',
            filter: 'blur(50px)',
          }}
        />

        {/* Dense Inner Atmosphere Core centered at (100px, 50px) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -left-[110px] -top-[160px] h-[420px] w-[420px] rounded-full will-change-transform"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(115, 78, 245, 0.42) 0%, rgba(104, 67, 236, 0.2) 45%, rgba(104, 67, 236, 0) 72%)',
            filter: 'blur(45px)',
          }}
        />
      </div>
    </div>
  )
}
