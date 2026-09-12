import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  duration?: number
  className?: string
}

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1800,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayValue, setDisplayValue] = useState(
    decimals > 0 ? (0).toFixed(decimals) : '0'
  )

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let startTime: number | null = null
    let animationFrameId: number

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.disconnect()

            const step = (timestamp: number) => {
              if (!startTime) startTime = timestamp
              const elapsed = timestamp - startTime
              const progress = Math.min(elapsed / duration, 1)

              // Quintic ease out: 1 - (1 - t)^5 (matches [0.16, 1, 0.3, 1])
              const easeProgress = 1 - Math.pow(1 - progress, 5)
              const current = easeProgress * value

              setDisplayValue(current.toFixed(decimals))

              if (progress < 1) {
                animationFrameId = requestAnimationFrame(step)
              } else {
                setDisplayValue(value.toFixed(decimals))
              }
            }

            animationFrameId = requestAnimationFrame(step)
          }
        })
      },
      { threshold: 0.05, rootMargin: '100px' }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [value, decimals, duration])

  return (
    <span ref={ref} className={`inline-block tabular-nums ${className}`}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}
