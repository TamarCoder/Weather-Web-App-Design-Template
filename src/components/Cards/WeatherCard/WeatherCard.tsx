import styles from "./WeatherCard.module.scss";

interface WeatherCardProps {
  city: string;
  date: string;
  temperature: number;
  weatherIcon: string;
}

export default function WeatherCard({
  city,
  date,
  temperature,
  weatherIcon,
}: WeatherCardProps) {
  return (
    <div className={styles.weatherCard}>
      <div className={styles.weatherInfo}>
        <div className={styles.locationInfo}>
          <div className={styles.cityName}>
            <h3>{city}</h3>
          </div>
          <div className={styles.dateInfo}>
            <p>{date}</p>
          </div>
        </div>

        <div className={styles.temperature}>
          <p>{temperature}°</p>
        </div>
      </div>
      <div className={styles.weatherIcon}>
        <img
          src={weatherIcon}
          alt="Weather icon"
          className={styles.weatherImage}
        />
      </div>
    </div>
  );
}
