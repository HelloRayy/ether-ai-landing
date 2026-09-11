import { ReactLenis } from 'lenis/react'
import { motion } from 'motion/react'
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  const techStack = [
    {
      name: 'React 19',
      desc: 'Modern component architecture & fast state primitives',
      badge: 'Core',
    },
    {
      name: 'Vite 8',
      desc: 'Instant HMR and lightning-fast developer experience',
      badge: 'Bundler',
    },
    {
      name: 'Tailwind CSS v4',
      desc: 'Zero-config CSS engine with modern utility classes',
      badge: 'Styling',
    },
    {
      name: 'Lenis',
      desc: 'Silky smooth momentum scrolling integration',
      badge: 'Scroll',
    },
    {
      name: 'Motion',
      desc: 'Hardware-accelerated animations and gestures',
      badge: 'Animation',
    },
  ]

  return (
    <ReactLenis root>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500 selection:text-white">
        {/* Header / Hero */}
        <header className="relative overflow-hidden border-b border-zinc-800/80 px-6 py-20 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto max-w-3xl space-y-4"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
              Stack Initialized
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              Ether AI Image
            </h1>

            <p className="mx-auto max-w-xl text-base text-zinc-400 sm:text-lg">
              React 19 + Vite + Tailwind CSS v4 + Lenis Smooth Scroll + Motion
              ready for production development.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setCount((c) => c + 1)}
                className="cursor-pointer rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
              >
                Interactive Counter: {count}
              </motion.button>
            </div>
          </motion.div>
        </header>

        {/* Tech Stack Cards Grid */}
        <main className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="mb-8 text-xl font-semibold tracking-tight text-zinc-200">
            Active Stack Modules
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                className="group relative rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 backdrop-blur transition-colors hover:border-zinc-700 hover:bg-zinc-900/90"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-zinc-100">
                    {item.name}
                  </h3>
                  <span className="rounded-md bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">
                    {item.badge}
                  </span>
                </div>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Smooth Scroll Demonstration Section */}
          <section className="mt-24 space-y-12">
            <div className="border-t border-zinc-800/80 pt-12 text-center">
              <h3 className="text-lg font-semibold text-zinc-300">
                Lenis Smooth Scroll Demo
              </h3>
              <p className="mt-1 text-sm text-zinc-500">
                Scroll down to experience buttery smooth momentum scrolling.
              </p>
            </div>

            <div className="space-y-6">
              {[1, 2, 3].map((num) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0.4 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-8 text-center text-zinc-400"
                >
                  <p className="text-xs uppercase tracking-widest text-indigo-400">
                    Scroll Viewport Block {num}
                  </p>
                  <p className="mt-2 text-sm text-zinc-500">
                    Lenis normalizes wheel events and animates native scroll
                    position smoothly.
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </ReactLenis>
  )
}

