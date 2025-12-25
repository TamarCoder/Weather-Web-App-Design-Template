/**
 * WEATHER API SERVICE
 * 
 * რას უნდა შეიცავდეს:
 * - getCurrentWeather(city: string) - მიმდინარე ამინდი
 * - getForecast(city: string) - 5-დღიანი პროგნოზი
 * - getWeatherByCoordinates(lat, lon) - კოორდინატებით ამინდი
 * - Error handling
 * - Response type checking
 * 
 * რას აკეთებს:
 * - OpenWeatherMap API-ზე HTTP requests (axios-ით)
 * - constants/index.ts-დან API_CONFIG გამოყენება
 * - API response-ების TypeScript types-ზე mapping
 * - Error-ების დამუშავება და გასაგები messages
 * 
 * სად იმპორტდება:
 * - hooks/useWeather.ts - custom hook-ში
 * - store/useStore.ts - Zustand actions-ში (optional)
 * 
 * რა functions უნდა exports გაუკეთო:
 * - getCurrentWeather(city: string): Promise<CurrentWeatherResponse>
 * - getForecast(city: string): Promise<ForecastResponse>
 * - getWeatherByCoordinates(lat: number, lon: number): Promise<CurrentWeatherResponse>
 * 
 * რა packages დაგჭირდება:
 * - axios (HTTP client)
 * - types/weather.ts (response types)
 * - constants/index.ts (API_CONFIG)
 */
