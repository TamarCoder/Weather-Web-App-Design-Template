import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { WeatherData, ForecastData } from "@/types/weather.types";

interface StoreState {
  // City management
  recentCities: string[];
  selectedCity: string | null;
  
  // Weather cache
  weatherCache: Record<string, WeatherData>;
  forecastCache: Record<string, ForecastData>;
  
  // UI state
  isRightSidebarOpen: boolean;
  
  // Deprecated - will be removed
  currentWeather: string | null;
  forecast: any | null;
  
  // Actions
  addRecentCity: (city: string) => void;
  initializeRecentCities: (cities: string[]) => void;
  setSelectedCity: (city: string | null) => void;
  toggleRightSidebar: () => void;
  setWeatherCache: (city: string, data: WeatherData) => void;
  setForecastCache: (city: string, data: ForecastData) => void;
  
  // Deprecated actions
  setCurrentWeather: (weather: string | null) => void;
  setForecast: (forecast: any | null) => void;
}

export const useStore = create<StoreState>()(persist((set) => ({
  recentCities: [],
  selectedCity: null,
  currentWeather: null,
  forecast: null,
  isRightSidebarOpen: false,
  weatherCache: {},
  forecastCache: {},

  addRecentCity: (city: string) =>
    set((state) => ({
      recentCities: [
        city,
        ...state.recentCities.filter((c) => c !== city),
      ].slice(0, 5),
    })),

  initializeRecentCities: (cities: string[]) =>
    set(() => ({
      recentCities: cities,
    })),

  setWeatherCache: (city: string, data: any) =>
    set((state) => ({
      weatherCache: {
        ...state.weatherCache,
        [city]: data,
      },
    })),

  setForecastCache: (city: string, data: any) =>
    set((state) => ({
      forecastCache: { ...state.forecastCache, [city]: data },
    })),
  setSelectedCity: (city: string | null) => set({ selectedCity: city }),

  setCurrentWeather: (weather: string | null) =>
    set({ currentWeather: weather }),

  setForecast: (forecast: any | null) => set({ forecast }),

  toggleRightSidebar: () =>
    set((state) => ({ isRightSidebarOpen: !state.isRightSidebarOpen })),
}), {
  name: 'weather-storage',
  partialize: (state) => ({ 
    recentCities: state.recentCities,
    weatherCache: state.weatherCache,
    forecastCache: state.forecastCache
  }),
}));
