import styles from "./LeftSidebar.module.scss";
import Navigation from "./Navigation/Navigation";
import WeatherMode from "./WeatherMode/WeatherMode";

export default function LeftSidebar() {
  return (
    <aside className={styles.leftSidebar}>
      <div className={styles.sidebarContent}>
        <WeatherMode />
        <Navigation />
      </div>
    </aside>
  );
}
