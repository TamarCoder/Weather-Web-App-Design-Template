// /**
//  * HEADER COMPONENT
//  *
//  * რას უნდა შეიცავდეს:
//  * - აპლიკაციის ლოგო/სახელი "Weather Dashboard"
//  * - Navigation menu (თუ საჭიროა)
//  * - Temperature unit toggle (°C / °F ღილაკი)
//  * - თემის გადამრთველი (dark/light mode) - optional
//  * - User location display (მიმდინარე ლოკაცია)
//  *
//  * რას აკეთებს:
//  * - ნავიგაციას უზრუნველყოფს
//  * - ტემპერატურის ერთეულების გადართვა (celsius/fahrenheit)
//  * - ლოკაციის ღილაკი - გეოლოკაცია გააქტიურებს
//  * - responsive design - mobile-ზე hamburger menu
//  *

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* <Header /> */}
      <div style={{ padding: "1rem 1.5rem" }}>
        <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
          Header: Search & Navigation
        </p>
      </div>
    </header>
  );
}
