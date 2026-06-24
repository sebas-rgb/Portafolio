'use client'

import { motion } from 'framer-motion'
import { useLocale } from './useLocale'

type MethodStep = {
  title: string
  description: string
  accent: 'purple' | 'blue' | 'yellow' | 'pink' | 'cyan' | 'green'
}

const content: Record<string, { eyebrow: string; title: string; description: string; flowLabel: string; flow: string; iaNote: string; steps: MethodStep[] }> = {
  es: {
    eyebrow: 'Cómo construyo software',
    title: 'Mi metodología es un recorrido creativo',
    description: 'Mi metodología combina pensamiento estratégico, buenas prácticas de desarrollo y el poder de la IA para construir productos de alto valor.',
    flowLabel: 'Flujo de trabajo',
    flow: 'Idea - Arquitectura - Deploy',
    iaNote: 'IA acelera tareas repetitivas con control técnico.',
    steps: [
      { title: 'Idea', description: 'Identifico oportunidades y problemas reales.', accent: 'purple' },
      { title: 'Análisis', description: 'Entiendo al usuario, los objetivos y el contexto.', accent: 'blue' },
      { title: 'Arquitectura', description: 'Diseño la solución, modelos y flujos.', accent: 'yellow' },
      { title: 'Tecnologías', description: 'Selecciono las mejores herramientas para el proyecto.', accent: 'pink' },
      { title: 'IA + Implementación', description: 'Uso IA para acelerar el desarrollo sin perder control.', accent: 'cyan' },
      { title: 'Validación', description: 'Pruebas, ajustes y calidad antes del lanzamiento.', accent: 'green' },
      { title: 'Deploy', description: 'Llevo el producto a producción con estabilidad.', accent: 'blue' }
    ]
  },
  en: {
    eyebrow: 'How I build software',
    title: 'My methodology is a creative path',
    description: 'My methodology blends strategic thinking, solid engineering practices, and AI-powered productivity to build high-value products.',
    flowLabel: 'Workflow',
    flow: 'Idea - Architecture - Deploy',
    iaNote: 'AI accelerates repetitive tasks with technical control.',
    steps: [
      { title: 'Idea', description: 'I identify real opportunities and problems.', accent: 'purple' },
      { title: 'Analysis', description: 'I understand the user, goals, and context.', accent: 'blue' },
      { title: 'Architecture', description: 'I design the solution, models, and flows.', accent: 'yellow' },
      { title: 'Technologies', description: 'I choose the best tools for the project.', accent: 'pink' },
      { title: 'AI + Implementation', description: 'I use AI to speed up development while keeping control.', accent: 'cyan' },
      { title: 'Validation', description: 'Testing, iteration, and quality before launch.', accent: 'green' },
      { title: 'Deploy', description: 'I ship the product to production with stability.', accent: 'blue' }
    ]
  }
}

const accentClasses: Record<MethodStep['accent'], string> = {
  purple: 'border-purple-400/40 bg-purple-500/10 text-purple-200',
  blue: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-200',
  yellow: 'border-yellow-400/35 bg-yellow-400/10 text-yellow-200',
  pink: 'border-purple-400/30 bg-purple-500/10 text-purple-200',
  cyan: 'border-cyan-400/40 bg-cyan-400/10 text-cyan-200',
  green: 'border-green-400/40 bg-green-400/10 text-green-200'
}

export default function Methodology() {
  const locale = useLocale()
  const t = content[locale]

  return (
    <section className="cartoon-world mt-20 rounded-[2rem] border-2 border-white/10 bg-[#0d1223]/80 p-8 shadow-soft">
      <div className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">{t.eyebrow}</p>
            <h2 className="section-title sketch-underline font-semibold text-text">{t.title}</h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-muted">{t.description}</p>
          </div>
          <div className="sticker relative rounded-3xl p-4 shadow-glow">
            <span className="handwritten text-sm text-[#071022]">{t.flowLabel}</span>
            <p className="mt-2 text-xl font-semibold text-[#071022]">{t.flow}</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border-2 border-white/10 bg-[#08111f]/80 p-6 shadow-soft">
          <div className="absolute right-6 top-4 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute left-4 bottom-12 h-28 w-28 rounded-full bg-purple-400/10 blur-3xl" />
          <div className="cartoon-doodle right-12 top-10 h-12 w-12 rotate-12 rounded-full border-4 border-dashed border-yellow-300/35" />

          <div className="grid gap-5 lg:grid-cols-3">
            {t.steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, rotate: index % 2 === 0 ? -0.4 : 0.4 }}
                transition={{ delay: index * 0.06, duration: 0.55 }}
                className={`cartoon-card relative overflow-hidden rounded-[2rem] border-2 ${accentClasses[step.accent]} p-5 shadow-soft backdrop-blur-sm`}
              >
                <span className="absolute right-4 top-4 font-['Baloo_2'] text-5xl opacity-20">{index + 1}</span>
                <div className="flex items-center gap-3">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border-2 font-['Baloo_2'] text-lg ${accentClasses[step.accent]}`}>
                    {step.title[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">{step.title}</p>
                    <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
                  </div>
                </div>
                <div className="mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-yellow-300 to-purple-400" />
                <div className="mt-4 text-sm text-muted">{index === 4 ? t.iaNote : ''}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
