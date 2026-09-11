interface PartnerLogo {
  id: string
  name: string
  src: string
  width: number
  height: number
}

const PARTNER_LOGOS: PartnerLogo[] = [
  { id: 'logo-2', name: 'Partner 2', src: '/assets/logos/image-2.svg', width: 114, height: 38 },
  { id: 'logo-3', name: 'Partner 3', src: '/assets/logos/image-3.svg', width: 141, height: 37 },
  { id: 'logo-4', name: 'Partner 4', src: '/assets/logos/image-4.svg', width: 124, height: 24 },
  { id: 'logo-5', name: 'Partner 5', src: '/assets/logos/image-5.svg', width: 96, height: 44 },
  { id: 'logo-6', name: 'Partner 6', src: '/assets/logos/image-6.svg', width: 99, height: 31 },
  { id: 'logo-7', name: 'Partner 7', src: '/assets/logos/image-7.svg', width: 106, height: 22 },
  { id: 'logo-8', name: 'Partner 8', src: '/assets/logos/image-8.svg', width: 157, height: 27 },
]

export function ContainerImageLogo() {
  return (
    <section
      aria-label="Partner integrations"
      className="relative mx-auto mt-9 w-full max-w-[1443px] flex flex-col items-center justify-center"
    >
      {/* Label / Heading */}
      <h2 className="font-[family-name:var(--font-darker)] text-[22px] font-semibold leading-[18px] tracking-[0.8px] text-[#6843ec] text-center">
        Powering tools and integrations from companies all around the world
      </h2>

      {/* Logos Strip */}
      <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-8 px-4 sm:gap-10 sm:px-12 xl:flex-nowrap">
        {PARTNER_LOGOS.map((logo) => (
          <div
            key={logo.id}
            className="flex h-[38px] items-center justify-center shrink-0"
            style={{ width: `${logo.width}px` }}
          >
            <img
              src={logo.src}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              loading="lazy"
              className="max-h-full max-w-full object-contain pointer-events-none select-none"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
