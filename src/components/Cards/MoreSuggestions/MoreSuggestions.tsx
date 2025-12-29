"use client";
import styles from "./MoreSuggestions.module.scss";
import { SkeletonLoader } from "@/components/UI";
import { getWeatherIcon, getWeatherGradient } from "@/utils";
import type { WeatherData } from "@/types";

interface MoreSuggestionsProps {
  cities: string[];
  weatherCache: Record<string, WeatherData>;
  isLoading?: boolean;
  onCityClick?: (city: string) => void;
}

export default function MoreSuggestions({
  cities,
  weatherCache,
  isLoading = false,
  onCityClick,
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
    <section className={styles.moreSuggestions} aria-label="Weather suggestions">
      <h1 className={styles.sectionTitle}>More Suggestions</h1>
      <div className={styles.cardsContainer} role="list">
        {cities.map((city) => {
          const cityWeather = weatherCache[city];

          if (!cityWeather) {
            return (
              <div
                key={city}
                className={styles.smallCardPlaceholder}
                role="listitem"
                aria-busy="true"
                aria-label={`Loading weather for ${city}`}
              >
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
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onCityClick?.(city);
                }
              }}
              style={{ background: cardGradient, cursor: "pointer" }}
              role="button"
              tabIndex={0}
              aria-label={`View weather for ${city}, currently ${temperature} degrees and ${weatherMain}`}
            >
              <div className={styles.smallCardTitle}>
                <h2>{city}</h2>
              </div>
              <div className={styles.smallCardIcon}>
                <img
                  src={iconUrl}
                  alt={`${weatherMain} weather icon`}
                  className={styles.icon}
                  loading="lazy"
                />
              </div>
              <div className={styles.smallCardDegree}>
                <h3>{temperature}°</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
