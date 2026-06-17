'use client'

import { motion } from 'framer-motion'

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

const projects: Project[] = [
  {
    title: 'Sistema de Gestion Comercial',
    description: 'Panel administrativo, inventario, roles, historial de movimientos y autenticacion segura para operaciones comerciales fluidas.',
    problem: 'Empresas necesitan una plataforma que combine control de inventario, roles y reporting administrativo en un solo lugar.',
    solution: 'Construi un dashboard robusto con gestion de productos, control de stock y experiencia de usuario pensada para equipos operativos.',
    tech: ['FastAPI', 'Supabase', 'React'],
    learnings: 'Diseno de flujos administrativos y sincronizacion en tiempo real entre interfaces y datos.',
    repo: '#',
    demo: '#',
    accent: 'purple'
  },
  {
    title: 'Automatizacion de Procesamiento de Datos',
    description: 'Pipeline de limpieza, agrupacion y reportes automaticos con exportacion a Excel para analisis operativo.',
    problem: 'Los datos crudos no eran aprovechados por el equipo por falta de automatizacion y reporte estructurado.',
    solution: 'Implemente procesos de Python que limpian, agrupan por sedes y generan informes listos para entrega.',
    tech: ['Python', 'Pandas', 'OpenPyXL'],
    learnings: 'Optimice la transformacion de datos y el diseno de salidas exportables para stakeholders tecnicos y no tecnicos.',
    repo: '#',
    demo: '#',
    accent: 'blue'
  },
  {
    title: 'API REST Profesional',
    description: 'API con CRUD, autenticacion, roles y documentacion automatica para integraciones empresariales confiables.',
    problem: 'Las integraciones internas requerian una API estandar, segura y facil de consumir para distintos clientes.',
    solution: 'Desarrolle una API REST con control de acceso, modelos claros y documentacion listos para consumo.',
    tech: ['Python', 'FastAPI', 'PostgreSQL'],
    learnings: 'Asegure consistencia entre modelos, endpoints y documentacion para acelerar adopcion tecnica.',
    repo: '#',
    demo: '#',
    accent: 'cyan'
  },
  {
    title: 'AI Business Assistant',
    description: 'Asistente inteligente para documentos y procesos internos con flujo de preguntas, base de conocimiento y modelos LLM.',
    problem: 'Necesitaban una herramienta que respondiera procesos internos y documentos sin depender de consultas manuales constantes.',
    solution: 'Cree una experiencia de asistente con IA para respuestas rapidas, documentacion y soporte en decisiones de negocio.',
    tech: ['OpenAI', 'LangChain', 'Python'],
    learnings: 'Disene prompts y flujos de conocimiento que mantienen la intencion del negocio y reducen ruido en las respuestas.',
    repo: '#',
    demo: '#',
    accent: 'pink'
  }
]

const accent: Record<ProjectAccent, string> = {
  purple: 'from-purple-500 to-blue-400',
  blue: 'from-blue-500 to-cyan-400',
  cyan: 'from-cyan-400 to-blue-500',
  pink: 'from-pink-400 to-purple-500'
}

export default function ProjectsGallery() {
  return (
    <section id="projects" className="relative mt-20 space-y-8">
      <div className="cartoon-doodle right-4 top-8 hidden h-16 w-16 rounded-full border-4 border-dashed border-cyan-300/35 lg:block" />
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Galeria de proyectos</p>
          <h2 className="section-title sketch-underline font-semibold text-text">Proyectos como exhibiciones ilustradas</h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
          Cada proyecto es una pieza visual con color, contexto y un sentido de estudio creativo.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, rotate: index % 2 === 0 ? -0.5 : 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: index * 0.06 }}
            className="cartoon-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#08101a]/95 p-8 shadow-soft"
          >
            <div className="absolute left-6 top-6 h-10 w-10 rounded-full bg-white/5 blur-xl" />
            <div className="absolute right-6 top-12 h-14 w-14 rounded-full bg-cyan-400/10 blur-2xl" />
            <div className={`absolute -top-4 right-4 h-20 w-20 rounded-full bg-gradient-to-br ${accent[project.accent]} opacity-20 blur-3xl`} />

            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-muted">Proyecto</p>
                <h3 className="mt-2 font-['Baloo_2'] text-3xl font-semibold text-text">{project.title}</h3>
              </div>
              <span className="sticker rounded-3xl px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
                {project.accent}
              </span>
            </div>

            <p className="mt-5 text-sm leading-7 text-muted">{project.description}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border-2 border-cyan-300/15 bg-[#0b1724]/95 p-5 shadow-glow">
                <p className="text-sm font-semibold text-text">Problema</p>
                <p className="mt-3 text-sm leading-6 text-muted">{project.problem}</p>
              </div>
              <div className="rounded-[1.75rem] border-2 border-pink-300/15 bg-[#0b1724]/95 p-5 shadow-glow">
                <p className="text-sm font-semibold text-text">Solucion</p>
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

            <p className="mt-6 text-sm leading-7 text-muted">Aprendizajes: {project.learnings}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={project.repo} className="btn-soft inline-flex items-center justify-center text-sm font-semibold">
                Ver repositorio
              </a>
              <a href={project.demo} className="btn-neon inline-flex items-center justify-center text-sm font-semibold">
                Ver demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
