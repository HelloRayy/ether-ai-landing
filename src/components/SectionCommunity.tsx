import { MaskedTextReveal, MotionReveal } from './motion/MotionReveal'
import { AnimatedCounter } from './motion/AnimatedCounter'

interface StatItem {
  id: string
  numericValue: number
  suffix: string
  decimals: number
  label: string
}

const COMMUNITY_STATS: StatItem[] = [
  {
    id: 'active-accounts',
    numericValue: 10.2,
    suffix: 'M+',
    decimals: 1,
    label: 'Active accounts',
  },
  {
    id: 'projects',
    numericValue: 300,
    suffix: '+',
    decimals: 0,
    label: 'projects',
  },
  {
    id: 'topics',
    numericValue: 1000,
    suffix: '+',
    decimals: 0,
    label: 'topics',
  },
]

export function SectionCommunity() {
  return (
    <section
      id="community"
      aria-label="Community Statistics"
      className="relative z-10 mx-auto mt-28 mb-36 flex w-full max-w-[1140px] flex-col items-start justify-between gap-16 lg:flex-row lg:gap-20"
    >
      {/* Left Column: Frame 109 with Sticky Behavior & Masked Title Reveal */}
      <div className="sticky top-28 self-start w-full max-w-[420px] shrink-0 pt-2">
        <h2 className="font-[family-name:var(--font-darker)] text-[54px] sm:text-[60px] font-normal leading-[0.98] tracking-[1px] text-white">
          <MaskedTextReveal delay={0.1}>
            Join a community
          </MaskedTextReveal>
          <br />
          <MaskedTextReveal delay={0.25}>
            of millions.
          </MaskedTextReveal>
        </h2>
      </div>

      {/* Right Column: Community Statistics Stack with Physics Count-Up */}
      <div className="flex w-full max-w-[507px] flex-col gap-20 sm:gap-24">
        {COMMUNITY_STATS.map((stat, idx) => (
          <MotionReveal
            key={stat.id}
            delay={idx * 0.15}
            yOffset={40}
            duration={0.8}
            className="flex flex-col"
          >
            <span
              className="inline-block w-fit font-[family-name:var(--font-darker)] text-[96px] sm:text-[126px] font-semibold leading-[0.95] tracking-tight select-none"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #6843ec 0%, #7d54f5 32%, #bef264 78%, #d2ff3a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              <AnimatedCounter
                value={stat.numericValue}
                suffix={stat.suffix}
                decimals={stat.decimals}
              />
            </span>
            <span className="mt-1 font-[family-name:var(--font-work)] text-[16px] font-normal leading-[1.7] text-[#c4c4c4]">
              {stat.label}
            </span>
          </MotionReveal>
        ))}
      </div>
    </section>
  )
}
