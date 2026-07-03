import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'
const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const description =
  'Agile Svcs is a general contractor specializing in commercial and light industrial projects across the Southeast. From Class A office buildouts to healthcare expansions, we deliver on schedule, on budget, and finished right.'
export const metadata: Metadata = {
  title: 'Agile Svcs — Commercial General Contractor | Southeast US',
  description,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/agile-icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/agile-icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Agile Svcs — Commercial General Contractor | Southeast US',
    description,
    type: 'website',
    locale: 'en_US',
    siteName: 'Agile Svcs LLC',
    images: [
      {
        url: '/agile-logo.png',
        width: 520,
        height: 140,
        alt: 'Agile Services, LLC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agile Svcs — Commercial General Contractor | Southeast US',
    description,
    images: ['/agile-logo.png'],
  },
}
export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0A2540',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light ${inter.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
