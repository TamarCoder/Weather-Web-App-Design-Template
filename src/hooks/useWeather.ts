/**
 * USE WEATHER HOOK
 * 
 * რას უნდა შეიცავდეს:
 * - fetchWeather(city: string) - ამინდის მოთხოვნა
 * - fetchForecast(city: string) - პროგნოზის მოთხოვნა
 * - isLoading state
 * - error state
 * - Zustand store-ში data-ს შენახვა
 * 
 * რას აკეთებს:
 * - weatherApi service-ის გამოძახება
 * - Loading, error states მართვა
 * - Zustand store update after fetch
 * - useEffect - auto fetch on city change (optional)
 * 
 * სად იმპორტდება:
 * - src/app/page.tsx - მთავარ გვერდზე
 * - SearchCity component
 * 
 * რა return უნდა უბრუნოს:
 * - {
 *     fetchWeather: (city: string) => Promise<void>,
 *     fetchForecast: (city: string) => Promise<void>,
 *     isLoading: boolean,
 *     error: string | null,
 *     clearError: () => void
 *   }
 * 
 * რა packages დაგჭირდება:
 * - react (useState, useCallback)
 * - services/weatherApi
 * - store/useStore (Zustand)
 */
