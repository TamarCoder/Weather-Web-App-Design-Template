'use client'
import { useEffect, useState } from "react";
import styles from "./MainContent.module.scss";
import { RecentlySearch, MoreSuggestions } from "../Cards";
import { SUGGESTED_CITIES } from "@/constants/cities";
import { useStore } from "@/store/useStore";
import { useWeather } from "@/hooks/useWeather";

export default function MainContent() {
  const [suggestedCities, setSuggestedCities] = useState<string[]>([]);
  const weatherCache = useStore((state) => state.weatherCache);
  const setWeatherCache = useStore((state) => state.setWeatherCache);
  const setSelectedCity = useStore((state) => state.setSelectedCity);
  const toggleRightSidebar = useStore((state) => state.toggleRightSidebar);
  const isRightSidebarOpen = useStore((state) => state.isRightSidebarOpen);
  const addRecentCity = useStore((state) => state.addRecentCity);
  const { fetchWeather } = useWeather();

  // Get random cities
  const getRandomCities = (count: number) => {
    const shuffled = [...SUGGESTED_CITIES].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  // Fetch weather for suggested cities on mount
  useEffect(() => {
    const fetchSuggestedCities = async () => {
      const cities = getRandomCities(3);
      setSuggestedCities(cities);
      
      // Fetch weather for each city and cache it
      for (const city of cities) {
        const data = await fetchWeather(city);
        if (data) {
          setWeatherCache(city, data);
        }
      }
    };
    
    fetchSuggestedCities();
  }, []);

  // Handle suggestion click
  const handleSuggestionClick = async (city: string) => {
    setSelectedCity(city);
    addRecentCity(city);
    
    // Only toggle if sidebar is closed
    if (!isRightSidebarOpen) {
      toggleRightSidebar();
    }
    
    // If not in cache, fetch it
    if (!weatherCache[city]) {
      const data = await fetchWeather(city);
      if (data) {
        setWeatherCache(city, data);
      }
    }
  };

  return (
    <div className={styles.mainContent}>
      <RecentlySearch />
      <MoreSuggestions 
        cities={suggestedCities}
        weatherCache={weatherCache}
        onCityClick={handleSuggestionClick}
      />
    </div>
  );
}
