# Zustand Store

## ქართული

### მიზანი

გლობალური state management Zustand-ის გამოყენებით. ინახავს აპლიკაციის მთავარ state-ებს.

### State-ები

#### City Management

- **`recentCities: string[]`** - ბოლო 5 მოძებნილი ქალაქი
- **`selectedCity: string | null`** - ამჟამად არჩეული ქალაქი RightSidebar-ში

#### Weather Cache

- **`weatherCache: Record<string, WeatherData>`** - დაქეშილი weather მონაცემები ქალაქების მიხედვით
- **`forecastCache: Record<string, ForecastData>`** - დაქეშილი forecast მონაცემები

#### UI State

- **`isRightSidebarOpen: boolean`** - მარჯვენა sidebar-ის მდგომარეობა (ღია/დახურული)

### Actions (ფუნქციები)

#### `addRecentCity(city: string)`

- **აღწერა:** ამატებს ქალაქს recent cities სიაში
- **ლოგიკა:**
  - შლის დუბლიკატებს (თუ უკვე არსებობს)
  - ათავსებს სიის დასაწყისში
  - ინახავს მაქსიმუმ 5 ქალაქს
- **გამოყენება:**
  ```typescript
  const addRecentCity = useStore((state) => state.addRecentCity);
  addRecentCity("Tbilisi");
  ```

#### `setSelectedCity(city: string | null)`

- **აღწერა:** აყენებს არჩეულ ქალაქს
- **გამოყენება:** RightSidebar-ის გასახსნელად

#### `toggleRightSidebar()`

- **აღწერა:** ცვლის RightSidebar-ის მდგომარეობას (ღია ↔ დახურული)
- **გამოყენება:**
  ```typescript
  const toggle = useStore((state) => state.toggleRightSidebar);
  toggle(); // ხსნის თუ დახურულია, დახურავს თუ ღიაა
  ```

#### `setWeatherCache(city: string, data: WeatherData)`

- **აღწერა:** ინახავს weather მონაცემებს cache-ში
- **მიზანი:** თავიდან აცილება ხელახალი API დარეკვას
- **გამოყენება:**
  ```typescript
  const setWeatherCache = useStore((state) => state.setWeatherCache);
  const weather = await fetchWeather("Paris");
  setWeatherCache("Paris", weather);
  ```

#### `setForecastCache(city: string, data: ForecastData)`

- **აღწერა:** ინახავს forecast მონაცემებს cache-ში
- **მიზანი:** იგივე რაც weather cache-ის

### Store-ის გამოყენება კომპონენტში

```typescript
// მხოლოდ საჭირო state-ების წაღება
const recentCities = useStore((state) => state.recentCities);

// ერთდროულად რამდენიმე state/action-ის წაღება
const [selectedCity, weatherCache, addRecentCity] = useStore((state) => [
  state.selectedCity,
  state.weatherCache,
  state.addRecentCity,
]);
```

### სად გამოიყენება

- `components/Header/Header.tsx` - addRecentCity, setWeatherCache
- `components/MainContent/MainContent.tsx` - weatherCache, addRecentCity
- `components/RightSidebar/RightSidebar.tsx` - selectedCity, weatherCache, forecastCache
- `components/Cards/RecentlySearch/RecentlySearch.tsx` - recentCities, toggleRightSidebar

### მნიშვნელობები

- Cache ამცირებს API calls-ს
- Store არ ინახება localStorage-ში (refresh-ზე იშლება)
- Zustand არ საჭიროებს Provider-ს

---

## English

### Purpose

Global state management using Zustand. Stores application's main states.

### States

#### City Management

- **`recentCities: string[]`** - Last 5 searched cities
- **`selectedCity: string | null`** - Currently selected city in RightSidebar

#### Weather Cache

- **`weatherCache: Record<string, WeatherData>`** - Cached weather data by city
- **`forecastCache: Record<string, ForecastData>`** - Cached forecast data

#### UI State

- **`isRightSidebarOpen: boolean`** - Right sidebar state (open/closed)

### Actions (Functions)

#### `addRecentCity(city: string)`

- **Description:** Adds city to recent cities list
- **Logic:**
  - Removes duplicates (if already exists)
  - Places at the beginning of the list
  - Keeps maximum 5 cities
- **Usage:**
  ```typescript
  const addRecentCity = useStore((state) => state.addRecentCity);
  addRecentCity("Tbilisi");
  ```

#### `setSelectedCity(city: string | null)`

- **Description:** Sets the selected city
- **Usage:** To open RightSidebar with city details

#### `toggleRightSidebar()`

- **Description:** Toggles RightSidebar state (open ↔ closed)
- **Usage:**
  ```typescript
  const toggle = useStore((state) => state.toggleRightSidebar);
  toggle(); // Opens if closed, closes if open
  ```

#### `setWeatherCache(city: string, data: WeatherData)`

- **Description:** Stores weather data in cache
- **Purpose:** Prevents redundant API calls
- **Usage:**
  ```typescript
  const setWeatherCache = useStore((state) => state.setWeatherCache);
  const weather = await fetchWeather("Paris");
  setWeatherCache("Paris", weather);
  ```

#### `setForecastCache(city: string, data: ForecastData)`

- **Description:** Stores forecast data in cache
- **Purpose:** Same as weather cache

### Using Store in Components

```typescript
// Getting only needed states
const recentCities = useStore((state) => state.recentCities);

// Getting multiple states/actions at once
const [selectedCity, weatherCache, addRecentCity] = useStore((state) => [
  state.selectedCity,
  state.weatherCache,
  state.addRecentCity,
]);
```

### Where it's used

- `components/Header/Header.tsx` - addRecentCity, setWeatherCache
- `components/MainContent/MainContent.tsx` - weatherCache, addRecentCity
- `components/RightSidebar/RightSidebar.tsx` - selectedCity, weatherCache, forecastCache
- `components/Cards/RecentlySearch/RecentlySearch.tsx` - recentCities, toggleRightSidebar

### Notes

- Cache reduces API calls
- Store is not persisted in localStorage (clears on refresh)
- Zustand doesn't require Provider
