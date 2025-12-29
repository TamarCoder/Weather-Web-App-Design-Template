'use client'
import styles from "./RightSidebar.module.scss";
import { WeatherCard, HourlyForecast, DailyForecast } from "../Cards";
import { useStore } from "@/store/useStore";
import { getWeatherIcon } from "@/utils";
import type { HourlyItem, DailyItem, ForecastItem } from "@/types";
import { IoCloudOutline } from "react-icons/io5";

export default function RightSidebar() {
   
  const [isRightSidebarOpen, selectedCity, weatherCache, forecastCache] = useStore((state) => [
    state.isRightSidebarOpen,
    state.selectedCity,
    state.weatherCache,
    state.forecastCache
  ]);
  
  const weather = weatherCache[selectedCity || ''];
  const forecast = forecastCache[selectedCity || ''];
  
  if(!isRightSidebarOpen) {
    return null;
  }

  if(!selectedCity || !weather) {
    return (
      <aside className={styles.rightSidebar}>
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>
            <IoCloudOutline />
          </div>
          <h2 className={styles.emptyTitle}>No City Selected</h2>
          <p className={styles.emptyDescription}>
            Select a city from the suggestions or search to see detailed weather information
          </p>
        </div>
      </aside>
    );
  }

  // Extract hourly and daily data from forecast
  const hourlyData: HourlyItem[] = forecast?.list?.slice(0, 8).map((item: ForecastItem) => ({
    time: new Date(item.dt * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    icon: getWeatherIcon(item.weather[0].main, item.main.temp),
    temperature: Math.round(item.main.temp)
  })) || [];

  const dailyData: DailyItem[] = forecast?.list
    ?.filter((_: ForecastItem, index: number) => index % 8 === 0)
    .slice(0, 7)
    .map((item: ForecastItem) => ({
      day: new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' }),
      icon: getWeatherIcon(item.weather[0].main, item.main.temp),
      highTemp: Math.round(item.main.temp_max),
      lowTemp: Math.round(item.main.temp_min)
    })) || [];

  return (
    <aside className={styles.rightSidebar}>
      <div className={styles.container}>
        <WeatherCard
          city={selectedCity}
          date={new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
          temperature={Math.round(weather.main.temp)}
          weatherIcon={getWeatherIcon(weather.weather[0].main, weather.main.temp)}
        />

        <HourlyForecast items={hourlyData} />

        <DailyForecast items={dailyData} />
      </div>
    </aside>
  );
}
