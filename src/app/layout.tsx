import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smart Interview Assistant - AI-Powered Evaluation & Feedback',
  description: 'Revolutionize your interview process with AI-powered evaluation, real-time feedback, and personalized coaching. Get instant insights and improve your interview performance.',
  keywords: 'AI interview, interview assistant, interview feedback, interview coaching, AI evaluation, interview practice',
  authors: [{ name: 'Smart Interview Assistant Team' }],
  openGraph: {
    title: 'Smart Interview Assistant - AI-Powered Evaluation & Feedback',
    description: 'Revolutionize your interview process with AI-powered evaluation and personalized coaching.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Interview Assistant - AI-Powered Evaluation & Feedback',
    description: 'Revolutionize your interview process with AI-powered evaluation and personalized coaching.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
