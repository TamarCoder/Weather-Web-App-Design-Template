/**
 * TEMPERATURE FORMATTING UTILITIES
 *
 * რა functions უნდა შეიცავდეს:
 * - celsiusToFahrenheit(temp: number): number - °C to °F
 * - fahrenheitToCelsius(temp: number): number - °F to °C
 * - formatTemperature(temp: number, unit: 'celsius' | 'fahrenheit'): string - "23°C" or "73°F"
 * - roundTemperature(temp: number): number - round to integer
 *
 * რას აკეთებს:
 * - ტემპერატურის ერთეულების კონვერტაცია
 * - Zustand store-დან temperatureUnit წაკითხვა
 * - display-friendly ფორმატი (° symbol-ით)
 *
 * სად იმპორტდება:
 * - WeatherCard (main temperature)
 * - ForecastCard (forecast temps)
 * - WeatherDetails (feels like, min/max)
 *
 * რა packages დაგჭირდება:
 * - არა (pure JavaScript math)
 */
