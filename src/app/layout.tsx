import type { ReactNode } from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Libre_Baskerville } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from "@/components/navigation"
import './globals.css'
import { Footer } from "@/components/footer"

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const libreBaskerville = Libre_Baskerville({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AIFFA - Arab International Film Festival Of Australia',
  description: 'Celebrating the richness and diversity of Arab cinema in Australia. Join us for an unforgettable celebration of Arab storytelling.',
  keywords: ['Arab cinema', 'film festival', 'Australia', 'AIFFA', 'Arab filmmakers', 'cultural events'],
  openGraph: {
    title: 'Arab International Film Festival Of Australia',
    description: 'Celebrating the richness and diversity of Arab cinema in Australia',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${libreBaskerville.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        {children}
        <Footer/>
        <Analytics />
      </body>
    </html>
  )
}
