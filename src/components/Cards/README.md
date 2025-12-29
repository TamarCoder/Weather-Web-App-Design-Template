# 🃏 Weather Cards Components

ამინდის ინფორმაციის სხვადასხვა ტიპის card კომპონენტები.

---

## 📦 კომპონენტების ჩამონათვალი

### 1. 🌤️ WeatherCard

**რას აკეთებს:**

- მთავარი ამინდის ბარათი დღევანდელი ინფორმაციით
- ქალაქის სახელი, ტემპერატურა, ამინდის მდგომარეობა
- დინამიური ფერის გრადიენტები ამინდის მიხედვით
- Weather icons

**Props:**

```typescript
interface WeatherCardProps {
  city: string;
  temperature: number;
  condition: string;
  icon: string;
  humidity?: number;
  windSpeed?: number;
}
```

**სად გამოიყენება:**

- MainContent - მთავარი ამინდის ჩვენება
- RightSidebar - დეტალური ინფორმაცია

---

### 2. 🕐 HourlyForecast

**რას აკეთებს:**

- საათობრივი პროგნოზის ბარათი
- მომდევნო 8-24 საათის ამინდი
- Horizontal scroll carousel
- თითოეული საათი: დრო, icon, ტემპერატურა

**Props:**

```typescript
interface HourlyForecastProps {
  forecasts: Array<{
    time: string;
    temperature: number;
    icon: string;
    condition: string;
  }>;
}
```

**სად გამოიყენება:**

- RightSidebar - საათობრივი პროგნოზი

---

### 3. 📅 DailyForecast

**რას აკეთებს:**

- 7-დღიანი პროგნოზის ბარათები
- თითოეული დღე: თარიღი, icon, min/max ტემპერატურა
- კვირის დღეების ჩვენება

**Props:**

```typescript
interface DailyForecastProps {
  forecasts: Array<{
    date: string;
    day: string;
    minTemp: number;
    maxTemp: number;
    icon: string;
    condition: string;
  }>;
}
```

**სად გამოიყენება:**

- RightSidebar - დღიური პროგნოზი

---

### 4. 🔍 RecentlySearch

**რას აკეთებს:**

- ბოლოს მოძებნილი ქალაქების ჩვენება
- მაქსიმუმ 5 ბოლო ძებნა
- თითოეული ბარათი clickable - RightSidebar-ში იხსნება დეტალები
- localStorage-ში ინახება recent searches
- დინამიური ფერების გრადიენტები

**State Management:**

- `recentCities` - Zustand store-დან
- `weatherCache` - კეშირებული ამინდის მონაცემები

**გამოყენება:**

```tsx
<RecentlySearch />
```

**Features:**

- ✅ ავტომატური ინიციალიზაცია 2 რანდომ ქალაქით
- ✅ Skeleton loaders loading state-ში
- ✅ Empty state message თუ search-ები არ არის
- ✅ Click → RightSidebar გაიხსნება დეტალებით
- ✅ Keyboard navigation (Tab, Enter)
- ✅ ARIA labels accessibility-სთვის

**სად გამოიყენება:**

- MainContent - მთავარ გვერდზე

---

### 5. 💡 MoreSuggestions

**რას აკეთებს:**

- რანდომ ქალაქების შემოთავაზება
- 3 ქალაქის ჩვენება დინამიურად
- Weather data cache-დან იღებს ინფორმაციას
- Small compact cards

**Props:**

```typescript
interface MoreSuggestionsProps {
  cities: string[];
  weatherCache: Record<string, WeatherData>;
  isLoading?: boolean;
  onCityClick?: (city: string) => void;
}
```

**გამოყენება:**

```tsx
<MoreSuggestions
  cities={suggestedCities}
  weatherCache={weatherCache}
  onCityClick={handleCityClick}
/>
```

**Features:**

- ✅ რანდომ ქალაქები SUGGESTED_CITIES-დან
- ✅ Skeleton loaders
- ✅ Click handler - RightSidebar toggle
- ✅ Keyboard accessible
- ✅ Lazy loaded weather icons

**სად გამოიყენება:**

- MainContent - დამატებითი შემოთავაზებები

---

## 🎨 საერთო Features

### დინამიური გრადიენტები

ყველა ბარათი იყენებს `getWeatherGradient()` utility-ს:

```typescript
const gradient = getWeatherGradient(weatherMain, temperature);
// Returns: linear-gradient based on weather condition
```

**გრადიენტების ტიპები:**

- ☀️ Clear/Sunny - ყვითელი → ნარინჯისფერი
- ☁️ Clouds - მუქი ნაცრისფერი
- 🌧️ Rain - ლურჯი → მუქი ლურჯი
- ⛈️ Thunderstorm - მუქი იისფერი
- 🌨️ Snow - ღია ნაცრისფერი → თეთრი
- 🌫️ Mist/Fog - ღია ნაცრისფერი

### Weather Icons

`getWeatherIcon()` utility აბრუნებს შესაბამის icon-ს:

```typescript
const iconUrl = getWeatherIcon(weatherMain, temperature);
```

### Loading States

ყველა card-ს აქვს skeleton loader:

```tsx
{
  !cityWeather ? <SkeletonLoader variant="card" /> : <WeatherCard data={cityWeather} />;
}
```

---

## 🔄 Data Flow

```
User Search → fetchWeather() → weatherCache (Zustand)
                    ↓
            Cards read from cache
                    ↓
            Display with gradients & icons
```

### Cache სტრატეგია:

1. ძებნისას იძახება `fetchWeather(city)`
2. მონაცემები ინახება `weatherCache[city]`
3. Cards ოპტიმიზებულია - არ აკეთებენ API calls თუ cache-ში არის

---

## 📱 Responsive Design

ყველა card responsive-ია:

- **Mobile** (< 640px): Stack vertically, full width
- **Tablet** (640-1024px): 2 columns grid
- **Desktop** (> 1024px): 3+ columns grid

---

## ♿ Accessibility

- ✅ `role="button"` clickable cards-ზე
- ✅ `tabIndex={0}` keyboard navigation
- ✅ `aria-label` descriptive labels
- ✅ `aria-busy` loading states-ზე
- ✅ Keyboard events (Enter, Space)
- ✅ Focus-visible styles

---

## 🎯 გამოყენების მაგალითი

```tsx
import { RecentlySearch, MoreSuggestions, WeatherCard } from "@/components/Cards";

function MainContent() {
  return (
    <div>
      {/* Recent searches */}
      <RecentlySearch />

      {/* City suggestions */}
      <MoreSuggestions
        cities={suggestedCities}
        weatherCache={weatherCache}
        onCityClick={handleClick}
      />

      {/* Selected weather */}
      {selectedCity && <WeatherCard city={selectedCity} />}
    </div>
  );
}
```

---

## 📊 State Management

Cards იყენებენ Zustand store-ს:

```typescript
const recentCities = useStore((state) => state.recentCities);
const weatherCache = useStore((state) => state.weatherCache);
const setWeatherCache = useStore((state) => state.setWeatherCache);
const addRecentCity = useStore((state) => state.addRecentCity);
```

---

## 🚀 Performance

- ✅ Code splitting (`dynamic import`)
- ✅ Weather data caching
- ✅ Lazy loaded images (`loading="lazy"`)
- ✅ Skeleton loaders (perceived performance)
- ✅ Memoized components (React.memo where needed)

---

## 🎨 Customization

თითოეული card-ის სტილები:

- `CardName.module.scss` - SCSS Modules
- CSS Variables - `_variables.scss`
- Dynamic inline styles - gradients

---

## 📝 ახალი Card-ის დამატება

1. შექმენი `NewCard/` ფოლდერი `Cards/`-ში
2. `NewCard.tsx` + `NewCard.module.scss`
3. Props interface TypeScript-ით
4. ექსპორტი `Cards/index.ts`-ში
5. გამოიყენე საერთო utilities (gradients, icons)
6. დაამატე accessibility features
7. განაახლე ეს README
