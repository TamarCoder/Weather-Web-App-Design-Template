import styles from "./WeatherCard.module.scss";
import { SkeletonLoader } from "@/components/UI";
import type { WeatherCardProps } from "@/types";

interface ExtendedWeatherCardProps extends WeatherCardProps {
  isLoading?: boolean;
}

export default function WeatherCard({
  city,
  date,
  temperature,
  weatherIcon,
  isLoading = false,
}: ExtendedWeatherCardProps) {
  if (isLoading) {
    return <SkeletonLoader variant="card" />;
  }

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
