import { motion } from 'motion/react'

/**
 * Ellipse 32 from Pen Design (AI Generator Base Background)
 * Spec:
 * - Dimensions: 457px x 457px
 * - Position: x: -128px, y: -178px
 * - Fill: #6843ec
 * - Effect: Blur 305.375px
 */
export function BackgroundGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -left-24 -top-32 h-[360px] w-[360px] rounded-full bg-[#6843ec] opacity-85 blur-[130px] sm:-left-[128px] sm:-top-[178px] sm:h-[457px] sm:w-[457px] sm:blur-[160px]"
      />
    </div>
  )
}
