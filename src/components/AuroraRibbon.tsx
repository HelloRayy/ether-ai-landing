export function AuroraRibbon() {
  return (
    <svg
      viewBox="0 0 1440 1690"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full select-none pointer-events-none"
    >
      <defs>
        <linearGradient
          id="aurora-grad-1"
          x1="0%"
          y1="100%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#6843ec" stopOpacity="0.9" />
          <stop offset="35%" stopColor="#8b5cf6" stopOpacity="0.85" />
          <stop offset="65%" stopColor="#06b6d4" stopOpacity="0.9" />
          <stop offset="85%" stopColor="#10b981" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#d2ff3a" stopOpacity="1" />
        </linearGradient>

        <linearGradient
          id="aurora-grad-2"
          x1="100%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#d2ff3a" stopOpacity="0.9" />
          <stop offset="30%" stopColor="#22c55e" stopOpacity="0.85" />
          <stop offset="70%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#6843ec" stopOpacity="0" />
        </linearGradient>

        <filter
          id="glow-wide"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="70" result="blur" />
        </filter>
        <filter
          id="glow-mid"
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
        >
          <feGaussianBlur stdDeviation="24" result="blur" />
        </filter>
        <filter
          id="glow-tight"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feGaussianBlur stdDeviation="6" result="blur" />
        </filter>
      </defs>

      {/* Left S-curve Ribbon */}
      <path
        d="M -100 850 C 200 920 150 1150 50 1180 C -50 1210 250 1280 600 1180 C 950 1080 1200 850 1480 650"
        stroke="url(#aurora-grad-1)"
        strokeWidth="120"
        filter="url(#glow-wide)"
        opacity="0.35"
        strokeLinecap="round"
      />
      <path
        d="M -100 850 C 200 920 150 1150 50 1180 C -50 1210 250 1280 600 1180 C 950 1080 1200 850 1480 650"
        stroke="url(#aurora-grad-1)"
        strokeWidth="36"
        filter="url(#glow-mid)"
        opacity="0.65"
        strokeLinecap="round"
      />
      <path
        d="M -100 850 C 200 920 150 1150 50 1180 C -50 1210 250 1280 600 1180 C 950 1080 1200 850 1480 650"
        stroke="url(#aurora-grad-1)"
        strokeWidth="8"
        filter="url(#glow-tight)"
        opacity="0.9"
        strokeLinecap="round"
      />
      <path
        d="M -100 850 C 200 920 150 1150 50 1180 C -50 1210 250 1280 600 1180 C 950 1080 1200 850 1480 650"
        stroke="#ffffff"
        strokeWidth="1.8"
        opacity="0.95"
        strokeLinecap="round"
      />

      {/* Right sweeping Ribbon 2 */}
      <path
        d="M 1480 600 C 1300 680 1150 900 1250 1180 C 1350 1450 1050 1600 850 1650"
        stroke="url(#aurora-grad-2)"
        strokeWidth="100"
        filter="url(#glow-wide)"
        opacity="0.3"
        strokeLinecap="round"
      />
      <path
        d="M 1480 600 C 1300 680 1150 900 1250 1180 C 1350 1450 1050 1600 850 1650"
        stroke="url(#aurora-grad-2)"
        strokeWidth="30"
        filter="url(#glow-mid)"
        opacity="0.6"
        strokeLinecap="round"
      />
      <path
        d="M 1480 600 C 1300 680 1150 900 1250 1180 C 1350 1450 1050 1600 850 1650"
        stroke="url(#aurora-grad-2)"
        strokeWidth="6"
        filter="url(#glow-tight)"
        opacity="0.85"
        strokeLinecap="round"
      />
      <path
        d="M 1480 600 C 1300 680 1150 900 1250 1180 C 1350 1450 1050 1600 850 1650"
        stroke="#d2ff3a"
        strokeWidth="1.5"
        opacity="0.9"
        strokeLinecap="round"
      />
    </svg>
  )
}
