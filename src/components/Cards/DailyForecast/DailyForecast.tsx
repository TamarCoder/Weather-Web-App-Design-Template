import styles from "./DailyForecast.module.scss";

interface DailyItem {
  day: string;
  icon: string;
  highTemp: number;
  lowTemp: number;
}

interface DailyForecastProps {
  items: DailyItem[];
}

export default function DailyForecast({ items }: DailyForecastProps) {
  return (
    <div className={styles.dailyForecast}>
      <div className={styles.sectionTitle}>
        <h3>7-Day Forecast</h3>
      </div>

      <div className={styles.dailyItems}>
        {items.map((item) => (
          <div key={item.day} className={styles.dailyItem}>
            <p className={styles.dayName}>{item.day}</p>
            <img
              src={item.icon}
              alt="Weather icon"
              className={styles.dailyIcon}
            />
            <p className={styles.dailyTemp}>
              {item.highTemp}° / {item.lowTemp}°
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
