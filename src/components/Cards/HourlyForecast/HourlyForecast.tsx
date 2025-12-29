import { Fragment } from "react";
import styles from "./HourlyForecast.module.scss";
import { SkeletonLoader } from "@/components/UI";
import type { HourlyItem } from "@/types";

interface HourlyForecastProps {
  items: HourlyItem[];
  isLoading?: boolean;
}

export default function HourlyForecast({ items, isLoading = false }: HourlyForecastProps) {
  if (isLoading) {
    return (
      <div className={styles.hourlyForecast}>
        <div className={styles.sectionTitle}>
          <h3>Today's Forecast</h3>
        </div>
        <div className={styles.hourlyItems}>
          <SkeletonLoader variant="hourly" count={3} />
        </div>
      </div>
    );
  }

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
