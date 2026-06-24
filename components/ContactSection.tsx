'use client'

import { useState } from 'react'
import ContactCard from './ContactCard'
import GitHubShowcasePanel from './GitHubShowcasePanel'
import LinkedInShowcasePanel from './LinkedInShowcasePanel'
import EmailPanel from './EmailPanel'
import WhatsAppPanel from './WhatsAppPanel'
import DoodleDecorations from './DoodleDecorations'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocale } from './useLocale'

const copy = {
  es: {
    eyebrow: 'CONTACTO',
    title: 'Trabajemos juntos',
    description: 'Si quieres convertir una idea en un producto digital sólido, escalable y con IA integrada, hablemos.',
    cta: 'Trabajemos juntos',
    contacts: [
      { id: 'github', label: 'GitHub', value: 'github.com/sebas-rgb', description: 'Explora mis repositorios, proyectos y actividad técnica.', color: '#8B5CF6' },
      { id: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/sebastian-lopez-alvarez-41b199185', description: 'Mi perfil profesional y experiencia.', color: '#3B82F6' },
      { id: 'email', label: 'Correo', value: 'sebaslopez3025@gmail.com', description: 'Envíame un correo para hablar sobre tu proyecto.', color: '#F472B6' },
      { id: 'whatsapp', label: 'WhatsApp', value: '+57 322 516 2352', description: 'Chat rápido y coordinación por WhatsApp.', color: '#34D399' }
    ]
  },
  en: {
    eyebrow: 'CONTACT',
    title: 'Let’s work together',
    description: 'If you want to turn an idea into a solid, scalable digital product with integrated AI, let’s talk.',
    cta: 'Let’s work together',
    contacts: [
      { id: 'github', label: 'GitHub', value: 'github.com/sebas-rgb', description: 'Explore my repositories, projects, and technical activity.', color: '#8B5CF6' },
      { id: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/sebastian-lopez-alvarez-41b199185', description: 'My professional profile and experience.', color: '#3B82F6' },
      { id: 'email', label: 'Email', value: 'sebaslopez3025@gmail.com', description: 'Send me an email to talk about your project.', color: '#F472B6' },
      { id: 'whatsapp', label: 'WhatsApp', value: '+57 322 516 2352', description: 'Quick chat and coordination through WhatsApp.', color: '#34D399' }
    ]
  }
}

export default function ContactSection() {
  const [activeContact, setActiveContact] = useState<string | null>(null)
  const locale = useLocale()
  const t = copy[locale]

  return (
    <section id="contact" className="cartoon-world relative mt-16 w-full rounded-[2rem] border-2 border-white/10 bg-[#070A12] p-8 shadow-[0_16px_42px_rgba(34,211,238,0.08)]">
      <DoodleDecorations />

      <header className="mx-auto max-w-5xl text-center">
        <p className="text-sm uppercase tracking-widest text-cyan-200">{t.eyebrow}</p>
        <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="section-title sketch-underline mx-auto mt-3 w-fit text-4xl font-extrabold text-white">
          {t.title}
        </motion.h2>
        <div className="mx-auto mt-2 max-w-2xl text-center text-base text-gray-300">{t.description}</div>
        <div className="mt-5 flex items-center justify-center">
          <a href="mailto:sebaslopez3025@gmail.com" className="btn-neon rounded-full px-6 py-3 text-sm font-semibold">{t.cta}</a>
        </div>
      </header>

      <div className="mx-auto mt-8 max-w-5xl">
        <div className="grid gap-4 lg:grid-cols-4">
          {t.contacts.map((c) => (
            <ContactCard key={c.id} id={c.id} label={c.label} value={c.value} description={c.description} color={c.color} onClick={(id) => setActiveContact(id)} />
          ))}
        </div>

        <AnimatePresence>
          {activeContact === 'github' && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45 }}>
              <GitHubShowcasePanel username="sebas-rgb" onClose={() => setActiveContact(null)} />
            </motion.div>
          )}

          {activeContact === 'linkedin' && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45 }}>
              <LinkedInShowcasePanel profile={{ name: 'Sebastián López', url: 'https://www.linkedin.com/in/sebastian-lopez-alvarez-41b199185' }} onClose={() => setActiveContact(null)} />
            </motion.div>
          )}

          {activeContact === 'email' && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45 }}>
              <EmailPanel email="sebaslopez3025@gmail.com" />
            </motion.div>
          )}

          {activeContact === 'whatsapp' && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45 }}>
              <WhatsAppPanel number="+57 322 516 2352" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
