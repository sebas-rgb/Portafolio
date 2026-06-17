import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '../components/Sidebar'

export const metadata: Metadata = {
  title: 'Sebastián López | Software Developer & AI Product Builder',
  description: 'Portafolio personal de Sebastián López. Desarrollo web moderno, IA aumentada y productos digitales de alto impacto.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <div className="min-h-screen bg-bg text-text">
          <Sidebar />
          <div className="lg:ml-72">
            <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-10">{children}</div>
          </div>
        </div>
      </body>
    </html>
  )
}
