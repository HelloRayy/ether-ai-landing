import React from 'react'
import { motion } from 'motion/react'
import { MotionReveal, EASE_EXPO } from './motion/MotionReveal'

interface SocialIcon {
  name: string
  href: string
  icon: React.ReactNode
}

const socialLinks: SocialIcon[] = [
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    href: 'https://twitter.com',
    icon: (
      <svg className="h-2.5 w-2.5 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Discord',
    href: 'https://discord.com',
    icon: (
      <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    name: 'Reddit',
    href: 'https://reddit.com',
    icon: (
      <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'Telegram',
    href: 'https://telegram.org',
    icon: (
      <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
]

const etherLinks = [
  { label: 'Grants', href: '#grants' },
  { label: 'Generator', href: '#generator' },
  { label: 'Careers', href: '#careers' },
  { label: 'Disclaimer', href: '#disclaimer' },
]

const connectedLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Newsletter', href: '#newsletter' },
]

export function Footer() {
  return (
    <footer
      aria-label="Site Footer"
      className="relative z-10 w-full rounded-t-[12px] border-t border-[#141414] bg-[#0f0f0f] pt-20 pb-16 text-white"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-12 px-6 sm:px-10 md:flex-row md:items-start lg:px-[99px]">
        {/* Left Column: Brand & Socials with Viewport Entrance */}
        <MotionReveal yOffset={30} duration={0.8} className="flex flex-col gap-2">
          <span className="font-[family-name:var(--font-turret)] text-[36px] font-bold leading-tight tracking-wider text-white">
            Ether
          </span>
          <p className="font-[family-name:var(--font-work)] text-[16px] font-normal leading-relaxed text-white">
            Managed by Artificial Intelligence
          </p>

          {/* Social Icons Row with Spring Hover */}
          <div className="mt-4 flex items-center gap-2.5">
            {socialLinks.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: EASE_EXPO }}
                className="group flex h-[16px] w-[26px] items-center justify-center rounded-full bg-[#848895] text-black transition-colors duration-200 hover:bg-white"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </MotionReveal>

        {/* Right Navigation Columns with Choreographed Stagger */}
        <div className="flex gap-16 sm:gap-24">
          {/* Column 1: Ether */}
          <MotionReveal delay={0.15} yOffset={25} duration={0.7} className="flex flex-col">
            <h4 className="font-[family-name:var(--font-darker)] text-[18px] font-bold tracking-wider text-white uppercase">
              Ether
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {etherLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-work)] text-[15px] font-normal text-[#848895] transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </MotionReveal>

          {/* Column 2: Get Connected */}
          <MotionReveal delay={0.25} yOffset={25} duration={0.7} className="flex flex-col">
            <h4 className="font-[family-name:var(--font-darker)] text-[18px] font-bold tracking-wider text-white uppercase">
              Get Connected
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {connectedLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-work)] text-[15px] font-normal text-[#848895] transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </MotionReveal>
        </div>
      </div>

      {/* Subtle Bottom Divider & Copyright */}
      <MotionReveal delay={0.35} yOffset={15} duration={0.6} className="mx-auto mt-16 max-w-[1440px] border-t border-white/5 px-6 pt-8 sm:px-10 lg:px-[99px]">
        <div className="flex flex-col items-center justify-between gap-4 text-[13px] text-[#555] sm:flex-row">
          <p>© {new Date().getFullYear()} Ether AI. All rights reserved.</p>
          <p className="font-[family-name:var(--font-work)] text-[#444]">
            Engineered for high performance on Solana
          </p>
        </div>
      </MotionReveal>
    </footer>
  )
}
