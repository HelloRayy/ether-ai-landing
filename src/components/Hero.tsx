import { motion } from 'motion/react'

export function Hero() {
  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
  ]

  // Contoured stepped path with smooth corner radii (R=32 on outer corners, R=24 on step transitions)
  const steppedCardPath =
    'M 1,33 A 32,32 0 0,1 33,1 L 536,1 A 24,24 0 0,1 560,25 L 560,109.5 A 24,24 0 0,1 536,133.5 L 473.7,133.5 A 24,24 0 0,0 449.7,157.5 L 449.7,289 A 24,24 0 0,1 425.7,313 L 33,313 A 32,32 0 0,1 1,281 Z'

  return (
    <section className="relative z-20 pt-16 pb-24">
      {/* Hero Top: Headline + Description Block */}
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        {/* Main Title (840px in design, Darker Grotesque 82px 600) */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[840px] font-[family-name:var(--font-darker)] text-5xl font-semibold tracking-tight text-white leading-[1.08] sm:text-6xl md:text-7xl lg:text-[82px]"
        >
          Harnessing Artificial Intelligence Tools for Naturally Image Generator
        </motion.h1>

        {/* Frame 103: Emojis + Paragraph (367px in design) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex max-w-[367px] flex-col gap-4 self-start lg:self-end"
        >
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
        </motion.div>
      </div>

      {/* Hero Bottom: Interactive Visual Cards */}
      <div className="mt-16 grid grid-cols-1 gap-6 xl:grid-cols-12 xl:items-start">
        {/* Card 1: importantImg (Custom Stepped Shape with Smooth Fillet Radii) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
          className="relative mx-auto w-full max-w-[561px] drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] xl:col-span-5"
        >
          <div className="relative aspect-[561/317] w-full">
            <svg
              viewBox="-2 -2 565 318"
              className="h-full w-full overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="stepped-bird-clip">
                  <path d={steppedCardPath} />
                </clipPath>
              </defs>

              {/* Clipped Bird Artwork */}
              <image
                href="/assets/Union.png"
                width="561"
                height="317"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#stepped-bird-clip)"
              />

              {/* Exact Stepped Outline with 2px #d2ff3a Stroke & Smooth Curves */}
              <path
                d={steppedCardPath}
                stroke="#d2ff3a"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* AI Generator Label Badge */}
            <div className="pointer-events-none absolute bottom-5 left-[50%] -translate-x-1/2 sm:left-[55%]">
              <span className="font-[family-name:var(--font-work)] text-base font-medium tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-[21px]">
                AI Generator
              </span>
            </div>
          </div>
        </motion.div>

        {/* Middle Column: Stats + Community Card */}
        <div className="flex flex-col gap-6 xl:col-span-3">
          {/* Group 15: 300+ Projects Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="relative flex h-[137px] flex-col justify-center rounded-[27px] p-6 text-white shadow-xl overflow-hidden"
            style={{
              background:
                'linear-gradient(180deg, #d2ff3a 0%, rgba(210, 255, 58, 0.15) 60%, rgba(255, 255, 255, 0) 100%)',
            }}
          >
            <div className="relative z-10 font-[family-name:var(--font-work)] text-3xl font-medium tracking-tight text-white leading-[1.05] sm:text-[46px]">
              300+
              <br />
              Projects
            </div>
          </motion.div>

          {/* Group 14: Community Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="flex flex-col justify-between rounded-[24px] bg-[#6843ec] p-5 text-white shadow-xl xl:h-[159px]"
          >
            <h3 className="font-[family-name:var(--font-darker)] text-2xl font-bold leading-tight sm:text-[29px]">
              We have the best AI image generator
            </h3>

            <div className="mt-3 flex items-center gap-3">
              {/* Overlapping Avatars with #d2ff3a border */}
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

              <span className="font-[family-name:var(--font-darker)] text-sm font-medium leading-none text-white/95 sm:text-[15px]">
                Join our Community,
                <br />
                We are waiting for you
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Geometric Card + Try Free CTA */}
        <div className="flex flex-col gap-6 xl:col-span-4">
          {/* Group 16: Abstract Geometric Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="relative h-[208px] overflow-hidden rounded-[35px] shadow-xl"
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
              {/* White Triangle */}
              <path
                d="M155.019 0l155.01899 268.5-310.03799 0 155.019-268.5z"
                fill="#ffffff"
                transform="translate(100, 70) scale(0.48)"
              />

              {/* Lime Plus/Cross */}
              <g transform="translate(290, 85) rotate(102.9) scale(0.55)">
                <path
                  d="M250 205c0-24.853-20.147-45-45-45-24.853 0-45 20.147-45 45 0 24.853 20.147 45 45 45 24.853 0 45-20.147 45-45z m-250 45l0-90 160 0 0-160 90 0 0 160 160 0 0 90-160 0 0 160-90 0 0-160-160 0z"
                  fill="#d2ff3a"
                />
              </g>

              {/* Purple Circle */}
              <circle cx="340" cy="140" r="18" fill="#6843ec" />

              {/* Dark Angular Accent */}
              <path
                d="M237 0l-90 0 0 74-147 0 0 90 147 0 0 246 90 0 0-410z"
                fill="#040c1f"
                transform="translate(80, -10) rotate(-38.5) scale(0.4)"
              />
            </svg>
          </motion.div>

          {/* Primary CTA Button: Try Free */}
          <motion.a
            href="#try-free"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex h-[88px] items-center justify-center gap-3 rounded-[24px] bg-[#d2ff3a] px-8 text-black shadow-lg shadow-[#d2ff3a]/20 transition-all hover:bg-[#bbf028] sm:h-[99px]"
          >
            <span className="font-[family-name:var(--font-work)] text-2xl font-medium sm:text-[32px]">
              Try Free
            </span>

            {/* Slanted Arrow SVG */}
            <svg
              className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-7 sm:w-7"
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
          </motion.a>
        </div>
      </div>
    </section>
  )
}
