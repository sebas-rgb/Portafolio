'use client'

import { useState } from 'react'

const links = [
  { icon: '🏠', label: 'Inicio', href: '#top' },
  { icon: '📊', label: 'Dashboard', href: '#dashboard' },
  { icon: '🧭', label: 'Metodología', href: '#methodology' },
  { icon: '🤖', label: 'IA & Workflow', href: '#ai' },
  { icon: '🖼️', label: 'Proyectos', href: '#projects' },
  { icon: '🛠️', label: 'Stack', href: '#stack' },
  { icon: '✉️', label: 'Contacto', href: '#contact' }
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/sebas-rgb' },
  { label: 'LinkedIn', href: 'www.linkedin.com/in/sebastian-lopez-alvarez-41b199185' },
  { label: 'Correo', href: 'mailto:hola@sebastianlopez.dev' },
  { label: 'WhatsApp', href: 'https://wa.me/573225162352' }
]

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        aria-label="Abrir menú"
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0d1320]/90 px-4 py-2 text-sm text-text shadow-soft backdrop-blur-md sm:hidden"
      >
        ☰ Menu
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 transform border-r border-white/10 bg-[#08101a] px-6 py-6 shadow-soft transition-transform duration-300 sm:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 overflow-hidden rounded-3xl border-2 border-cyan-400/40 bg-[#0b1220]">
              <img src="/illustrations/avatar.svg" alt="avatar" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-text">Sebastián López</p>
              <p className="text-xs text-muted">AI Product Builder</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="sm:hidden rounded-full border border-white/10 bg-[#0d1320]/90 px-3 py-2 text-xs text-muted transition hover:bg-white/5"
          >
            Cerrar
          </button>
        </div>

        <div className="mt-10 space-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center gap-3 rounded-2xl border border-white/5 bg-[#0f172a]/80 px-4 py-3 text-sm text-muted transition hover:-translate-x-1 hover:border-cyan-400/30 hover:text-text"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#0b1220]/90 text-lg text-cyan-300 group-hover:bg-cyan-400/10">
                {link.icon}
              </span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-[#091525]/90 p-5 text-sm text-muted shadow-glow">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">Disponible</p>
          <p className="mt-3 text-sm font-semibold text-text">¿Tienes una idea? Hagámosla realidad 🚀</p>
        </div>

        <div className="mt-10 space-y-2 border-t border-white/10 pt-6">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-white/5 bg-[#0f172a]/80 px-4 py-3 text-sm text-muted transition hover:border-cyan-400/30 hover:text-text"
            >
              {social.label}
            </a>
          ))}
        </div>
      </aside>
    </>
  )
}
