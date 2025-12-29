import { useState } from "react";
import { getCurrentWeather, getForecast } from "@/services/weatherApi";
import type { WeatherData, ForecastData } from "@/types/weather.types";

export function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (city: string): Promise<WeatherData | null> => {
    setWeather(null);
    setForecast(null);
    setError(null);
    setIsLoading(true);
    
    try {
      const weatherData = await getCurrentWeather(city);
      setWeather(weatherData);
      return weatherData;
    } catch (err: any) {
      const errorMessage = err.message || "An error occurred while fetching weather data.";
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  
  const fetchForecast = async (city: string): Promise<ForecastData | null> => {
    setWeather(null);
    setForecast(null);
    setError(null);
    setIsLoading(true);
    
    try {
      const forecastData = await getForecast(city);
      setForecast(forecastData);
      return forecastData;
    } catch (err: any) {
      const errorMessage = err.message || "An error occurred while fetching forecast data.";
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    weather,
    forecast,
    isLoading,
    error,
    fetchWeather,
    fetchForecast,
  };
}
