'use client'

import { motion } from 'framer-motion'

const highlights = ['Python', 'React', 'Supabase', 'IA', 'FastAPI', 'Next.js']

export default function HeroSection() {
  return (
    <section className="cartoon-world relative overflow-hidden rounded-[2rem] border-2 border-white/10 bg-[#09111f]/80 p-6 shadow-[0_18px_70px_rgba(34,211,238,0.12)]">
      <div className="absolute left-10 top-8 z-10">
        <img src="/illustrations/doodle-star.svg" className="h-10 w-10 doodle-star floating" alt="star" />
      </div>
      <div className="cartoon-doodle cartoon-bolt right-10 top-14 hidden rotate-12 sm:block">!</div>
      <div className="cartoon-doodle bottom-8 left-1/2 hidden h-16 w-16 rounded-full border-4 border-dashed border-pink-300/40 sm:block" />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative z-10 space-y-6">
          <div className="sticker-title text-sm text-accent/80">Hola! soy</div>
          <h1 className="font-['Baloo_2'] text-5xl font-extrabold leading-tight drop-shadow-[0_8px_0_rgba(139,92,246,0.14)] sm:text-6xl">
            Sebastián <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-300 bg-clip-text text-transparent">López</span>
          </h1>
          <div className="inline-block sticker">Software Developer & AI Product Builder</div>

          <p className="mt-3 max-w-lg text-base leading-7 text-muted">
            Diseño y desarrollo aplicaciones web modernas utilizando Python, React, Supabase e Inteligencia Artificial para construir productos funcionales, escalables y atractivos.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="btn-neon inline-flex items-center gap-3 text-sm font-semibold">
              Ver proyectos
            </a>
            <a href="#contact" className="btn-soft inline-flex items-center gap-3 text-sm font-semibold">Contactarme</a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {highlights.map((h) => (
              <span key={h} className="rounded-full border border-cyan-300/20 bg-[#0E1A2B] px-3 py-1 text-xs font-semibold text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.08)]">
                {h}
              </span>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative flex items-center justify-center">
          <div className="relative w-full max-w-[520px]">
            <div className="glass-card neon rounded-[2rem] p-4">
              <div className="flex items-start gap-4">
                <img src="/illustrations/avatar.svg" alt="avatar" className="h-28 w-28 rounded-3xl avatar-ring" />
                <div className="flex-1">
                  <div className="sticker-title text-sm font-semibold">Estudio creativo</div>
                  <div className="mt-2 text-xs text-muted">Monitores, robot IA y notas adhesivas</div>
                </div>
              </div>

              <div className="mt-4 rounded-[1.5rem] border border-cyan-300/15 bg-[#07121a] p-3 shadow-[inset_0_0_30px_rgba(34,211,238,0.08)]">
                <img src="/illustrations/robot.svg" alt="robot" className="w-full" />
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 animate-[spin_18s_linear_infinite] opacity-70">
              <img src="/illustrations/doodle-star.svg" alt="d" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
