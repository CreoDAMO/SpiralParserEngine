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
            <nav className="bg-black/90 backdrop-blur-sm border-b border-purple-500/30 sticky top-0 z-50">
              <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                  <Link href="/" className="text-xl font-bold text-white">
                    SpiralScript Ecosystem
                  </Link>
                  <div className="flex space-x-6">
                    <Link href="/spiral-ide" className="text-purple-300 hover:text-white">
                      IDE
                    </Link>
                    <Link href="/spiral-one" className="text-purple-300 hover:text-white">
                      SpiralOne
                    </Link>
                    <Link href="/hybrid-blockchain" className="text-purple-300 hover:text-white">
                      Blockchain
                    </Link>
                    <Link href="/trust-wallet" className="text-purple-300 hover:text-white">
                      Wallet
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