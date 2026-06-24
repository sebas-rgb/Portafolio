'use client'

import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = {
  owner: string
  repo: string
  path?: string
}

export default function RepoReadmePanel({ owner, repo, path = 'README.md' }: Props) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [readmeContent, setReadmeContent] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    const load = async () => {
      setIsLoading(true)
      setError(null)
      setReadmeContent(null)
      try {
        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`)
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error('NOT_FOUND')
          }
          throw new Error('GitHub API ' + res.status)
        }
        const data = await res.json()
        if (!data.content) throw new Error('NO_CONTENT')
        const decoded = atob(data.content.replace(/\n/g, ''))
        if (mounted) setReadmeContent(decoded)
      } catch (e: any) {
        if (mounted) {
          if (e.message === 'NOT_FOUND') setError('Este repositorio aún no tiene README disponible.')
          else setError('No se pudo cargar el README de este repositorio.')
        }
      } finally {
        if (mounted) setIsLoading(false)
      }
    }
    load()
    return () => {
      mounted = false
    }
  }, [owner, repo, path])

  return (
    <div className="mt-4 rounded-2xl border border-white/5 bg-[#081226] p-6" style={{ minHeight: 240 }}>
      {isLoading ? (
        <div className="flex h-48 items-center justify-center">{/* neon skeleton */}
          <div className="h-6 w-64 animate-pulse rounded bg-gradient-to-r from-purple-600 to-cyan-400/30" />
        </div>
      ) : error ? (
        <div className="flex h-48 flex-col items-center justify-center text-center">
          <div className="text-sm font-semibold text-red-400">{error}</div>
        </div>
      ) : readmeContent ? (
        <div className="max-h-[520px] overflow-auto prose prose-invert px-1" style={{ scrollBehavior: 'smooth' }}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{readmeContent}</ReactMarkdown>
        </div>
      ) : (
        <div className="flex h-48 items-center justify-center text-gray-400">Sin contenido</div>
      )}
    </div>
  )
}
