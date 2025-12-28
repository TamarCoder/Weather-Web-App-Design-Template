import { Fragment } from "react";
import styles from "./HourlyForecast.module.scss";

interface HourlyItem {
  time: string;
  icon: string;
  temperature: number;
}

interface HourlyForecastProps {
  items: HourlyItem[];
}

export default function HourlyForecast({ items }: HourlyForecastProps) {
  return (
    <div className={styles.hourlyForecast}>
      <div className={styles.sectionTitle}>
        <h3>Today's Forecast</h3>
      </div>

      <div className={styles.hourlyItems}>
        {items.map((item, index) => (
          <Fragment key={`hourly-${index}`}>
            <div className={styles.hourlyItem}>
              <p className={styles.hourTime}>{item.time}</p>
              <img
                src={item.icon}
                alt="Weather icon"
                className={styles.hourlyIcon}
              />
              <p className={styles.hourTemp}>{item.temperature}°</p>
            </div>
            {index < items.length - 1 && (
              <div className={styles.divider}></div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
