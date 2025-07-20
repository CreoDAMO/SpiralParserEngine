import './globals.css'
import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { QueryProvider } from '@/components/query-provider'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'SpiralScript IDE - Advanced Quantum Programming Environment',
  description: 'SpiralScript IDE with AI orchestration, quantum computing integration, and HYBRID blockchain technology',
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
            {children}
            <Toaster />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}