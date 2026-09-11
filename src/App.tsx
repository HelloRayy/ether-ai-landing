import { ReactLenis } from 'lenis/react'
import { BackgroundGlow } from './components/BackgroundGlow'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'

export default function App() {
  return (
    <ReactLenis root>
      <div className="relative min-h-screen w-full overflow-x-clip bg-black text-white antialiased selection:bg-[#6843ec] selection:text-white">
        {/* Ellipse 32 Ambient Glow */}
        <BackgroundGlow />

        {/* Header / Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[99px]">
          <Hero />
        </main>
      </div>
    </ReactLenis>
  )
}




