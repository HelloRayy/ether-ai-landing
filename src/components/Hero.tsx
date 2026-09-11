export function Hero() {
  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
  ]

  // Contoured stepped path with smooth corner radii (R=32 on outer corners, R=16 on step transitions)
  const steppedCardPath =
    'M 1,33 A 32,32 0 0,1 33,1 L 536,1 A 24,24 0 0,1 560,25 L 560,117.5 A 16,16 0 0,1 544,133.5 L 465.7,133.5 A 16,16 0 0,0 449.7,149.5 L 449.7,297 A 16,16 0 0,1 433.7,313 L 33,313 A 32,32 0 0,1 1,281 Z'

  return (
    <section className="relative z-20 pt-16 pb-24">
      {/* Hero Top: Headline + Description Block */}
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        {/* Main Title (840px in design, Darker Grotesque 82px 600) */}
        <h1 className="max-w-[840px] font-[family-name:var(--font-darker)] text-5xl font-semibold tracking-tight text-white leading-[1.08] sm:text-6xl md:text-7xl lg:text-[82px]">
          Harnessing Artificial Intelligence Tools for Naturally Image Generator
        </h1>

        {/* Frame 103: Emojis + Paragraph (367px in design) */}
        <div className="flex max-w-[367px] flex-col gap-4 self-start lg:self-end">
          <div className="font-[family-name:var(--font-emoji)] text-3xl font-semibold tracking-wide text-white sm:text-[41px]">
            🔥😍👍
          </div>
          <p className="font-[family-name:var(--font-work)] text-sm font-normal text-white/90 leading-[1.92]">
            In the realm of creativity, technology has become a powerful ally
            for artists, writers, designers, and creators of all kinds.
            Artificially intelligent (AI) tools have emerged as valuable
            companions, assisting naturally creative humans in their creative
            processes.
          </p>
        </div>
      </div>

      {/* Hero Bottom: Interlocking Cards Layout */}
      {/* Desktop (xl: >= 1280px) Exact Coordinate Interlocking Canvas */}
      <div className="mt-16 hidden xl:block relative h-[335px] w-[1289px] mx-auto">
        {/* 1. importantImg (x: 0, y: 12, w: 561, h: 317) */}
        <div className="absolute left-0 top-[12px] w-[561px] h-[317px] drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
          <svg
            viewBox="-2 -2 565 318"
            className="h-full w-full overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="desktop-stepped-bird-clip">
                <path d={steppedCardPath} />
              </clipPath>
            </defs>

            {/* Clipped Bird Artwork */}
            <image
              href="/assets/Union.png"
              width="561"
              height="317"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#desktop-stepped-bird-clip)"
            />

            {/* Exact Stepped Outline with 2.5px #d2ff3a Stroke & Smooth Curves */}
            <path
              d={steppedCardPath}
              stroke="#d2ff3a"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* AI Generator Label Badge (Pen: x: 280, y: 283) */}
          <div className="pointer-events-none absolute left-[280px] top-[283px]">
            <span className="font-[family-name:var(--font-work)] text-[21px] font-medium tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              AI Generator
            </span>
          </div>
        </div>

        {/* 2. Group 15: 300+ Projects Card (x: 584, y: 12, w: 269, h: 137) */}
        <div
          className="absolute left-[584px] top-[12px] w-[269px] h-[137px] rounded-[27px] p-6 text-white shadow-xl overflow-hidden flex flex-col justify-center"
          style={{
            background:
              'linear-gradient(180deg, #d2ff3a 0%, rgba(210, 255, 58, 0.15) 60%, rgba(255, 255, 255, 0) 100%)',
          }}
        >
          <div className="relative z-10 font-[family-name:var(--font-work)] text-[46px] font-medium tracking-tight text-white leading-[1.01]">
            300+
            <br />
            Projects
          </div>
        </div>

        {/* 3. Group 14: Community Card (x: 466, y: 170, w: 387, h: 159, nested into step notch) */}
        <div className="absolute left-[466px] top-[170px] w-[387px] h-[159px] rounded-[24px] bg-[#6843ec] p-[21px] text-white shadow-xl flex flex-col justify-between">
          <h3 className="font-[family-name:var(--font-darker)] text-[29px] font-bold leading-tight text-white">
            We have the best AI image generator
          </h3>

          <div className="mt-2 flex items-center gap-2">
            {/* Overlapping Avatars with #d2ff3a border (Pen: gap -16px) */}
            <div className="flex -space-x-4">
              {avatars.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt={`Community Member ${i + 1}`}
                  className="h-[37px] w-[37px] rounded-full object-cover ring-[2.3px] ring-[#d2ff3a]"
                />
              ))}
            </div>

            <span className="font-[family-name:var(--font-darker)] text-[15px] font-medium leading-none text-white/95">
              Join our Community,
              <br />
              We are waiting for you
            </span>
          </div>
        </div>

        {/* 4. Group 16: Abstract Geometric Card (x: 866, y: 12, w: 423, h: 208) */}
        <div
          className="absolute left-[866px] top-[12px] w-[423px] h-[208px] rounded-[35px] overflow-hidden shadow-xl"
          style={{
            background:
              'linear-gradient(180deg, #6843ec 0%, rgba(41, 41, 41, 0.2) 100%)',
          }}
        >
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 423 208"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* White Triangle (Pen: x: 116 - 27 = 89, y: 94 - 12 = 82) */}
            <path
              d="M155.019 0l155.01899 268.5-310.03799 0 155.019-268.5z"
              fill="#ffffff"
              transform="translate(89, 82) scale(0.4691)"
            />

            {/* Lime Cross (Pen: x: 283.7 - 27 = 256.7, y: 208.8 - 12 = 196.8, rot: 102.91°) */}
            <g transform="translate(256.7, 196.8) rotate(102.91) scale(0.4007)">
              <path
                d="M250 205c0-24.853-20.147-45-45-45-24.853 0-45 20.147-45 45 0 24.853 20.147 45 45 45 24.853 0 45-20.147 45-45z m-250 45l0-90 160 0 0-160 90 0 0 160 160 0 0 90-160 0 0 160-90 0 0-160-160 0z"
                fill="#d2ff3a"
              />
            </g>

            {/* Purple Circle (Pen: x: 301 - 27 = 274, y: 184 - 12 = 172) */}
            <circle cx="292" cy="190" r="18" fill="#6843ec" />

            {/* Black Diagonal Bar (Pen: x: 119.7 - 27 = 92.7, y: 0 - 12 = -12, rot: -38.5°) */}
            <path
              d="M237 0l-90 0 0 74-147 0 0 90 147 0 0 246 90 0 0-410z"
              fill="#040c1f"
              transform="translate(92.7, -12) rotate(-38.5) scale(0.4691)"
            />
          </svg>
        </div>

        {/* 5. ctaButtonPrimary: Try Free Button (x: 866, y: 230, w: 423, h: 99) */}
        <a
          href="#try-free"
          className="absolute left-[866px] top-[230px] w-[423px] h-[99px] rounded-[24px] bg-[#d2ff3a] flex items-center justify-center gap-3 text-black shadow-lg shadow-[#d2ff3a]/10 cursor-pointer"
        >
          <span className="font-[family-name:var(--font-work)] text-[32px] font-medium leading-[1.01]">
            Try Free
          </span>

          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>

      {/* Mobile/Tablet Fallback Layout (< 1280px) */}
      <div className="mt-12 flex flex-col gap-6 xl:hidden">
        {/* importantImg */}
        <div className="relative mx-auto w-full max-w-[561px] aspect-[561/317]">
          <svg
            viewBox="-2 -2 565 318"
            className="h-full w-full overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="mobile-stepped-bird-clip">
                <path d={steppedCardPath} />
              </clipPath>
            </defs>
            <image
              href="/assets/Union.png"
              width="561"
              height="317"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#mobile-stepped-bird-clip)"
            />
            <path
              d={steppedCardPath}
              stroke="#d2ff3a"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2">
            <span className="font-[family-name:var(--font-work)] text-lg font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              AI Generator
            </span>
          </div>
        </div>

        {/* 300+ Projects */}
        <div
          className="mx-auto w-full max-w-[561px] rounded-[27px] p-6 text-white shadow-xl"
          style={{
            background:
              'linear-gradient(180deg, #d2ff3a 0%, rgba(210, 255, 58, 0.15) 60%, rgba(255, 255, 255, 0) 100%)',
          }}
        >
          <div className="font-[family-name:var(--font-work)] text-3xl font-medium tracking-tight text-white sm:text-[46px]">
            300+ Projects
          </div>
        </div>

        {/* Community Card */}
        <div className="mx-auto w-full max-w-[561px] rounded-[24px] bg-[#6843ec] p-5 text-white shadow-xl">
          <h3 className="font-[family-name:var(--font-darker)] text-2xl font-bold text-white sm:text-[29px]">
            We have the best AI image generator
          </h3>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex -space-x-3.5">
              {avatars.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt={`Community Member ${i + 1}`}
                  className="h-[37px] w-[37px] rounded-full object-cover ring-[2.3px] ring-[#d2ff3a]"
                />
              ))}
            </div>
            <span className="font-[family-name:var(--font-darker)] text-sm font-medium text-white/95 sm:text-[15px]">
              Join our Community, We are waiting for you
            </span>
          </div>
        </div>

        {/* Geometric Card */}
        <div
          className="mx-auto h-[208px] w-full max-w-[561px] rounded-[35px] overflow-hidden shadow-xl relative"
          style={{
            background:
              'linear-gradient(180deg, #6843ec 0%, rgba(41, 41, 41, 0.2) 100%)',
          }}
        >
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 423 208"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M155.019 0l155.01899 268.5-310.03799 0 155.019-268.5z"
              fill="#ffffff"
              transform="translate(100, 70) scale(0.48)"
            />
            <g transform="translate(290, 85) rotate(102.9) scale(0.55)">
              <path
                d="M250 205c0-24.853-20.147-45-45-45-24.853 0-45 20.147-45 45 0 24.853 20.147 45 45 45 24.853 0 45-20.147 45-45z m-250 45l0-90 160 0 0-160 90 0 0 160 160 0 0 90-160 0 0 160-90 0 0-160-160 0z"
                fill="#d2ff3a"
              />
            </g>
            <circle cx="340" cy="140" r="18" fill="#6843ec" />
            <path
              d="M237 0l-90 0 0 74-147 0 0 90 147 0 0 246 90 0 0-410z"
              fill="#040c1f"
              transform="translate(80, -10) rotate(-38.5) scale(0.4)"
            />
          </svg>
        </div>

        {/* Try Free CTA */}
        <a
          href="#try-free"
          className="mx-auto flex h-[88px] w-full max-w-[561px] items-center justify-center gap-3 rounded-[24px] bg-[#d2ff3a] px-8 text-black shadow-lg shadow-[#d2ff3a]/20"
        >
          <span className="font-[family-name:var(--font-work)] text-2xl font-medium sm:text-[32px]">
            Try Free
          </span>
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
    </section>
  )
}
