import './globals.css'
import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { QueryProvider } from '@/components/query-provider'
import { Toaster } from '@/components/ui/toaster'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SpiralScript Ecosystem',
  description: 'Advanced consciousness-aware development environment with quantum-enhanced blockchain',
  keywords: ['SpiralScript', 'IDE', 'quantum computing', 'blockchain', 'AI programming'],
  authors: [{ name: 'CreoDAMO' }],
  manifest: '/manifest.json',
  robots: 'index, follow',
  openGraph: {
    title: 'SpiralScript IDE',
    description: 'Advanced Quantum Programming Environment',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  themeColor: '#7c3aed',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-50">
              <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                  <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    SpiralScript
                  </Link>
                  <div className="flex space-x-4">
                    <Link href="/spiral-ide" className="text-gray-300 hover:text-purple-400 transition-colors">
                      IDE
                    </Link>
                    <Link href="/spiral-one" className="text-gray-300 hover:text-blue-400 transition-colors">
                      SpiralOne
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
            {children}
            <Toaster />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}