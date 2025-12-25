import type { Metadata } from 'next'
import '../styles/globals.scss'
// import Header from '@/components/Layout/Header'
// import Footer from '@/components/Layout/Footer'

export const metadata: Metadata = {
  title: 'Weather Dashboard | Real-time Weather Information',
  description: 'Get real-time weather information and 5-day forecasts for any city worldwide. Modern, fast, and beautiful weather dashboard.',
  keywords: ['weather', 'forecast', 'temperature', 'weather app', 'dashboard'],
  authors: [{ name: 'Tamar Khuskivadze' }],
  openGraph: {
    title: 'Weather Dashboard',
    description: 'Real-time weather information and forecasts',
    type: 'website',
  },
}

/**
 * ROOT LAYOUT
 * 
 * რას უნდა შეიცავდეს:
 * - Header component (ყველა გვერდზე ზევით)
 * - Footer component (ყველა გვერდზე ქვევით)
 * - children (page content)
 * - Zustand provider wrapper - თუ საჭიროა
 * 
 * სტრუქტურა:
 * <html>
 *   <body>
 *     <Header /> - ნავიგაცია, search, temperature toggle
 *     <main>{children}</main> - page content
 *     <Footer /> - copyright, links
 *   </body>
 * </html>
 * 
 * როდესაც Header და Footer კომპონენტები მზად იქნება:
 * 1. Uncomment import ხაზები ზემოთ
 * 2. Uncomment <Header /> და <Footer /> ქვემოთ
 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        
        <main>
          {children}
        </main>
        
        {/* <Footer /> */}
      </body>
    </html>
  )
}
