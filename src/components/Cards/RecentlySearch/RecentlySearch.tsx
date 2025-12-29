'use client'
import { useStore } from "@/store/useStore";
import styles from "./RecentlySearch.module.scss";
import { SkeletonLoader } from "@/components/UI";
import { useWeather } from "@/hooks/useWeather";
import { IoSearch } from "react-icons/io5";
import { getWeatherIcon, getWeatherGradient } from "@/utils";

 
 

export default function RecentlySearch() {

  const recentCities =  useStore((state) => state.recentCities);
  const setSelectedCity = useStore((state) => state.setSelectedCity);
  const toggleRightSidebar = useStore((state) => state.toggleRightSidebar);
  const isRightSidebarOpen = useStore((state) => state.isRightSidebarOpen);
  const weatherCache = useStore((state) => state.weatherCache);
  const setForecastCache = useStore((state) => state.setForecastCache);
  const { fetchWeather, fetchForecast, isLoading } = useWeather();

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
  }
  
  if(recentCities.length === 0) {
    return (
      <section className={styles.recentlySearch}>
        <h1 className={styles.sectionTitle}>Recently Search</h1>
        <div className={styles.cardsContainer}>
          <div className={styles.emptyState}>
            <IoSearch size={48} className={styles.emptyIcon} />
            <div>
              <h3 className={styles.emptyTitle}>
                No recent searches
              </h3>
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
    <section className={styles.recentlySearch}>
      <h1 className={styles.sectionTitle}>Recently Search</h1>
      <div className={styles.cardsContainer}>
        {recentCities.map((city, index) => {
          const cityWeather = weatherCache[city];
          
          // თუ cache-ში არ არის მონაცემები, ვაჩვენებთ skeleton loader
          if (!cityWeather) {
            return (
              <div key={index} className={styles.searchCard}>
                <SkeletonLoader />
              </div>
            );
          }
          
          const temperature = cityWeather?.main?.temp 
            ? Math.round(cityWeather.main.temp) 
            : 25;
          const weatherMain = cityWeather?.weather?.[0]?.main || 'Clear';
          
          const iconUrl = getWeatherIcon(weatherMain, temperature);
          const cardGradient = getWeatherGradient(weatherMain, temperature);
          
          // მიმდინარე დროის ფორმატირება
          const currentTime = new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
          });

          return (
            <div 
              key={index} 
              className={styles.searchCard} 
              onClick={() => handleCardClick(city)}
              style={{ background: cardGradient }}
            >
              <div className={styles.weatherInfo}>
                <div className={styles.weatherIcon}>
                  <img 
                    src={iconUrl} 
                    alt="Weather Icon"
                    className={styles.icon} 
                  />
                </div>
                <div className={styles.locationInfo}>
                  <p className={styles.cityName}>{city}</p>
                  <span className={styles.time}>
                    {currentTime}
                  </span>
                </div>
              </div>
              
              <div className={styles.temperature}>
                <h1>{temperature}°</h1>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
