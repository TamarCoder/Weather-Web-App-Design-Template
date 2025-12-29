"use client";
import { IoSearch } from "react-icons/io5";
import styles from "./Header.module.scss";
import { Input } from "../UI/Input";
import { useState } from "react";
import { useStore } from "@/store/useStore";
import { useWeather } from "@/hooks/useWeather";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  const addRecentCity = useStore((state) => state.addRecentCity);
  const setWeatherCache = useStore((state) => state.setWeatherCache);
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
    <header className={styles.header}>
      <div className={styles.searchPlaceholder}>
        <Input
          placeholder="Search..."
          name="search"
          type="search"
          icon={<IoSearch />}
          iconPosition="left"
          className={styles.fillInput}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onEnter={handleOnSubmit}
        />
      </div>
    </header>
  );
}
