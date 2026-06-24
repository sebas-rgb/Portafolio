'use client'

import { motion } from 'framer-motion'
import { useLocale } from './useLocale'

type StackAccent = 'purple' | 'cyan' | 'green' | 'yellow' | 'pink'

type StackGroup = {
  category: string
  items: string[]
  accent: StackAccent
}

const stack: StackGroup[] = [
  { category: 'Backend', items: ['Python', 'FastAPI', 'REST APIs'], accent: 'purple' },
  { category: 'Frontend', items: ['React', 'Next.js', 'TailwindCSS'], accent: 'cyan' },
  { category: 'Bases de datos', items: ['PostgreSQL', 'Supabase'], accent: 'green' },
  { category: 'DevOps', items: ['Git', 'Docker', 'Linux'], accent: 'yellow' },
  { category: 'IA', items: ['OpenAI', 'Codex', 'Claude', 'Prompt Engineering', 'AI Workflows'], accent: 'pink' }
]

const accent: Record<StackAccent, string> = {
  purple: 'from-purple-500 to-cyan-400',
  cyan: 'from-cyan-400 to-purple-500',
  green: 'from-emerald-400 to-cyan-400',
  yellow: 'from-yellow-300 to-purple-400',
  pink: 'from-purple-500 to-pink-300'
}

const copy = {
  es: {
    eyebrow: 'Stack tecnológico',
    title: 'Tecnologías estilo estudio',
    description: 'Un arsenal creativo de herramientas y plataformas presentado como tarjetas de exhibición.',
    pieces: 'piezas',
    database: 'Bases de datos',
    ai: 'IA'
  },
  en: {
    eyebrow: 'Technology stack',
    title: 'Studio-style technologies',
    description: 'A creative arsenal of tools and platforms presented as exhibition cards.',
    pieces: 'pieces',
    database: 'Databases',
    ai: 'AI'
  }
}

export default function TechStack() {
  const locale = useLocale()
  const t = copy[locale]
  const translatedStack = stack.map((group) => ({
    ...group,
    category: group.category === 'Bases de datos' ? t.database : group.category === 'IA' ? t.ai : group.category
  }))

  return (
    <section className="mt-20 rounded-[2rem] border border-white/10 bg-[#08111d]/90 p-8 shadow-soft">
      <div className="space-y-6">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">{t.eyebrow}</p>
            <h2 className="section-title font-semibold text-text">{t.title}</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">{t.description}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {translatedStack.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1724]/95 shadow-soft"
            >
              <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-r ${accent[group.accent]} opacity-15`} />
              <div className="absolute right-6 top-8 h-16 w-16 rounded-full bg-white/10 blur-2xl" />
              <div className="relative p-7 pt-10">
                <p className="text-xs uppercase tracking-[0.28em] text-muted">{group.category}</p>
                <h3 className="mt-3 text-2xl font-semibold text-text">{group.category}</h3>

                <div className="mt-6 grid gap-3">
                  {group.items.map((item) => (
                    <span key={item} className="inline-flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text shadow-soft">
                      {item}
                      <span className="ml-3 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-muted">
                    Studio kit
                  </span>
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-cyan-200">
                    {group.items.length} {t.pieces}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
