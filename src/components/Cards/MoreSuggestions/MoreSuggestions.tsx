'use client'
import styles from "./MoreSuggestions.module.scss";
import { SkeletonLoader } from "@/components/UI";
import { getWeatherIcon, getWeatherGradient } from "@/utils";

interface MoreSuggestionsProps {
  cities: string[];
  weatherCache: Record<string, any>;
  isLoading?: boolean;
  onCityClick?: (city: string) => void;
}

export default function MoreSuggestions({ 
  cities, 
  weatherCache, 
  isLoading = false,
  onCityClick 
}: MoreSuggestionsProps) {
  if (isLoading) {
    return (
      <section className={styles.moreSuggestions}>
        <h1 className={styles.sectionTitle}>More Suggestions</h1>
        <div className={styles.cardsContainer}>
          <SkeletonLoader variant="search" count={3} />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.moreSuggestions}>
      <h1 className={styles.sectionTitle}>More Suggestions</h1>
      <div className={styles.cardsContainer}>
        {cities.map((city) => {
          const cityWeather = weatherCache[city];
          
          if (!cityWeather) {
            return (
              <div key={city} className={styles.smallCardPlaceholder}>
                <SkeletonLoader />
              </div>
            );
          }

          const temperature = Math.round(cityWeather.main.temp);
          const weatherMain = cityWeather.weather[0].main;
          const iconUrl = getWeatherIcon(weatherMain, temperature);
          const cardGradient = getWeatherGradient(weatherMain, temperature);

          return (
            <div 
              key={city} 
              className={styles.smallCardPlaceholder}
              onClick={() => onCityClick?.(city)}
              style={{ background: cardGradient, cursor: 'pointer' }}
            >
              <div className={styles.smallCardTitle}>
                <h1>{city}</h1>
              </div>
              <div className={styles.smallCardIcon}>
                <img src={iconUrl} alt="Weather Icon" className={styles.icon} />
              </div>
              <div className={styles.smallCardDegree}>
                <h1>{temperature}°</h1>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
