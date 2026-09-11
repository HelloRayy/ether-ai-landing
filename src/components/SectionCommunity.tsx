interface StatItem {
  id: string
  value: string
  label: string
}

const COMMUNITY_STATS: StatItem[] = [
  {
    id: 'active-accounts',
    value: '10.2M+',
    label: 'Active accounts',
  },
  {
    id: 'projects',
    value: '300+',
    label: 'projects',
  },
  {
    id: 'topics',
    value: '1000+',
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
      {/* Left Column: Frame 109 with Sticky Behavior */}
      <div className="sticky top-28 self-start w-full max-w-[420px] shrink-0 pt-2">
        <h2 className="font-[family-name:var(--font-darker)] text-[54px] sm:text-[60px] font-normal leading-[0.88] tracking-[1px] text-white">
          Join a community
          <br />
          of millions.
        </h2>
      </div>

      {/* Right Column: Community Statistics Stack */}
      <div className="flex w-full max-w-[507px] flex-col gap-20 sm:gap-24">
        {COMMUNITY_STATS.map((stat) => (
          <div key={stat.id} className="flex flex-col">
            <span
              className="inline-block w-fit font-[family-name:var(--font-darker)] text-[96px] sm:text-[126px] font-semibold leading-[0.95] tracking-tight select-none"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #6843ec 0%, #7d54f5 32%, #bef264 78%, #d2ff3a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {stat.value}
            </span>
            <span className="mt-1 font-[family-name:var(--font-work)] text-[16px] font-normal leading-[1.7] text-[#c4c4c4]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
