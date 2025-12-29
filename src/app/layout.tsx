import type { Metadata, Viewport } from "next";
import "../styles/globals.scss";
import styles from "./layout.module.scss";
import Header from "@/components/Header/Header";
import LeftSidebar from "@/components/LeftSidebar/LeftSidebar";
import RightSidebar from "@/components/RightSidebar/RightSidebar";
import Footer from "@/components/Footer/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export const metadata: Metadata = {
  title: "Weather Dashboard | Real-time Weather Information",
  description:
    "Get real-time weather information and 5-day forecasts for any city worldwide. Modern, fast, and beautiful weather dashboard.",
  keywords: ["weather", "forecast", "temperature", "weather app", "dashboard"],
  authors: [{ name: "Tamar Khuskivadze" }],
  openGraph: {
    title: "Weather Dashboard",
    description: "Real-time weather information and forecasts",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#667eea",
};

/**
 * ROOT LAYOUT - DASHBOARD STRUCTURE
 *
 * სტრუქტურა (CSS Grid):
 * ┌──────────────┬─────────────┬──────────────┐
 * │              │   Header    │              │
 * │  Left        ├─────────────┤   Right      │
 * │  Sidebar     │    Main     │   Sidebar    │
 * │              │  (children) │   (optional) │
 * └──────────────┴─────────────┴──────────────┘
 * └──────────────── Footer ─────────────────────┘
 *
 * რას უნდა შეიცავდეს:
 * - Left Sidebar: Popular cities, recent searches, favorites
 * - Header: Search, temperature toggle, navigation
 * - Main: children (page content - ეს იცვლება გვერდებზე)
 * - Right Sidebar: Additional weather info, ads (optional)
 * - Footer: Copyright, links (ქვევით)
 *
 * Mobile: Stack vertically (Sidebar -> Header -> Main -> Footer)
 *
 * როდესაც კომპონენტები მზად იქნება:
 * 1. Uncomment import ხაზები ზემოთ
 * 2. Uncomment კომპონენტები ქვემოთ
 */

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>
          <div className={styles.layoutContainer}>
            <LeftSidebar />

            <div className={styles.mainWrapper}>
              <Header />
              <main className={styles.mainContent} id="main-content" role="main">
                {children}
              </main>
              <Footer />
            </div>

            <RightSidebar />
          </div>
        </ErrorBoundary>
      </body>
    </html>
  );
}
