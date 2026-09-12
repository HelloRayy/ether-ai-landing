import { motion, useMotionValue, useSpring, useTransform, type HTMLMotionProps } from 'motion/react'
import React, { useRef, useState, useEffect } from 'react'

interface TiltCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  maxTilt?: number
  className?: string
  shineOpacity?: number
}

export function TiltCard({
  children,
  maxTilt = 8,
  className = '',
  shineOpacity = 0.15,
  ...props
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [canHover, setCanHover] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches
  })

  useEffect(() => {
    const mql = window.matchMedia('(hover: hover) and (pointer: fine)')
    const handler = (e: MediaQueryListEvent) => setCanHover(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth physics springs
  const springConfig = { stiffness: 300, damping: 25 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [maxTilt, -maxTilt])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-maxTilt, maxTilt])

  // Specular reflection position
  const shineX = useTransform(smoothX, [-0.5, 0.5], ['0%', '100%'])
  const shineY = useTransform(smoothY, [-0.5, 0.5], ['0%', '100%'])

  // Dynamic Specular Lighting Sheen gradient (called unconditionally at top level)
  const shineBackground = useTransform(
    [shineX, shineY],
    ([x, y]) =>
      `radial-gradient(circle 320px at ${x} ${y}, rgba(255, 255, 255, ${shineOpacity}), transparent 70%)`
  )

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !canHover) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        canHover
          ? {
              transformStyle: 'preserve-3d',
              rotateX,
              rotateY,
            }
          : undefined
      }
      className={`relative perspective-[1000px] will-change-transform ${className}`}
      {...props}
    >
      {children}

      {/* Dynamic Specular Lighting Sheen */}
      {canHover && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] overflow-hidden transition-opacity duration-300"
          style={{ background: shineBackground }}
          aria-hidden="true"
        />
      )}
    </motion.div>
  )
}
