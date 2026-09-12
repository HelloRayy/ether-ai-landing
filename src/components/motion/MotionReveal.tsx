import { motion, type HTMLMotionProps } from 'motion/react'
import React from 'react'

export const EASE_EXPO = [0.16, 1, 0.3, 1] as const

interface MotionRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  className?: string
  once?: boolean
  trigger?: 'load' | 'scroll'
}

export function MotionReveal({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 30,
  className = '',
  once = true,
  trigger = 'scroll',
  ...props
}: MotionRevealProps) {
  const isLoad = trigger === 'load'

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      {...(isLoad
        ? { animate: { opacity: 1, y: 0 } }
        : { whileInView: { opacity: 1, y: 0 }, viewport: { once, amount: 0.05, margin: '0px 0px 50px 0px' } })}
      transition={{
        duration,
        delay,
        ease: EASE_EXPO,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface MaskedTextRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  trigger?: 'load' | 'scroll'
}

export function MaskedTextReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.85,
  trigger = 'scroll',
}: MaskedTextRevealProps) {
  const isLoad = trigger === 'load'

  return (
    <span className={`inline-block overflow-hidden align-top ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: '115%' }}
        {...(isLoad
          ? { animate: { y: '0%' } }
          : { whileInView: { y: '0%' }, viewport: { once: true, amount: 0.1 } })}
        transition={{
          duration,
          delay,
          ease: EASE_EXPO,
        }}
      >
        {children}
      </motion.span>
    </span>
  )
}

interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  staggerChildren?: number
  delayChildren?: number
  className?: string
  trigger?: 'load' | 'scroll'
}

export function StaggerContainer({
  children,
  staggerChildren = 0.08,
  delayChildren = 0,
  className = '',
  trigger = 'scroll',
  ...props
}: StaggerContainerProps) {
  const isLoad = trigger === 'load'

  return (
    <motion.div
      initial="hidden"
      {...(isLoad
        ? { animate: 'visible' }
        : { whileInView: 'visible', viewport: { once: true, amount: 0.05, margin: '0px 0px 50px 0px' } })}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE_EXPO,
    },
  },
}
