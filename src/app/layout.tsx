import type { Metadata } from 'next'
import '../styles/globals.scss'

export const metadata: Metadata = {
  title: 'Weather Web App',
  description: 'Modern weather application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ka">
      <body>{children}</body>
    </html>
  )
}
