/**
 * FOOTER COMPONENT
 *
 * რას უნდა შეიცავდეს:
 * - Copyright ინფორმაცია "© 2025 Weather Dashboard"
 * - შექმნილია ვისი მიერ "Created by Tamar Khuskivadze"
 * - სოციალური ბმულები (GitHub, LinkedIn) - optional
 * - API Attribution "Powered by OpenWeatherMap"
 * - Privacy Policy / Terms - optional
 *
 * რას აკეთებს:
 * - აჩვენებს საავტორო უფლებებს
 * - ბმულები გარე რესურსებზე
 * - API provider-ის მოხსენიება (required by OpenWeatherMap)
 * - სოციალური მედია ლინკები
 *
 * სად იმპორტდება:
 * - src/app/layout.tsx - root layout-ში
 * - გვერდის ბოლოში ყოველთვის
 *
 * რა props უნდა მიიღოს:
 * - არაფერი (static component)
 *
 * რა icons დაგჭირდება:
 * - lucide-react: Github, Linkedin, Heart
 */

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* <Footer /> */}
      <div style={{ padding: "1.5rem", textAlign: "center" }}>
        <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
          © 2025 Weather Dashboard by Tamar Khuskivadze
        </p>
      </div>
    </footer>
  );
}
