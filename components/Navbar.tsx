'use client'

const links = [
  { label: 'Inicio', href: '#top' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Metodología', href: '#methodology' },
  { label: 'IA', href: '#ai' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' }
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 sm:px-10">
        <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text/90">Sebastián López</div>
        <nav className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-muted transition hover:text-text">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
