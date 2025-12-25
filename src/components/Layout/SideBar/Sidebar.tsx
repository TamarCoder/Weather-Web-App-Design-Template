import Navigation from "./Navigation/Navigation";
import styles from "./Sidebar.module.scss";
import WeatherMode from "./WeatherMode/WeatherMode";

export default function SidebarLeft() {
  return (
    <aside className={styles.leftSidebar}>
      <div  className={styles.sidebarContent}>
          <WeatherMode/>
          <Navigation/>
         
      </div>
    </aside>
  );
}
