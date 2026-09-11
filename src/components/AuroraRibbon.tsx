export function AuroraRibbon() {
  return (
    <svg
      viewBox="0 0 1440 1690"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full select-none pointer-events-none"
    >
      <defs>
        {/* Left Ribbon Gradient: Deep Purple -> Vibrant Violet -> Electric Cyan -> Bright White */}
        <linearGradient
          id="aurora-grad-left"
          x1="0%"
          y1="100%"
          x2="50%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#4c1d95" stopOpacity="0.8" />
          <stop offset="30%" stopColor="#6843ec" stopOpacity="0.9" />
          <stop offset="65%" stopColor="#8b5cf6" stopOpacity="0.95" />
          <stop offset="90%" stopColor="#38bdf8" stopOpacity="1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
        </linearGradient>

        {/* Right Ribbon Gradient: Bright Purple/Cyan at top card -> Emerald Green -> Neon Lime */}
        <linearGradient
          id="aurora-grad-right"
          x1="80%"
          y1="0%"
          x2="10%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#6843ec" stopOpacity="0.85" />
          <stop offset="25%" stopColor="#38bdf8" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#10b981" stopOpacity="0.95" />
          <stop offset="85%" stopColor="#22c55e" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#d2ff3a" stopOpacity="1" />
        </linearGradient>

        {/* Ambient atmospheric glows */}
        <radialGradient
          id="ambient-green-glow"
          cx="20%"
          cy="68%"
          r="30%"
        >
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.22" />
          <stop offset="50%" stopColor="#059669" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        <radialGradient
          id="ambient-purple-glow"
          cx="85%"
          cy="38%"
          r="25%"
        >
          <stop offset="0%" stopColor="#6843ec" stopOpacity="0.28" />
          <stop offset="60%" stopColor="#4c1d95" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        {/* Gaussian blur filters */}
        <filter
          id="glow-wide"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="55" result="blur" />
        </filter>
        <filter
          id="glow-mid"
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
        >
          <feGaussianBlur stdDeviation="20" result="blur" />
        </filter>
        <filter
          id="glow-tight"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feGaussianBlur stdDeviation="5" result="blur" />
        </filter>
      </defs>

      {/* Atmospheric Background Halos */}
      <rect
        x="0"
        y="800"
        width="800"
        height="700"
        fill="url(#ambient-green-glow)"
      />
      <rect
        x="700"
        y="300"
        width="740"
        height="600"
        fill="url(#ambient-purple-glow)"
      />

      {/* =========================================================================
          1. Line 1 (Left Ribbon):
             - Starts at bottom-left (x: -50, y: 1350)
             - Curves up through (x: 120, y: 1100), (x: 260, y: 1000)
             - Arcs right beneath "Join a community of millions." at (x: 360, y: 880)
             - Swoops up-left towards (x: 180, y: 720) framing the text
         ========================================================================= */}
      <g>
        {/* Outer Aura */}
        <path
          d="M -60 1350 C 40 1200 120 1100 240 1020 C 340 950 380 900 360 840 C 340 780 260 750 160 740"
          stroke="url(#aurora-grad-left)"
          strokeWidth="90"
          filter="url(#glow-wide)"
          opacity="0.4"
          strokeLinecap="round"
        />
        {/* Mid Bloom */}
        <path
          d="M -60 1350 C 40 1200 120 1100 240 1020 C 340 950 380 900 360 840 C 340 780 260 750 160 740"
          stroke="url(#aurora-grad-left)"
          strokeWidth="28"
          filter="url(#glow-mid)"
          opacity="0.7"
          strokeLinecap="round"
        />
        {/* Tight Neon Core */}
        <path
          d="M -60 1350 C 40 1200 120 1100 240 1020 C 340 950 380 900 360 840 C 340 780 260 750 160 740"
          stroke="url(#aurora-grad-left)"
          strokeWidth="6"
          filter="url(#glow-tight)"
          opacity="0.9"
          strokeLinecap="round"
        />
        {/* Crisp Hairline Highlight */}
        <path
          d="M -60 1350 C 40 1200 120 1100 240 1020 C 340 950 380 900 360 840 C 340 780 260 750 160 740"
          stroke="#ffffff"
          strokeWidth="1.6"
          opacity="0.95"
          strokeLinecap="round"
        />
      </g>

      {/* =========================================================================
          2. Line 2 (Right Ribbon):
             - Emerges at right edge of "Create stunning visual in seconds" (x: 1250, y: 550)
             - Sweeps down-right past right screen border (x: 1420, y: 700)
             - Loops down-left past the statistics (10.2M+, 300+) along x: 1350..1200
             - Swoops underneath "1000+ topics" at (x: 820, y: 1280) towards center-bottom
         ========================================================================= */}
      <g>
        {/* Outer Aura */}
        <path
          d="M 1240 540 C 1310 590 1420 660 1430 750 C 1440 900 1360 1050 1180 1180 C 1020 1280 880 1300 760 1320"
          stroke="url(#aurora-grad-right)"
          strokeWidth="90"
          filter="url(#glow-wide)"
          opacity="0.35"
          strokeLinecap="round"
        />
        {/* Mid Bloom */}
        <path
          d="M 1240 540 C 1310 590 1420 660 1430 750 C 1440 900 1360 1050 1180 1180 C 1020 1280 880 1300 760 1320"
          stroke="url(#aurora-grad-right)"
          strokeWidth="26"
          filter="url(#glow-mid)"
          opacity="0.65"
          strokeLinecap="round"
        />
        {/* Tight Neon Core */}
        <path
          d="M 1240 540 C 1310 590 1420 660 1430 750 C 1440 900 1360 1050 1180 1180 C 1020 1280 880 1300 760 1320"
          stroke="url(#aurora-grad-right)"
          strokeWidth="5"
          filter="url(#glow-tight)"
          opacity="0.9"
          strokeLinecap="round"
        />
        {/* Crisp Hairline Highlight */}
        <path
          d="M 1240 540 C 1310 590 1420 660 1430 750 C 1440 900 1360 1050 1180 1180 C 1020 1280 880 1300 760 1320"
          stroke="#d2ff3a"
          strokeWidth="1.5"
          opacity="0.95"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}
