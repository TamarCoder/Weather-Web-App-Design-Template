# Weather API Service

## ქართული

### მიზანი
ეს მოდული პასუხისმგებელია OpenWeatherMap API-სთან კომუნიკაციაზე და ამინდის მონაცემების მოძიებაზე.

### ფუნქციები

#### `getCurrentWeather(city: string)`
- **აღწერა:** იღებს მიმდინარე ამინდის ინფორმაციას კონკრეტული ქალაქისთვის
- **პარამეტრები:** 
  - `city` - ქალაქის სახელი (მაგ: "Tbilisi", "London")
- **დაბრუნება:** `Promise<WeatherData>` - ამინდის სრული მონაცემები
- **გამოყენება:**
  ```typescript
  const weather = await getCurrentWeather("Tbilisi");
  console.log(weather.main.temp); // ტემპერატურა ცელსიუსში
  ```

#### `getForecast(city: string)`
- **აღწერა:** იღებს 5-დღიან ამინდის პროგნოზს (3-საათიანი ინტერვალებით)
- **პარამეტრები:**
  - `city` - ქალაქის სახელი
- **დაბრუნება:** `Promise<ForecastData>` - პროგნოზის მონაცემები
- **გამოყენება:**
  ```typescript
  const forecast = await getForecast("Paris");
  console.log(forecast.list[0]); // პირველი პროგნოზი
  ```

#### `getWeatherByCoordinates(lat: number, lon: number)`
- **აღწერა:** იღებს ამინდის მონაცემებს გეოგრაფიული კოორდინატებით
- **პარამეტრები:**
  - `lat` - განედი (latitude)
  - `lon` - გრძედი (longitude)
- **დაბრუნება:** `Promise<WeatherData>`
- **გამოყენება:**
  ```typescript
  const weather = await getWeatherByCoordinates(41.7151, 44.8271); // თბილისი
  ```

### კონფიგურაცია
- **API Key:** `NEXT_PUBLIC_OPENWEATHER_API_KEY` environment ცვლადი
- **Base URL:** `https://api.openweathermap.org/data/2.5`
- **ერთეულები:** `metric` (ცელსიუსი, მეტრი/წამში)

### შეცდომების დამუშავება
ყველა ფუნქცია ასრულებს შეცდომების დამუშავებას და აბრუნებს მომხმარებლისთვის გასაგებ შეტყობინებებს:
- 404: ქალაქი ვერ მოიძებნა
- 401: არასწორი API key
- Network errors: ქსელის პრობლემები

### სად გამოიყენება
- `hooks/useWeather.ts` - weather მონაცემების მოსაძიებლად
- `components/MainContent/MainContent.tsx` - suggested cities-ისთვის
- `components/Header/Header.tsx` - ძებნის ფუნქციონალი

---

## English

### Purpose
This module handles communication with the OpenWeatherMap API and fetches weather data.

### Functions

#### `getCurrentWeather(city: string)`
- **Description:** Fetches current weather information for a specific city
- **Parameters:** 
  - `city` - City name (e.g., "Tbilisi", "London")
- **Returns:** `Promise<WeatherData>` - Complete weather data
- **Usage:**
  ```typescript
  const weather = await getCurrentWeather("Tbilisi");
  console.log(weather.main.temp); // Temperature in Celsius
  ```

#### `getForecast(city: string)`
- **Description:** Fetches 5-day weather forecast (3-hour intervals)
- **Parameters:**
  - `city` - City name
- **Returns:** `Promise<ForecastData>` - Forecast data
- **Usage:**
  ```typescript
  const forecast = await getForecast("Paris");
  console.log(forecast.list[0]); // First forecast item
  ```

#### `getWeatherByCoordinates(lat: number, lon: number)`
- **Description:** Fetches weather data using geographic coordinates
- **Parameters:**
  - `lat` - Latitude
  - `lon` - Longitude
- **Returns:** `Promise<WeatherData>`
- **Usage:**
  ```typescript
  const weather = await getWeatherByCoordinates(41.7151, 44.8271); // Tbilisi
  ```

### Configuration
- **API Key:** `NEXT_PUBLIC_OPENWEATHER_API_KEY` environment variable
- **Base URL:** `https://api.openweathermap.org/data/2.5`
- **Units:** `metric` (Celsius, meters/second)

### Error Handling
All functions implement error handling and return user-friendly messages:
- 404: City not found
- 401: Invalid API key
- Network errors: Connection issues

### Where it's used
- `hooks/useWeather.ts` - For fetching weather data
- `components/MainContent/MainContent.tsx` - For suggested cities
- `components/Header/Header.tsx` - Search functionality
