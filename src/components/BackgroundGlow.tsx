import { motion } from 'motion/react'

/**
 * Ellipse 32 from Pen Design (AI Generator Base Background)
 *
 * Exact Empirical Analysis from Design Preview:
 * - Origin: Node center located at x: 100px, y: 50px (behind Logo "Ether")
 * - 305.375px Gaussian layer blur disperses the 457px #6843ec ellipse across a ~1200px diameter
 * - Peak center color: rgb(85, 62, 166) (approx 72% opacity #6843ec over black #000000)
 * - Smooth exponential falloff: 55% at 100px, 38% at 200px, 15% at 350px, fading to 0% at ~600px
 * - Zero solid edge, purely atmospheric ambient blur
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -left-[500px] -top-[550px] h-[1200px] w-[1200px] rounded-full will-change-transform"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(104, 67, 236, 0.65) 0%, rgba(104, 67, 236, 0.45) 20%, rgba(104, 67, 236, 0.26) 40%, rgba(104, 67, 236, 0.12) 60%, rgba(104, 67, 236, 0.03) 78%, rgba(0, 0, 0, 0) 92%)',
            filter: 'blur(100px)',
          }}
        />

        {/* Ethereal secondary dispersion layer for ultimate softness */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -left-[200px] -top-[250px] h-[600px] w-[600px] rounded-full will-change-transform"
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
