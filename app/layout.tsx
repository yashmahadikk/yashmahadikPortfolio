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
    icon: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nnWAnV2nZEdMFMSKK1CaXIy4qGutLS.png',
        type: 'image/png',
      },
    ],
    apple: [{ url: '/apple-touch-icon.png' }, { url: '/apple-icon.png' }],
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
