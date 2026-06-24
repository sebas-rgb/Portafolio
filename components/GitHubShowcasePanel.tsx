'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useLocale } from './useLocale'

type GitHubProfile = {
  login: string
  name: string | null
  bio: string | null
  followers: number
  following: number
  public_repos: number
  html_url: string
}

type Repo = {
  id: number
  name: string
  description: string | null
  language: string | null
  updated_at: string
  stargazers_count: number
  forks_count: number
  html_url: string
  homepage: string | null
}

type ActiveTab = 'readme' | 'live' | 'details'

const ui = {
  es: {
    selectRepoReadme: 'Selecciona un repositorio para ver su README.',
    selectRepoDemo: 'Selecciona un repositorio para ver su demo.',
    selectRepoDetails: 'Selecciona un repositorio para ver sus detalles.',
    loadingReadme: 'Cargando README real desde GitHub...',
    readmeError: 'No se pudo cargar el README de este repositorio.',
    readmeErrorHelp: 'Puedes abrir el repositorio en GitHub para revisar el contenido directamente.',
    noReadme: 'Este repositorio aun no tiene README disponible.',
    noDemo: 'Este proyecto aun no tiene una demo publica disponible.',
    noDemoHelp: 'Si existe una demo, agregala en repoLiveUrls dentro de este componente.',
    openNewTab: 'Abrir en nueva pestana',
    iframeBlocked: 'Este sitio no permite ser mostrado embebido.',
    iframeBlockedHelp: 'Puedes abrirlo en una nueva pestana para verlo completo.',
    language: 'Lenguaje',
    unspecified: 'No especificado',
    stars: 'Estrellas',
    forks: 'Forks',
    updated: 'Ultima actualizacion',
    publicDemo: 'Demo publica',
    unavailable: 'No disponible',
    openRepo: 'Abrir repositorio en GitHub',
    noLanguage: 'Sin lenguaje principal',
    publicRepo: 'Repositorio publico de GitHub.',
    updatedShort: 'Actualizado',
    select: 'Seleccionar',
    openGithub: 'Abrir GitHub',
    close: 'Cerrar',
    loadingGithub: 'Cargando perfil y repositorios...',
    githubError: 'No se pudo cargar la informacion de GitHub.',
    githubErrorHelp: 'Revisa tu conexion o intenta abrir GitHub directamente.',
    technologies: 'Tecnologias mas usadas',
    noData: 'Sin datos todavia',
    selected: 'Seleccionado',
    demoDetected: 'Demo publica detectada.',
    noDemoDetected: 'Sin demo publica detectada.',
    repos: 'Repositorios',
    repoHelp: 'Selecciona uno para ver README, demo o detalles.',
    noRepos: 'No hay repositorios publicos para mostrar.',
    details: 'Detalles',
    live: 'Vista en vivo'
  },
  en: {
    selectRepoReadme: 'Select a repository to view its README.',
    selectRepoDemo: 'Select a repository to view its demo.',
    selectRepoDetails: 'Select a repository to view its details.',
    loadingReadme: 'Loading the real README from GitHub...',
    readmeError: 'Could not load this repository README.',
    readmeErrorHelp: 'You can open the repository on GitHub to review the content directly.',
    noReadme: 'This repository does not have an available README yet.',
    noDemo: 'This project does not have a public demo available yet.',
    noDemoHelp: 'If a demo exists, add it to repoLiveUrls inside this component.',
    openNewTab: 'Open in new tab',
    iframeBlocked: 'This site cannot be displayed inside an iframe.',
    iframeBlockedHelp: 'You can open it in a new tab to view it fully.',
    language: 'Language',
    unspecified: 'Not specified',
    stars: 'Stars',
    forks: 'Forks',
    updated: 'Last updated',
    publicDemo: 'Public demo',
    unavailable: 'Unavailable',
    openRepo: 'Open repository on GitHub',
    noLanguage: 'No main language',
    publicRepo: 'Public GitHub repository.',
    updatedShort: 'Updated',
    select: 'Select',
    openGithub: 'Open GitHub',
    close: 'Close',
    loadingGithub: 'Loading profile and repositories...',
    githubError: 'Could not load GitHub information.',
    githubErrorHelp: 'Check your connection or try opening GitHub directly.',
    technologies: 'Most used technologies',
    noData: 'No data yet',
    selected: 'Selected',
    demoDetected: 'Public demo detected.',
    noDemoDetected: 'No public demo detected.',
    repos: 'Repositories',
    repoHelp: 'Select one to view README, demo, or details.',
    noRepos: 'There are no public repositories to show.',
    details: 'Details',
    live: 'Live preview'
  }
}

const repoLiveUrls: Record<string, string> = {
  // Agrega aqui URLs manuales cuando GitHub no tenga homepage configurado.
  // 'nombre-del-repo': 'https://demo-publica.com',
}

function isValidUrl(value?: string | null) {
  if (!value) return false

  try {
    const url = new URL(value)
    return url.protocol === 'https:' || url.protocol === 'http:'
  } catch {
    return false
  }
}

function getDemoUrl(repo: Repo | null) {
  if (!repo) return null

  if (isValidUrl(repo.homepage)) {
    return repo.homepage
  }

  const manualUrl = repoLiveUrls[repo.name]
  return isValidUrl(manualUrl) ? manualUrl : null
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('es-CO', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date))
}

function LoadingState({ label }: { label: string }) {
  return (
    <div className="flex min-h-[180px] items-center justify-center rounded-2xl border border-cyan-300/10 bg-white/[0.03] p-6">
      <div className="w-full max-w-sm">
        <div className="mb-4 text-center text-sm font-semibold text-cyan-100">{label}</div>
        <div className="h-3 animate-pulse rounded-full bg-gradient-to-r from-cyan-300 to-purple-500" />
      </div>
    </div>
  )
}

function EmptyState({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-dashed border-cyan-300/20 bg-[#081226] p-8 text-center">
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-300/30 bg-purple-500/10 text-2xl text-cyan-100">
        ?
      </div>
      <div className="text-base font-semibold text-white">{title}</div>
      {children ? <div className="mt-2 max-w-xl text-sm leading-6 text-gray-300">{children}</div> : null}
    </div>
  )
}

function RepoReadmeViewer({
  owner,
  repo,
}: {
  owner: string
  repo: Repo | null
}) {
  const locale = useLocale()
  const t = ui[locale]
  const [readme, setReadme] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [empty, setEmpty] = useState(false)

  useEffect(() => {
    if (!repo) return

    let mounted = true
    const repoName = repo.name

    async function loadReadme() {
      setLoading(true)
      setError(null)
      setEmpty(false)
      setReadme(null)

      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repoName}/contents/README.md`, {
          headers: {
            Accept: 'application/vnd.github.raw',
          },
        })

        if (response.status === 404) {
          if (mounted) setEmpty(true)
          return
        }

        if (!response.ok) {
          throw new Error(`README fetch ${response.status}`)
        }

        const markdown = await response.text()
        if (mounted) {
          setReadme(markdown.trim() ? markdown : null)
          setEmpty(!markdown.trim())
        }
      } catch {
        if (mounted) setError(t.readmeError)
      } finally {
        if (mounted) setLoading(false)
      }
    }

    loadReadme()

    return () => {
      mounted = false
    }
  }, [owner, repo, t.readmeError])

  if (!repo) {
    return <EmptyState title={t.selectRepoReadme} />
  }

  if (loading) {
    return <LoadingState label={t.loadingReadme} />
  }

  if (error) {
    return <EmptyState title={error}>{t.readmeErrorHelp}</EmptyState>
  }

  if (empty || !readme) {
    return <EmptyState title={t.noReadme} />
  }

  return (
    <motion.div
      key={repo.name}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="rounded-2xl border border-cyan-300/15 bg-[#081226] p-5 shadow-[0_0_34px_rgba(34,211,238,0.08)]"
    >
      <div className="max-h-[560px] overflow-auto pr-2">
        <ReactMarkdown remarkPlugins={[remarkGfm]} className="github-readme">
          {readme}
        </ReactMarkdown>
      </div>
    </motion.div>
  )
}

function RepoLivePreview({ repo }: { repo: Repo | null }) {
  const locale = useLocale()
  const t = ui[locale]
  const demoUrl = getDemoUrl(repo)
  const [iframeError, setIframeError] = useState(false)

  useEffect(() => {
    setIframeError(false)
  }, [demoUrl])

  if (!repo) {
    return <EmptyState title={t.selectRepoDemo} />
  }

  if (!demoUrl) {
    return (
      <EmptyState title={t.noDemo}>
        {t.noDemoHelp}
      </EmptyState>
    )
  }

  return (
    <motion.div
      key={demoUrl}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="overflow-hidden rounded-2xl border border-cyan-300/25 bg-[#050B16] shadow-[0_16px_34px_rgba(0,0,0,0.22),0_0_20px_rgba(34,211,238,0.08)]"
    >
      <div className="flex flex-col gap-3 border-b border-white/10 bg-[#0B1628] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-orange-300" />
            <span className="h-3 w-3 rounded-full bg-yellow-300" />
            <span className="h-3 w-3 rounded-full bg-cyan-300" />
          </div>
          <div className="min-w-0 truncate rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-cyan-100">
            {demoUrl}
          </div>
        </div>
        <a
          href={demoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-cyan-300 px-4 py-2 text-xs font-bold text-[#071022] transition hover:bg-white"
        >
          {t.openNewTab}
        </a>
      </div>

      {iframeError ? (
        <div className="flex min-h-[500px] items-center justify-center p-8">
          <EmptyState title={t.iframeBlocked}>
            {t.iframeBlockedHelp}
          </EmptyState>
        </div>
      ) : (
        <iframe
          title={`Vista en vivo de ${repo.name}`}
          src={demoUrl}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          loading="lazy"
          onError={() => setIframeError(true)}
          className="h-[420px] w-full bg-white sm:h-[520px] md:h-[620px]"
        />
      )}
    </motion.div>
  )
}

function RepoDetails({ repo }: { repo: Repo | null }) {
  const locale = useLocale()
  const t = ui[locale]
  if (!repo) {
    return <EmptyState title={t.selectRepoDetails} />
  }

  const demoUrl = getDemoUrl(repo)
  const details = [
    [t.language, repo.language || t.unspecified],
    [t.stars, String(repo.stargazers_count)],
    [t.forks, String(repo.forks_count)],
    [t.updated, formatDate(repo.updated_at)],
    [t.publicDemo, demoUrl || t.unavailable],
  ]

  return (
    <motion.div
      key={repo.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="grid gap-3 rounded-2xl border border-purple-300/20 bg-[#081226] p-5 sm:grid-cols-2"
    >
      {details.map(([label, value]) => (
        <div key={label} className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
          <div className="text-xs uppercase tracking-[0.18em] text-cyan-200">{label}</div>
          <div className="mt-2 break-words text-sm font-semibold text-white">{value}</div>
        </div>
      ))}
      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
          className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 to-purple-500 px-5 py-3 text-sm font-bold text-[#071022] transition hover:scale-[1.01]"
      >
        {t.openRepo}
      </a>
    </motion.div>
  )
}

function RepoSelector({
  repos,
  selectedRepo,
  onSelect,
}: {
  repos: Repo[]
  selectedRepo: Repo | null
  onSelect: (repo: Repo) => void
}) {
  const locale = useLocale()
  const t = ui[locale]

  return (
    <div className="grid gap-3 md:grid-cols-2">
      {repos.map((repo) => {
        const isSelected = selectedRepo?.id === repo.id
        const hasDemo = Boolean(getDemoUrl(repo))

        return (
          <motion.button
            key={repo.id}
            type="button"
            onClick={() => onSelect(repo)}
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`group flex min-h-[168px] flex-col justify-between rounded-2xl border p-4 text-left transition ${
              isSelected
                ? 'border-cyan-300 bg-cyan-300/10 shadow-[0_0_28px_rgba(34,211,238,0.16)]'
                : 'border-white/8 bg-[#081226] hover:border-purple-300/40 hover:bg-purple-500/10'
            }`}
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="truncate text-sm font-bold text-white">{repo.name}</div>
                  <div className="mt-1 text-xs text-cyan-200">{repo.language || t.noLanguage}</div>
                </div>
                <div className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-gray-200">
                  * {repo.stargazers_count}
                </div>
              </div>
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-300">{repo.description || t.publicRepo}</p>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs text-gray-400">{t.updatedShort}: {formatDate(repo.updated_at)}</span>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${hasDemo ? 'bg-cyan-300 text-[#071022]' : 'bg-white/5 text-gray-300'}`}>
                {t.select}
              </span>
            </div>
          </motion.button>
        )
      })}
    </div>
  )
}

export default function GitHubShowcasePanel({ username, onClose }: { username: string; onClose: () => void }) {
  const locale = useLocale()
  const t = ui[locale]
  const [profile, setProfile] = useState<GitHubProfile | null>(null)
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null)
  const [activeTab, setActiveTab] = useState<ActiveTab>('readme')

  useEffect(() => {
    let mounted = true

    async function loadGithub() {
      setLoading(true)
      setError(null)

      try {
        const [profileResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`),
        ])

        if (!profileResponse.ok) throw new Error(`Profile fetch ${profileResponse.status}`)
        if (!reposResponse.ok) throw new Error(`Repos fetch ${reposResponse.status}`)

        const profileData = (await profileResponse.json()) as GitHubProfile
        const repoData = (await reposResponse.json()) as Repo[]

        if (mounted) {
          setProfile(profileData)
          setRepos(repoData)
          setSelectedRepo(repoData[0] || null)
        }
      } catch {
        if (mounted) setError(t.githubError)
      } finally {
        if (mounted) setLoading(false)
      }
    }

    loadGithub()

    return () => {
      mounted = false
    }
  }, [username, t.githubError])

  const languages = useMemo(() => {
    return Array.from(new Set(repos.map((repo) => repo.language).filter((language): language is string => Boolean(language))))
  }, [repos])
  const demoUrl = getDemoUrl(selectedRepo)
  const tabs: { id: ActiveTab; label: string }[] = [
    { id: 'readme', label: 'README' },
    { id: 'live', label: t.live },
    { id: 'details', label: t.details },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.45 }}
      className="cartoon-world mt-6 w-full overflow-hidden rounded-[2rem] border-2 border-cyan-300/20 bg-[#0D1324] p-4 shadow-[0_18px_46px_rgba(34,211,238,0.10)] sm:p-6"
    >
      <div className="flex flex-col gap-4 border-b border-white/10 pb-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-white/20 bg-gradient-to-br from-cyan-400 to-purple-500 font-['Baloo_2'] text-3xl font-black text-white shadow-[0_4px_0_rgba(0,0,0,0.22),0_0_18px_rgba(34,211,238,0.12)]">
            {profile?.login ? profile.login[0].toUpperCase() : 'S'}
          </div>
          <div>
            <div className="font-['Baloo_2'] text-2xl font-black text-white sm:text-3xl">GitHub Showcase</div>
            <div className="mt-1 text-sm text-cyan-200">github.com/{username}</div>
            {profile?.bio ? <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-300">{profile.bio}</p> : null}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="btn-neon rounded-full px-4 py-2 text-sm font-bold"
          >
            {t.openGithub}
          </a>
          <button onClick={onClose} className="btn-soft rounded-full px-4 py-2 text-sm font-semibold">
            {t.close}
          </button>
        </div>
      </div>

      {loading ? (
        <div className="mt-6">
          <LoadingState label={t.loadingGithub} />
        </div>
      ) : error ? (
        <div className="mt-6">
          <EmptyState title={error}>{t.githubErrorHelp}</EmptyState>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.45fr)]">
          <aside className="space-y-4">
            {profile ? (
              <div className="cartoon-card rounded-2xl border border-white/10 bg-[#0B1628] p-4">
                <div className="text-lg font-bold text-white">{profile.name || profile.login}</div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs text-gray-300">
                  <div className="rounded-xl bg-white/[0.04] p-3">
                    <div className="text-base font-black text-cyan-100">{profile.followers}</div>
                    followers
                  </div>
                  <div className="rounded-xl bg-white/[0.04] p-3">
                    <div className="text-base font-black text-cyan-100">{profile.following}</div>
                    following
                  </div>
                  <div className="rounded-xl bg-white/[0.04] p-3">
                    <div className="text-base font-black text-cyan-100">{profile.public_repos}</div>
                    repos
                  </div>
                </div>
              </div>
            ) : null}

            <div className="cartoon-card rounded-2xl border border-white/10 bg-[#0B1628] p-4">
              <div className="text-sm font-semibold text-white">{t.technologies}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {languages.length > 0 ? (
                  languages.map((language) => (
                    <span key={language} className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-200">
                      {language}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-gray-400">{t.noData}</span>
                )}
              </div>
            </div>

            {selectedRepo ? (
              <div className="cartoon-card rounded-2xl border border-purple-300/20 bg-purple-500/10 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-cyan-200">{t.selected}</div>
                <div className="mt-2 break-words text-lg font-black text-white">{selectedRepo.name}</div>
                <div className="mt-2 text-sm text-gray-300">{demoUrl ? t.demoDetected : t.noDemoDetected}</div>
              </div>
            ) : null}
          </aside>

          <div className="min-w-0 space-y-5">
            <section>
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-cyan-200">{t.repos}</div>
                  <div className="mt-1 text-sm text-gray-300">{t.repoHelp}</div>
                </div>
              </div>
              {repos.length > 0 ? (
                <RepoSelector
                  repos={repos}
                  selectedRepo={selectedRepo}
                  onSelect={(repo) => {
                    setSelectedRepo(repo)
                    setActiveTab('readme')
                  }}
                />
              ) : (
                <EmptyState title={t.noRepos} />
              )}
            </section>

            <section className="cartoon-card rounded-3xl border border-white/10 bg-[#050B16] p-3 sm:p-4">
              <div className="mb-4 flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                      activeTab === tab.id
                        ? 'sticker bg-cyan-300 text-[#071022] shadow-[0_0_18px_rgba(34,211,238,0.24)]'
                        : 'bg-white/[0.04] text-gray-300 hover:bg-purple-500/20 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeTab === 'readme' ? (
                  <RepoReadmeViewer key="readme" owner={username} repo={selectedRepo} />
                ) : activeTab === 'live' ? (
                  <RepoLivePreview key="live" repo={selectedRepo} />
                ) : (
                  <RepoDetails key="details" repo={selectedRepo} />
                )}
              </AnimatePresence>
            </section>
          </div>
        </div>
      )}
    </motion.div>
  )
}
