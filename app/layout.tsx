import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'

import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { PortfolioChatbot } from '@/components/portfolio-chatbot'
import './globals.css'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yash Mahadik | Product Manager & Founder',
  description: 'Product portfolio showcasing AI-powered solutions, enterprise transformation, and digital innovation. 4 years in product management, 5 years in project management.',
  generator: 'Yash',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('customColorPalette');
                if (saved) {
                  const palette = JSON.parse(saved);
                  document.documentElement.style.setProperty('--primary', palette.primary);
                  document.documentElement.style.setProperty('--secondary', palette.secondary);
                  document.documentElement.style.setProperty('--accent', palette.accent);
                  document.documentElement.style.setProperty('--muted', palette.muted);
                  document.documentElement.style.setProperty('--ring', palette.primary);
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${figtree.className} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <PortfolioChatbot />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
