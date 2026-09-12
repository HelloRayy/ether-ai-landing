import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { EASE_EXPO } from './motion/MotionReveal'

interface NavItem {
  name: string
  href: string
  fontSize?: string
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Learn', href: '#learn', fontSize: 'text-[17px]' },
  { name: 'Build', href: '#build', fontSize: 'text-[17px]' },
  { name: 'Product', href: '#product', fontSize: 'text-[18px]' },
  { name: 'Community', href: '#community', fontSize: 'text-[17px]' },
]

function ChevronIcon() {
  return (
    <svg
      className="h-[8px] w-[14px] shrink-0 fill-current text-white/70 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-white"
      viewBox="0 0 15 9"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.29307 0.30529c0.09225-0.09551 0.20259-0.17169 0.3246-0.2241 0.122-0.05241 0.25323-0.07999 0.386-0.08115 0.13278-0.00115 0.26446 0.02415 0.38736 0.07443 0.1229 0.05028 0.23455 0.12453 0.32844 0.21842 0.09389 0.09389 0.16815 0.20554 0.21842 0.32844 0.05028 0.1229 0.07558 0.25458 0.07443 0.38736-0.00115 0.13278-0.02874 0.264-0.08115 0.386-0.05241 0.122-0.12859 0.23235-0.2241 0.3246l-6 6c-0.18223 0.18226-0.4278 0.28712-0.68547 0.29271-0.25768 0.00559-0.50756-0.08853-0.69753-0.26271l-6-5.5c-0.19546-0.17929-0.3117-0.42888-0.32314-0.69387-0.00566-0.13121 0.01457-0.26225 0.05955-0.38564 0.04498-0.12339 0.11382-0.23671 0.20259-0.33349 0.08877-0.09678 0.19574-0.17514 0.3148-0.23058 0.11905-0.05544 0.24786-0.0869 0.37907-0.09256 0.26499-0.01144 0.52367 0.08285 0.71913 0.26214l5.294 4.853 5.323-5.323z"
      />
    </svg>
  )
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE_EXPO }}
      className="relative z-40 w-full pt-[32px] sm:pt-[45px]"
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-[99px]">
        {/* Logo: "Ether", Turret Road 36px Bold */}
        <a href="/" className="group inline-flex items-center">
          <span className="font-[family-name:var(--font-turret)] text-[32px] font-bold tracking-tight text-white transition-opacity duration-300 group-hover:opacity-85 sm:text-[36px]">
            Ether
          </span>
        </a>

        {/* Desktop Navlinks */}
        <nav className="hidden items-center md:flex" aria-label="Main Navigation">
          <ul className="flex items-center gap-6 lg:gap-9">
            {NAV_ITEMS.map((item, idx) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + idx * 0.06, ease: EASE_EXPO }}
              >
                <a
                  href={item.href}
                  className={`group relative inline-flex items-center gap-2 font-[family-name:var(--font-work)] ${item.fontSize} font-normal text-white/80 transition-colors duration-200 hover:text-white`}
                >
                  <span>{item.name}</span>
                  <ChevronIcon />
                  <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white/40 transition-all duration-300 group-hover:w-full" />
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors duration-200 hover:bg-white/10 focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: EASE_EXPO }}
            className="overflow-hidden border-b border-white/10 bg-black/95 backdrop-blur-xl px-6 py-4 md:hidden"
          >
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 font-[family-name:var(--font-work)] text-lg text-white"
                  >
                    <span>{item.name}</span>
                    <ChevronIcon />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
