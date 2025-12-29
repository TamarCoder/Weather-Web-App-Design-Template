"use client";
import { useEffect } from "react";
import { useStore } from "@/store/useStore";
import styles from "./RecentlySearch.module.scss";
import { SkeletonLoader } from "@/components/UI";
import { useWeather } from "@/hooks/useWeather";
import { IoSearch } from "react-icons/io5";
import { getWeatherIcon, getWeatherGradient } from "@/utils";
import { SUGGESTED_CITIES } from "@/constants/cities";

export default function RecentlySearch() {
  const recentCities = useStore((state) => state.recentCities);
  const initializeRecentCities = useStore((state) => state.initializeRecentCities);
  const setSelectedCity = useStore((state) => state.setSelectedCity);
  const toggleRightSidebar = useStore((state) => state.toggleRightSidebar);
  const isRightSidebarOpen = useStore((state) => state.isRightSidebarOpen);
  const weatherCache = useStore((state) => state.weatherCache);
  const setWeatherCache = useStore((state) => state.setWeatherCache);
  const setForecastCache = useStore((state) => state.setForecastCache);
  const { fetchWeather, fetchForecast, isLoading } = useWeather();

  // პირველ ჩატვირთვაზე ინიციალიზაცია 2 რანდომ ქალაქით
  useEffect(() => {
    if (recentCities.length === 0) {
      // აირჩიეთ 2 რანდომ ქალაქი
      const shuffled = [...SUGGESTED_CITIES].sort(() => 0.5 - Math.random());
      const randomCities = shuffled.slice(0, 2);

      initializeRecentCities(randomCities);

      // ჩავტვირთოთ მათი ამინდის ინფორმაცია
      randomCities.forEach(async (city) => {
        const weatherData = await fetchWeather(city);
        if (weatherData) {
          setWeatherCache(city, weatherData);
        }
      });
    }
  }, []);

  const handleCardClick = async (city: string) => {
    setSelectedCity(city);

    // Only toggle if sidebar is closed
    if (!isRightSidebarOpen) {
      toggleRightSidebar();
    }

    const forecastData = await fetchForecast(city);
    if (forecastData) {
      setForecastCache(city, forecastData);
    }
  };

  if (recentCities.length === 0) {
    return (
      <section className={styles.recentlySearch}>
        <h1 className={styles.sectionTitle}>Recently Search</h1>
        <div className={styles.cardsContainer}>
          <div className={styles.emptyState}>
            <IoSearch size={48} className={styles.emptyIcon} />
            <div>
              <h3 className={styles.emptyTitle}>No recent searches</h3>
              <p className={styles.emptyDescription}>
                Search for a city to see weather information
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.recentlySearch} aria-label="Recent weather searches">
      <h1 className={styles.sectionTitle}>Recently Search</h1>
      <div className={styles.cardsContainer} role="list">
        {recentCities.map((city, index) => {
          const cityWeather = weatherCache[city];

          // თუ cache-ში არ არის მონაცემები, ვაჩვენებთ skeleton loader
          if (!cityWeather) {
            return (
              <div
                key={index}
                className={styles.searchCard}
                role="listitem"
                aria-busy="true"
                aria-label={`Loading weather for ${city}`}
              >
                <SkeletonLoader />
              </div>
            );
          }

          const temperature = cityWeather?.main?.temp ? Math.round(cityWeather.main.temp) : 25;
          const weatherMain = cityWeather?.weather?.[0]?.main || "Clear";

          const iconUrl = getWeatherIcon(weatherMain, temperature);
          const cardGradient = getWeatherGradient(weatherMain, temperature);

          const currentTime = new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          });

          return (
            <div
              key={index}
              className={styles.searchCard}
              onClick={() => handleCardClick(city)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCardClick(city);
                }
              }}
              style={{ background: cardGradient }}
              role="button"
              tabIndex={0}
              aria-label={`View detailed weather for ${city}, currently ${temperature} degrees and ${weatherMain}`}
            >
              <div className={styles.weatherInfo}>
                <div className={styles.weatherIcon}>
                  <img
                    src={iconUrl}
                    alt={`${weatherMain} weather icon`}
                    className={styles.icon}
                    loading="lazy"
                  />
                </div>
                <div className={styles.locationInfo}>
                  <p className={styles.cityName}>{city}</p>
                  <span className={styles.time}>{currentTime}</span>
                </div>
              </div>

              <div className={styles.temperature}>
                <h2>{temperature}°</h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
