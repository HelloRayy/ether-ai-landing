import { ReactLenis } from 'lenis/react'
import { BackgroundGlow } from './components/BackgroundGlow'
import { ContainerCard } from './components/ContainerCard'
import { ContainerImageLogo } from './components/ContainerImageLogo'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { SectionCommunity } from './components/SectionCommunity'
import { SectionImage } from './components/SectionImage'

export default function App() {
  return (
    <ReactLenis root>
      <div className="relative min-h-screen w-full overflow-x-clip bg-black text-white antialiased selection:bg-[#6843ec] selection:text-white">
        {/* Background Atmosphere & Lighting */}
        <BackgroundGlow />

        {/* Header / Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[99px]">
          <Hero />
          <ContainerImageLogo />
          <ContainerCard />
          <SectionCommunity />
          <SectionImage />
        </main>
      </div>
    </ReactLenis>
  )
}




