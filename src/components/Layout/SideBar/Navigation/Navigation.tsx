import { Cloudy, MapPin, Menu, SlidersHorizontal } from "lucide-react";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
        <ul className={styles.lists}>
            <li className={styles.item}>
                <Cloudy className={styles.icon} />
                <p className={styles.label}>Weather</p>
            </li>
            <li className={styles.item}>
                <Menu className={styles.icon} />
                <p className={styles.label}>Menu</p>
            </li>
            <li className={styles.item}>
                <MapPin className={styles.icon} />
                <p className={styles.label}>Location</p>
            </li>
            <li className={styles.item}>
                <SlidersHorizontal className={styles.icon} />
                <p className={styles.label}>Settings</p>
            </li>
        </ul>
    </nav>
  );
}
