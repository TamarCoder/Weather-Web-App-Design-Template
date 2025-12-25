/**
 * WEATHER HELPER FUNCTIONS
 * 
 * რა functions უნდა შეიცავდეს:
 * - getWeatherIconCode(icon: string): string - icon mapping
 * - groupForecastByDay(forecast: ForecastItem[]): DailyForecast[] - 3hr intervals -> days
 * - calculateDailyMinMax(items: ForecastItem[]): {min, max} - daily extremes
 * - getWindDirection(degrees: number): string - "N", "NE", "E", "SE", etc.
 * - getUVIndexLevel(uvIndex: number): string - "Low", "Moderate", "High" - optional
 * 
 * რას აკეთებს:
 * - weather data-ს processing და transformation
 * - forecast items-ის დღეებად დაჯგუფება
 * - helper calculations (wind direction, etc.)
 * 
 * სად იმპორტდება:
 * - ForecastCard (group forecast)
 * - WeatherDetails (wind direction)
 * - WeatherIcon (icon mapping)
 * 
 * რა packages დაგჭირდება:
 * - types/weather.ts (ForecastItem type)
 */
