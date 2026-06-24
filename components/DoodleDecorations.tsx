'use client'

import React from 'react'

export default function DoodleDecorations() {
  return (
    <>
      <div className="pointer-events-none absolute left-6 top-0 h-10 w-10 rotate-12 rounded-full bg-purple-600/25 blur-sm" />
      <div className="pointer-events-none absolute right-6 top-6 h-6 w-6 rounded-full bg-cyan-300/25 blur-sm" />
      <div className="cartoon-doodle right-16 bottom-12 hidden h-12 w-12 rotate-12 rounded-full border-4 border-dashed border-yellow-300/40 md:block" />
      <div className="cartoon-doodle cartoon-bolt left-16 top-14 hidden -rotate-12 md:block">!</div>
      <svg className="pointer-events-none absolute -left-6 bottom-10 h-28 w-28 opacity-45" viewBox="0 0 100 100" fill="none">
        <path d="M10 80 Q 40 10 90 60" stroke="#8B5CF6" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 9" />
      </svg>
      <svg className="pointer-events-none absolute right-4 top-24 h-24 w-24 opacity-35" viewBox="0 0 100 100" fill="none">
        <path d="M18 52 C34 12 65 92 82 34" stroke="#22D3EE" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </>
  )
}
