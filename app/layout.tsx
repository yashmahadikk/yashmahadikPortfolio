import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Inter, Source_Code_Pro as V0_Font_Source_Code_Pro, Playfair_Display } from 'next/font/google'

// Initialize fonts
const _inter = Inter({ subsets: ['latin'], weight: ["300","400","500","600","700"] })
const _sourceCodePro = V0_Font_Source_Code_Pro({ subsets: ['latin'], weight: ["400","500","600","700"] })
const _playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: ["400","500","600","700"], style: ['normal', 'italic'] })

export const metadata: Metadata = {
  title: 'Yash Mahadik | Product Manager & Digital Transformation Leader',
  description: 'Product portfolio showcasing AI-powered solutions, enterprise transformation, and digital innovation. 5 years in project management and operations, 4 years in product management.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
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
    <html lang="en" className="bg-background scroll-smooth">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
