import type { Metadata } from "next";
import "../styles/globals.scss";
import styles from "./layout.module.scss";
import SidebarLeft from "@/components/Layout/SideBar/Sidebar";
import Header from "@/components/Layout/Header/Header";
import RightSidebar from "@/components/Layout/RightSidebar/RightSidebar";
import Footer from "@/components/Layout/Footer/Footer";
// import Header from '@/components/Layout/Header'
// import Sidebar from '@/components/Layout/Sidebar'
// import Footer from '@/components/Layout/Footer'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={styles.layoutContainer}>
          <SidebarLeft />
          <Header />
          <main className={styles.mainContent}>{children}</main>
          <RightSidebar />
          <Footer />
        </div>
      </body>
    </html>
  );
}
