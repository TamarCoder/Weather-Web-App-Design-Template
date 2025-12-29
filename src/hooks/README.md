# useWeather Hook

## ქართული

### მიზანი
React custom hook ამინდის მონაცემების მართვისთვის და API-სთან მუშაობისთვის.

### State-ები

#### `weather: WeatherData | null`
- მიმდინარე ამინდის მონაცემები
- `null` თუ ჯერ არ არის ჩატვირთული

#### `forecast: ForecastData | null`
- 5-დღიანი პროგნოზის მონაცემები
- `null` თუ ჯერ არ არის ჩატვირთული

#### `isLoading: boolean`
- `true` - მონაცემები იტვირთება
- `false` - დასრულებულია ან არ არის დაწყებული

#### `error: string | null`
- შეცდომის შეტყობინება თუ რამე არასწორად წავიდა
- `null` თუ შეცდომა არ არის

### ფუნქციები

#### `fetchWeather(city: string)`
- **აღწერა:** ასინქრონულად იღებს ქალაქის ამინდის მონაცემებს
- **პარამეტრები:**
  - `city` - ქალაქის სახელი
- **დაბრუნება:** `Promise<WeatherData | null>`
- **გვერდითი ეფექტები:**
  - ანულებს წინა weather და forecast მონაცემებს
  - აყენებს isLoading = true
  - წარმატების შემთხვევაში განაახლებს weather state-ს
  - შეცდომის შემთხვევაში აყენებს error state-ს

#### `fetchForecast(city: string)`
- **აღწერა:** ასინქრონულად იღებს პროგნოზის მონაცემებს
- **პარამეტრები:**
  - `city` - ქალაქის სახელი
- **დაბრუნება:** `Promise<ForecastData | null>`
- **გვერდითი ეფექტები:**
  - იგივე რაც fetchWeather-ში
  - განაახლებს forecast state-ს

### გამოყენების მაგალითი

```typescript
function MyComponent() {
  const { weather, forecast, isLoading, error, fetchWeather, fetchForecast } = useWeather();
  
  useEffect(() => {
    fetchWeather("Tbilisi");
  }, []);
  
  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage text={error} />;
  
  return (
    <div>
      <p>Temperature: {weather?.main.temp}°C</p>
    </div>
  );
}
```

### სად გამოიყენება
- `components/Header/Header.tsx` - search functionality
- `components/MainContent/MainContent.tsx` - suggested cities
- `components/Cards/RecentlySearch/RecentlySearch.tsx` - recent city cards

### დამოკიდებულებები
- `services/weatherApi.ts` - API calls
- `types/weather.types.ts` - TypeScript types

---

## English

### Purpose
React custom hook for managing weather data and API interactions.

### States

#### `weather: WeatherData | null`
- Current weather data
- `null` if not yet loaded

#### `forecast: ForecastData | null`
- 5-day forecast data
- `null` if not yet loaded

#### `isLoading: boolean`
- `true` - Data is being fetched
- `false` - Completed or not started

#### `error: string | null`
- Error message if something went wrong
- `null` if no error

### Functions

#### `fetchWeather(city: string)`
- **Description:** Asynchronously fetches weather data for a city
- **Parameters:**
  - `city` - City name
- **Returns:** `Promise<WeatherData | null>`
- **Side Effects:**
  - Resets previous weather and forecast data
  - Sets isLoading = true
  - On success, updates weather state
  - On error, sets error state

#### `fetchForecast(city: string)`
- **Description:** Asynchronously fetches forecast data
- **Parameters:**
  - `city` - City name
- **Returns:** `Promise<ForecastData | null>`
- **Side Effects:**
  - Same as fetchWeather
  - Updates forecast state

### Usage Example

```typescript
function MyComponent() {
  const { weather, forecast, isLoading, error, fetchWeather, fetchForecast } = useWeather();
  
  useEffect(() => {
    fetchWeather("Tbilisi");
  }, []);
  
  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage text={error} />;
  
  return (
    <div>
      <p>Temperature: {weather?.main.temp}°C</p>
    </div>
  );
}
```

### Where it's used
- `components/Header/Header.tsx` - search functionality
- `components/MainContent/MainContent.tsx` - suggested cities
- `components/Cards/RecentlySearch/RecentlySearch.tsx` - recent city cards

### Dependencies
- `services/weatherApi.ts` - API calls
- `types/weather.types.ts` - TypeScript types
