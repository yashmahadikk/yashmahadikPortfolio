import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'

import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { PortfolioChatbot } from '@/components/portfolio-chatbot'
import { ContentProtection } from '@/components/content-protection'
import './globals.css'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yash Mahadik | Product Manager & Builder',
  description: 'Product portfolio featuring product management experience, selected work, case studies, and perspectives on building thoughtful products.',
  generator: 'Yash',
  icons: {
    icon: '/apple-touch-icon.png',
    apple: [{ url: '/apple-touch-icon.png' }, { url: '/apple-icon.png' }],
    other: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon-192x192.png',
        media: '(prefers-color-scheme: light)',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon-512x512.png',
        media: '(prefers-color-scheme: dark)',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        url: '/icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth" suppressHydrationWarning>
      <head />
      <body className={`${figtree.className} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <ContentProtection />
          <PortfolioChatbot />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
