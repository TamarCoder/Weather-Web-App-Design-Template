import axios from "axios";
import type { WeatherData, ForecastData } from "@/types/weather.types";

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

if (!API_KEY) {
  console.warn("NEXT_PUBLIC_OPENWEATHER_API_KEY is not defined");
}

const getCurrentWeather = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get<WeatherData>(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || "Failed to fetch weather data";
      throw new Error(message);
    }
    throw new Error("Failed to fetch current weather data.");
  }
};

const getForecast = async (city: string): Promise<ForecastData> => {
  try {
    const response = await axios.get<ForecastData>(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || "Failed to fetch forecast data";
      throw new Error(message);
    }
    throw new Error("Failed to fetch weather forecast data.");
  }
};

const getWeatherByCoordinates = async (lat: number, lon: number): Promise<WeatherData> => {
  try {
    const response = await axios.get<WeatherData>(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || "Failed to fetch weather data";
      throw new Error(message);
    }
    throw new Error("Failed to fetch weather data by coordinates.");
  }
};

export { getCurrentWeather, getForecast, getWeatherByCoordinates };
