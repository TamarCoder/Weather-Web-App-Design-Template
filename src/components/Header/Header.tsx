"use client";
import { IoSearch, IoMenuOutline } from "react-icons/io5";
import styles from "./Header.module.scss";
import { Input } from "../UI/Input";
import { useState, useCallback } from "react";
import { useStore } from "@/store/useStore";
import { useWeather } from "@/hooks/useWeather";
import { debounce } from "@/utils/performance";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  const addRecentCity = useStore((state) => state.addRecentCity);
  const setWeatherCache = useStore((state) => state.setWeatherCache);
  const toggleRightSidebar = useStore((state) => state.toggleRightSidebar);
  const isRightSidebarOpen = useStore((state) => state.isRightSidebarOpen);
  const { fetchWeather } = useWeather();

  const handleOnSubmit = async () => {
    if (searchValue.trim() === "") return;

    const city = searchValue.trim();
    const weatherData = await fetchWeather(city);

    if (weatherData) {
      setWeatherCache(city, weatherData);
      addRecentCity(city);
    }

    setSearchValue("");
  };

  return (
    <header className={styles.header} role="banner">
      <div className={styles.searchPlaceholder}>
        <Input
          placeholder="Search for a city..."
          name="search"
          type="search"
          icon={<IoSearch />}
          iconPosition="left"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onEnter={handleOnSubmit}
          aria-label="Search for city weather"
          aria-describedby="search-hint"
        />
        <span id="search-hint" className="sr-only">
          Type a city name and press Enter to search
        </span>
      </div>
    </header>
  );
}
