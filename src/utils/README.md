# Weather Icons Utility

## ქართული

### მიზანი

ამინდის პირობებისა და ტემპერატურის მიხედვით სწორი აიქონის და გრადიენტის არჩევა.

### ფუნქციები

#### `getWeatherIcon(weatherMain: string, temperature: number): string`

- **აღწერა:** აბრუნებს შესაბამის აიქონის path-ს ამინდის პირობების მიხედვით
- **პარამეტრები:**
  - `weatherMain` - ამინდის ტიპი OpenWeatherMap API-დან ("Clear", "Clouds", "Rain" და ა.შ.)
  - `temperature` - ტემპერატურა ცელსიუსში
- **დაბრუნება:** აიქონის path (`/images/sun.png`, `/images/clouds.png`, და ა.შ.)

#### Mapping ლოგიკა:

- **"Clear"** → `/images/sun.png` (მზიანი)
- **"Clouds"** →
  - თუ temp > 15°C: `/images/sun-clouds.png` (თბილი ღრუბლიანი)
  - სხვა: `/images/clouds.png` (ცივი ღრუბლიანი)
- **"Rain" / "Drizzle"** → `/images/sun-clouds-rain.png`
- **"Thunderstorm"** → `/images/lightning.png`
- **"Snow"** → `/images/clouds-snow.png`
- **"Mist" / "Fog" / "Haze"** → `/images/clouds.png`
- **Default** → `/images/sun-clouds.png`

### გამოყენების მაგალითი:

```typescript
const weatherMain = "Clouds";
const temperature = 18;
const icon = getWeatherIcon(weatherMain, temperature);
// დააბრუნებს: "/images/sun-clouds.png"
```

---

#### `getWeatherGradient(weatherMain: string, temperature: number): string`

- **აღწერა:** აბრუნებს CSS gradient-ს ამინდის პირობების მიხედვით
- **პარამეტრები:**
  - `weatherMain` - ამინდის ტიპი
  - `temperature` - ტემპერატურა
- **დაბრუნება:** CSS gradient string

#### Gradient Mapping:

- **"Clear"** (მზიანი):
  - temp > 25°C: `linear-gradient(135deg, #FDB99B 0%, #F6822C 100%)` (ცხელი ნარინჯისფერი)
  - temp > 15°C: `linear-gradient(135deg, #FFD89B 0%, #19547B 100%)` (თბილი ყვითელი-ლურჯი)
  - სხვა: `linear-gradient(135deg, #89C4F4 0%, #1F4E78 100%)` (ცივი ლურჯი)
- **"Clouds"** (ღრუბლიანი):
  - temp > 15°C: `linear-gradient(135deg, #B8C6DB 0%, #F5F7FA 100%)` (ღია ნაცრისფერი)
  - სხვა: `linear-gradient(135deg, #757F9A 0%, #D7DDE8 100%)` (მუქი ნაცრისფერი)

- **"Rain"** → `linear-gradient(135deg, #5B6467 0%, #8B9DA9 100%)` (წვიმიანი)
- **"Thunderstorm"** → `linear-gradient(135deg, #2C3E50 0%, #4CA1AF 100%)` (ქარიშხალი)
- **"Snow"** → `linear-gradient(135deg, #E6DADA 0%, #274046 100%)` (თოვლიანი)
- **"Mist/Fog"** → `linear-gradient(135deg, #BCC5CE 0%, #929FA8 100%)` (ნისლიანი)

### გამოყენების მაგალითი:

```typescript
const gradient = getWeatherGradient("Clear", 28);
// დააბრუნებს: "linear-gradient(135deg, #FDB99B 0%, #F6822C 100%)"

<div style={{ background: gradient }}>
  {/* კომპონენტის შიგთავსი */}
</div>
```

### სად გამოიყენება

- `components/Cards/RecentlySearch/RecentlySearch.tsx` - recent cities-ის ბარათებზე
- `components/Cards/MoreSuggestions/MoreSuggestions.tsx` - suggestion ბარათებზე
- `components/RightSidebar/RightSidebar.tsx` - hourly და daily forecast-ში

### დამოკიდებულებები

არ აქვს დამოკიდებულებები - სუფთა utility ფუნქციები

---

## English

### Purpose

Selects appropriate icon and gradient based on weather conditions and temperature.

### Functions

#### `getWeatherIcon(weatherMain: string, temperature: number): string`

- **Description:** Returns appropriate icon path based on weather conditions
- **Parameters:**
  - `weatherMain` - Weather type from OpenWeatherMap API ("Clear", "Clouds", "Rain", etc.)
  - `temperature` - Temperature in Celsius
- **Returns:** Icon path (`/images/sun.png`, `/images/clouds.png`, etc.)

#### Mapping Logic:

- **"Clear"** → `/images/sun.png` (sunny)
- **"Clouds"** →
  - if temp > 15°C: `/images/sun-clouds.png` (warm cloudy)
  - else: `/images/clouds.png` (cold cloudy)
- **"Rain" / "Drizzle"** → `/images/sun-clouds-rain.png`
- **"Thunderstorm"** → `/images/lightning.png`
- **"Snow"** → `/images/clouds-snow.png`
- **"Mist" / "Fog" / "Haze"** → `/images/clouds.png`
- **Default** → `/images/sun-clouds.png`

### Usage Example:

```typescript
const weatherMain = "Clouds";
const temperature = 18;
const icon = getWeatherIcon(weatherMain, temperature);
// Returns: "/images/sun-clouds.png"
```

---

#### `getWeatherGradient(weatherMain: string, temperature: number): string`

- **Description:** Returns CSS gradient based on weather conditions
- **Parameters:**
  - `weatherMain` - Weather type
  - `temperature` - Temperature
- **Returns:** CSS gradient string

#### Gradient Mapping:

- **"Clear"** (sunny):
  - temp > 25°C: `linear-gradient(135deg, #FDB99B 0%, #F6822C 100%)` (hot orange)
  - temp > 15°C: `linear-gradient(135deg, #FFD89B 0%, #19547B 100%)` (warm yellow-blue)
  - else: `linear-gradient(135deg, #89C4F4 0%, #1F4E78 100%)` (cool blue)
- **"Clouds"** (cloudy):
  - temp > 15°C: `linear-gradient(135deg, #B8C6DB 0%, #F5F7FA 100%)` (light gray)
  - else: `linear-gradient(135deg, #757F9A 0%, #D7DDE8 100%)` (dark gray)

- **"Rain"** → `linear-gradient(135deg, #5B6467 0%, #8B9DA9 100%)` (rainy)
- **"Thunderstorm"** → `linear-gradient(135deg, #2C3E50 0%, #4CA1AF 100%)` (storm)
- **"Snow"** → `linear-gradient(135deg, #E6DADA 0%, #274046 100%)` (snowy)
- **"Mist/Fog"** → `linear-gradient(135deg, #BCC5CE 0%, #929FA8 100%)` (misty)

### Usage Example:

```typescript
const gradient = getWeatherGradient("Clear", 28);
// Returns: "linear-gradient(135deg, #FDB99B 0%, #F6822C 100%)"

<div style={{ background: gradient }}>
  {/* Component content */}
</div>
```

### Where it's used

- `components/Cards/RecentlySearch/RecentlySearch.tsx` - for recent city cards
- `components/Cards/MoreSuggestions/MoreSuggestions.tsx` - for suggestion cards
- `components/RightSidebar/RightSidebar.tsx` - in hourly and daily forecast

### Dependencies

No dependencies - pure utility functions
