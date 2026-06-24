'use client'

import { useEffect, useRef, useState } from 'react'

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4'
const TYPEWRITER_TEXT = 'Diseño y desarrollo aplicaciones web modernas con Python, React, Supabase e Inteligencia Artificial para construir productos funcionales, escalables y atractivos.'
const EMAIL = 'sebaslopez3025@gmail.com'
const SENSITIVITY = 0.8

function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)

    let index = 0
    let intervalId: number | undefined
    const delayId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1
        setDisplayed(text.slice(0, index))

        if (index >= text.length) {
          if (intervalId) window.clearInterval(intervalId)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      window.clearTimeout(delayId)
      if (intervalId) window.clearInterval(intervalId)
    }
  }, [text, speed, startDelay])

  return { displayed, done }
}

function CopyIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="shrink-0">
      <rect x="4" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="2" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

const links = [
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Metodología', href: '#methodology' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
]

const actions = [
  { label: 'Ver proyectos', href: '#projects' },
  { label: 'Mi metodología', href: '#methodology' },
  { label: 'Explorar GitHub', href: '#contact' },
  { label: 'Hablemos de tu idea', href: '#contact' },
]

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const prevXRef = useRef<number | null>(null)
  const targetTimeRef = useRef(0)
  const seekingRef = useRef(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [actionsVisible, setActionsVisible] = useState(false)
  const { displayed, done } = useTypewriter(TYPEWRITER_TEXT)

  useEffect(() => {
    const timer = window.setTimeout(() => setActionsVisible(true), 400)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const clampTime = (value: number) => Math.max(0, Math.min(value, video.duration || 0))

    const seekToTarget = () => {
      if (!video.duration || seekingRef.current) return
      seekingRef.current = true
      video.currentTime = clampTime(targetTimeRef.current)
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (!video.duration) {
        prevXRef.current = event.clientX
        return
      }

      if (prevXRef.current === null) {
        prevXRef.current = event.clientX
        targetTimeRef.current = video.currentTime || 0
        return
      }

      const delta = event.clientX - prevXRef.current
      prevXRef.current = event.clientX
      const offset = (delta / window.innerWidth) * SENSITIVITY * video.duration
      targetTimeRef.current = clampTime(targetTimeRef.current + offset)
      seekToTarget()
    }

    const handleSeeked = () => {
      seekingRef.current = false
      if (Math.abs(video.currentTime - targetTimeRef.current) > 0.035) {
        seekToTarget()
      }
    }

    const handleLoadedMetadata = () => {
      targetTimeRef.current = video.currentTime || 0
    }

    window.addEventListener('mousemove', handleMouseMove)
    video.addEventListener('seeked', handleSeeked)
    video.addEventListener('loadedmetadata', handleLoadedMetadata)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      video.removeEventListener('seeked', handleSeeked)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
    }
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      // Clipboard can be blocked in non-secure contexts; the visible email remains available.
    }
  }

  return (
    <section
      className="relative -mx-4 -mt-6 h-screen overflow-hidden bg-white px-5 pb-12 text-black sm:-mx-6 sm:px-8 md:-mx-10 md:flex md:flex-col md:justify-center md:px-10 md:pb-0 lg:-ml-[18rem]"
    >
      <video
        ref={videoRef}
        className="fixed inset-0 z-0 h-full w-full object-cover object-[70%_center]"
        src={VIDEO_URL}
        muted
        playsInline
        preload="auto"
      />

      <nav className="fixed inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-4 text-black sm:px-8 sm:py-5">
        <a href="#top" className="flex items-center gap-3" aria-label="Sebastián López home">
          <span className="text-[21px] tracking-tight sm:text-[26px]" style={{ fontFamily: 'var(--font-heading)' }}>
            Sebastián López
          </span>
          <span className="select-none text-[25px] tracking-[-0.02em] sm:text-[30px]">*</span>
        </a>

        <div className="hidden items-center text-[23px] md:flex">
          {links.map((link, index) => (
            <span key={link.label}>
              <a href={link.href} className="transition-opacity hover:opacity-60">
                {link.label}
              </a>
              {index < links.length - 1 ? <span>,&nbsp;</span> : null}
            </span>
          ))}
        </div>

        <a href={`mailto:${EMAIL}`} className="hidden text-[23px] underline underline-offset-2 transition-opacity hover:opacity-60 md:block">
          Contactarme
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="relative z-20 flex flex-col gap-[5px] md:hidden"
        >
          <span className={`h-[2px] w-6 bg-black transition duration-300 ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`h-[2px] w-6 bg-black transition duration-300 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`h-[2px] w-6 bg-black transition duration-300 ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </nav>

      <div
        className="fixed inset-0 z-[9] flex flex-col justify-center gap-8 bg-white/95 px-8 text-left backdrop-blur-sm transition-opacity duration-300 md:hidden"
        style={{ opacity: mobileOpen ? 1 : 0, pointerEvents: mobileOpen ? 'auto' : 'none' }}
      >
        {links.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="text-[32px] font-medium text-black">
            {link.label}
          </a>
        ))}
        <a href={`mailto:${EMAIL}`} className="text-[32px] font-medium text-black underline underline-offset-2">
          Contactarme
        </a>
      </div>

      <div className="relative z-[1] flex h-full flex-col justify-end md:justify-center">
        <div className="relative z-10 max-w-xl">
          <div
            className="pointer-events-none mb-5 select-none whitespace-pre-line text-black blur-[4px] sm:mb-6"
            style={{ fontSize: 'clamp(18px, 4vw, 26px)', lineHeight: 1.3, fontWeight: 400 }}
          >
            {'Hola, soy Sebastián López,\nSoftware Developer & AI Product Builder'}
          </div>

          <p
            className="mb-5 min-h-[54px] text-black sm:mb-6"
            style={{ fontSize: 'clamp(18px, 4vw, 26px)', lineHeight: 1.35, fontWeight: 400 }}
          >
            {displayed}
            {!done ? (
              <span
                className="ml-[2px] inline-block h-[1.1em] w-[2px] align-middle bg-black"
                style={{ animation: 'mainframe-blink 1s step-end infinite' }}
              />
            ) : null}
          </p>

          <div
            className="flex flex-wrap gap-y-1 transition duration-400"
            style={{
              opacity: actionsVisible ? 1 : 0,
              transform: actionsVisible ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}
          >
            {actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className="mx-[0.2em] mb-[0.4em] inline-flex whitespace-nowrap rounded-full border border-black/10 bg-white px-4 py-[0.3em] text-[13px] text-black transition-colors duration-200 hover:bg-black hover:text-white sm:px-5 sm:text-[15px]"
              >
                {action.label}
              </a>
            ))}

            <button
              type="button"
              onClick={copyEmail}
              className="mx-[0.2em] mb-[0.4em] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white bg-transparent px-4 py-[0.3em] text-[13px] text-white transition-colors duration-200 hover:bg-white hover:text-black sm:gap-3 sm:px-5 sm:text-[15px]"
            >
              <span>
                Correo: <span className="underline underline-offset-1">{EMAIL}</span>
              </span>
              <CopyIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
