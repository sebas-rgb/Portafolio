'use client'

import { motion } from 'framer-motion'
import { useLocale } from './useLocale'

type ProjectAccent = 'purple' | 'blue' | 'cyan' | 'pink'

type Project = {
  title: string
  description: string
  problem: string
  solution: string
  tech: string[]
  learnings: string
  repo: string
  demo: string
  accent: ProjectAccent
}

const projects = {
  es: [
    {
      title: 'Sistema de Gestión Comercial',
      description: 'Panel administrativo, inventario, roles, historial de movimientos y autenticación segura para operaciones comerciales fluidas.',
      problem: 'Empresas necesitan una plataforma que combine control de inventario, roles y reporting administrativo en un solo lugar.',
      solution: 'Construí un dashboard robusto con gestión de productos, control de stock y experiencia de usuario pensada para equipos operativos.',
      tech: ['FastAPI', 'Supabase', 'React'],
      learnings: 'Diseño de flujos administrativos y sincronización en tiempo real entre interfaces y datos.',
      repo: '#',
      demo: '#',
      accent: 'purple'
    },
    {
      title: 'Automatización de Procesamiento de Datos',
      description: 'Pipeline de limpieza, agrupación y reportes automáticos con exportación a Excel para análisis operativo.',
      problem: 'Los datos crudos no eran aprovechados por el equipo por falta de automatización y reporte estructurado.',
      solution: 'Implementé procesos de Python que limpian, agrupan por sedes y generan informes listos para entrega.',
      tech: ['Python', 'Pandas', 'OpenPyXL'],
      learnings: 'Optimicé la transformación de datos y el diseño de salidas exportables para stakeholders técnicos y no técnicos.',
      repo: '#',
      demo: '#',
      accent: 'blue'
    },
    {
      title: 'API REST Profesional',
      description: 'API con CRUD, autenticación, roles y documentación automática para integraciones empresariales confiables.',
      problem: 'Las integraciones internas requerían una API estándar, segura y fácil de consumir para distintos clientes.',
      solution: 'Desarrollé una API REST con control de acceso, modelos claros y documentación listos para consumo.',
      tech: ['Python', 'FastAPI', 'PostgreSQL'],
      learnings: 'Aseguré consistencia entre modelos, endpoints y documentación para acelerar adopción técnica.',
      repo: '#',
      demo: '#',
      accent: 'cyan'
    },
    {
      title: 'AI Business Assistant',
      description: 'Asistente inteligente para documentos y procesos internos con flujo de preguntas, base de conocimiento y modelos LLM.',
      problem: 'Necesitaban una herramienta que respondiera procesos internos y documentos sin depender de consultas manuales constantes.',
      solution: 'Creé una experiencia de asistente con IA para respuestas rápidas, documentación y soporte en decisiones de negocio.',
      tech: ['OpenAI', 'LangChain', 'Python'],
      learnings: 'Diseñé prompts y flujos de conocimiento que mantienen la intención del negocio y reducen ruido en las respuestas.',
      repo: '#',
      demo: '#',
      accent: 'pink'
    }
  ] satisfies Project[],
  en: [
    {
      title: 'Commercial Management System',
      description: 'Admin dashboard, inventory, roles, movement history, and secure authentication for smooth business operations.',
      problem: 'Companies need a platform that combines inventory control, roles, and admin reporting in one place.',
      solution: 'I built a robust dashboard with product management, stock control, and a user experience designed for operational teams.',
      tech: ['FastAPI', 'Supabase', 'React'],
      learnings: 'Administrative flow design and real-time synchronization between interfaces and data.',
      repo: '#',
      demo: '#',
      accent: 'purple'
    },
    {
      title: 'Data Processing Automation',
      description: 'Cleaning, grouping, and automatic reporting pipeline with Excel export for operational analysis.',
      problem: 'Raw data was not being used effectively because the team lacked automation and structured reporting.',
      solution: 'I implemented Python processes that clean, group by branches, and generate delivery-ready reports.',
      tech: ['Python', 'Pandas', 'OpenPyXL'],
      learnings: 'I optimized data transformation and exportable outputs for both technical and non-technical stakeholders.',
      repo: '#',
      demo: '#',
      accent: 'blue'
    },
    {
      title: 'Professional REST API',
      description: 'API with CRUD, authentication, roles, and automatic documentation for reliable business integrations.',
      problem: 'Internal integrations required a standard, secure, and easy-to-consume API for different clients.',
      solution: 'I developed a REST API with access control, clear models, and documentation ready for use.',
      tech: ['Python', 'FastAPI', 'PostgreSQL'],
      learnings: 'I ensured consistency between models, endpoints, and documentation to speed up technical adoption.',
      repo: '#',
      demo: '#',
      accent: 'cyan'
    },
    {
      title: 'AI Business Assistant',
      description: 'Smart assistant for documents and internal processes with question flows, knowledge base, and LLM models.',
      problem: 'The team needed a tool that could answer questions about internal processes and documents without constant manual lookup.',
      solution: 'I created an AI assistant experience for fast answers, documentation, and decision support.',
      tech: ['OpenAI', 'LangChain', 'Python'],
      learnings: 'I designed prompts and knowledge flows that preserve business intent and reduce noise in responses.',
      repo: '#',
      demo: '#',
      accent: 'pink'
    }
  ] satisfies Project[]
}

const copy = {
  es: {
    eyebrow: 'Galería de proyectos',
    title: 'Proyectos como exhibiciones ilustradas',
    description: 'Cada proyecto es una pieza visual con color, contexto y un sentido de estudio creativo.',
    project: 'Proyecto',
    problem: 'Problema',
    solution: 'Solución',
    learnings: 'Aprendizajes',
    repo: 'Ver repositorio',
    demo: 'Ver demo'
  },
  en: {
    eyebrow: 'Project gallery',
    title: 'Projects as illustrated showcases',
    description: 'Each project is a visual piece with color, context, and a creative studio feeling.',
    project: 'Project',
    problem: 'Problem',
    solution: 'Solution',
    learnings: 'Learnings',
    repo: 'View repository',
    demo: 'View demo'
  }
}

const accent: Record<ProjectAccent, string> = {
  purple: 'from-purple-500 to-cyan-400',
  blue: 'from-cyan-400 to-purple-500',
  cyan: 'from-cyan-300 to-purple-500',
  pink: 'from-purple-500 to-pink-300'
}

export default function ProjectsGallery() {
  const locale = useLocale()
  const t = copy[locale]
  const visibleProjects = projects[locale]

  return (
    <section id="projects" className="relative mt-20 space-y-8">
      <div className="cartoon-doodle right-4 top-8 hidden h-16 w-16 rounded-full border-4 border-dashed border-cyan-300/35 lg:block" />
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">{t.eyebrow}</p>
          <h2 className="section-title sketch-underline font-semibold text-text">{t.title}</h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">{t.description}</p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, rotate: index % 2 === 0 ? -0.3 : 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: index * 0.06 }}
            className="cartoon-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#08101a]/95 p-8 shadow-soft"
          >
            <div className="absolute left-6 top-6 h-10 w-10 rounded-full bg-white/5 blur-xl" />
            <div className="absolute right-6 top-12 h-14 w-14 rounded-full bg-cyan-400/10 blur-2xl" />
            <div className={`absolute -top-4 right-4 h-20 w-20 rounded-full bg-gradient-to-br ${accent[project.accent]} opacity-20 blur-3xl`} />

            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-muted">{t.project}</p>
                <h3 className="mt-2 font-['Baloo_2'] text-3xl font-semibold text-text">{project.title}</h3>
              </div>
              <span className="sticker rounded-3xl px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
                {project.accent}
              </span>
            </div>

            <p className="mt-5 text-sm leading-7 text-muted">{project.description}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border-2 border-cyan-300/15 bg-[#0b1724]/95 p-5 shadow-glow">
                <p className="text-sm font-semibold text-text">{t.problem}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{project.problem}</p>
              </div>
              <div className="rounded-[1.75rem] border-2 border-pink-300/15 bg-[#0b1724]/95 p-5 shadow-glow">
                <p className="text-sm font-semibold text-text">{t.solution}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{project.solution}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full border border-cyan-300/20 bg-[#0c1525]/90 px-3 py-1 text-xs font-semibold text-cyan-100 shadow-soft">
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-muted">{t.learnings}: {project.learnings}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={project.repo} className="btn-soft inline-flex items-center justify-center text-sm font-semibold">
                {t.repo}
              </a>
              <a href={project.demo} className="btn-neon inline-flex items-center justify-center text-sm font-semibold">
                {t.demo}
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
