'use client'

import { motion } from 'framer-motion'
import { useLocale } from './useLocale'

const copy = {
  es: {
    eyebrow: 'Dashboard personal',
    title: 'Control visual de mi impacto',
    description: 'Métricas orientadas a productos, experiencia técnica e impacto. La experiencia no se resume en líneas de código, sino en lo que se construye, se valida y se despliega.',
    caption: 'Impacto y productos',
    metrics: [
      { label: 'Proyectos desarrollados', value: '12+', accent: 'purple', spark: [2, 4, 3, 5, 6] },
      { label: 'Productos construidos', value: '8', accent: 'yellow', spark: [1, 2, 2, 3, 2] },
      { label: 'Tecnologías utilizadas', value: '18', accent: 'cyan', spark: [3, 5, 4, 6, 7] },
      { label: 'Workflows con IA', value: '15+', accent: 'pink', spark: [2, 3, 5, 7, 6] },
      { label: 'Repositorios activos', value: '15', accent: 'green', spark: [1, 3, 2, 4, 3] },
      { label: 'APIs diseñadas', value: '23+', accent: 'blue', spark: [4, 5, 6, 5, 7] }
    ]
  },
  en: {
    eyebrow: 'Personal dashboard',
    title: 'A visual snapshot of my impact',
    description: 'Metrics focused on products, technical experience, and impact. Experience is not just code, it is what gets built, validated, and shipped.',
    caption: 'Impact and products',
    metrics: [
      { label: 'Projects developed', value: '12+', accent: 'purple', spark: [2, 4, 3, 5, 6] },
      { label: 'Products built', value: '8', accent: 'yellow', spark: [1, 2, 2, 3, 2] },
      { label: 'Technologies used', value: '18', accent: 'cyan', spark: [3, 5, 4, 6, 7] },
      { label: 'AI workflows', value: '15+', accent: 'pink', spark: [2, 3, 5, 7, 6] },
      { label: 'Active repositories', value: '15', accent: 'green', spark: [1, 3, 2, 4, 3] },
      { label: 'APIs designed', value: '23+', accent: 'blue', spark: [4, 5, 6, 5, 7] }
    ]
  }
}

export default function PersonalDashboard() {
  const locale = useLocale()
  const t = copy[locale]

  return (
    <section className="relative mt-16 space-y-8">
      <div className="cartoon-doodle -left-4 top-16 hidden h-14 w-14 rounded-full border-4 border-dashed border-yellow-300/35 lg:block" />

      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-accent/70">{t.eyebrow}</p>
          <h2 className="section-title sketch-underline font-semibold text-text">{t.title}</h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">{t.description}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {t.metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, rotate: index % 2 === 0 ? -0.35 : 0.35, scale: 1.01 }}
            transition={{ delay: index * 0.06, duration: 0.6 }}
            className="cartoon-card glass-card rounded-[1.8rem] p-5 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">{metric.label}</p>
              <div className={`flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 font-['Baloo_2'] text-lg shadow-[0_3px_0_rgba(0,0,0,0.2)] ${metric.accent === 'yellow' ? 'bg-yellow-400/10 text-yellow-200' : 'bg-cyan-400/10 text-cyan-200'}`}>*</div>
            </div>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="font-['Baloo_2'] text-4xl font-extrabold text-white drop-shadow-[0_0_18px_rgba(34,211,238,0.12)]">{metric.value}</p>
                <p className="mt-1 text-xs text-muted">{t.caption}</p>
              </div>
              <div className="small-chart">
                <svg viewBox="0 0 60 30" className="h-6 w-24">
                  <polyline
                    fill="none"
                    stroke={metric.accent === 'purple' ? '#8B5CF6' : metric.accent === 'yellow' ? '#FBBF24' : metric.accent === 'cyan' ? '#22D3EE' : metric.accent === 'pink' ? '#F472B6' : metric.accent === 'green' ? '#34D399' : '#3B82F6'}
                    strokeWidth="3"
                    points={metric.spark.map((v, i) => `${i * 12},${30 - v * 3}`).join(' ')}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
