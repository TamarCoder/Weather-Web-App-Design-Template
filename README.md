# Weather Application / ამინდის აპლიკაცია

[🇬🇧 English](#english) | [🇬🇪 ქართული](#georgian)

---

## <a name="english"></a>🇬🇧 English

### Project Description
A modern weather application built with Next.js, using OpenWeatherMap API for real-time weather data.

### Features
- 🔍 **City Search** - Search weather for any city
- 📍 **Recent Searches** - History of last 5 searched cities
- 🌤️ **Current Weather** - Temperature and weather conditions
- 📊 **Hourly Forecast** - 8-hour detailed forecast
- 📅 **7-Day Forecast** - Weekly weather forecast
- 🎨 **Dynamic Icons** - Weather and temperature-based icons
- 🌈 **Gradients** - Weather condition-based background colors
- 💡 **Suggestions** - Random city suggestions

### Technologies
- **Framework:** Next.js 16.1.1 (App Router)
- **Language:** TypeScript
- **Styling:** SCSS Modules
- **State Management:** Zustand
- **HTTP Client:** Axios
- **Icons:** Lucide React, React Icons
- **API:** OpenWeatherMap

### Directory Structure
```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Cards/            # Card components
│   │   ├── DailyForecast/
│   │   ├── HourlyForecast/
│   │   ├── MoreSuggestions/
│   │   ├── RecentlySearch/
│   │   └── WeatherCard/
│   ├── Header/           # Header component (Search)
│   ├── LeftSidebar/      # Left Sidebar
│   ├── MainContent/      # Main content
│   ├── RightSidebar/     # Right Sidebar (details)
│   └── UI/               # UI components
├── constants/            # Constants
├── hooks/                # Custom React Hooks
├── services/             # API services
├── store/                # Zustand Store
├── styles/               # Global styles
├── types/                # TypeScript types
└── utils/                # Utility functions
```

### Getting Started

#### 1. Installation
```bash
npm install
# or
yarn install
```

#### 2. Environment Variables
Create `.env.local` file:
```env
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
```

To get OpenWeatherMap API Key:
1. Go to [OpenWeatherMap](https://openweathermap.org/)
2. Sign up
3. Navigate to API Keys section
4. Copy your API Key

#### 3. Run Development Server
```bash
npm run dev
# or
yarn dev
```

Application will open at [http://localhost:3000](http://localhost:3000)

#### 4. Build for Production
```bash
npm run build
npm run start
```

### Component Documentation
Each folder contains a `README.md` file with detailed explanations:
- [`src/services/README.md`](src/services/README.md) - API services documentation
- [`src/hooks/README.md`](src/hooks/README.md) - Custom hooks documentation
- [`src/store/README.md`](src/store/README.md) - Zustand store documentation
- [`src/utils/README.md`](src/utils/README.md) - Utility functions documentation
- [`src/constants/README.md`](src/constants/README.md) - Constants documentation

### Main Functionality Flow

#### City Search:
1. User enters city in Header
2. `useWeather` hook calls `fetchWeather()`
3. Data is stored in `weatherCache`
4. City is added to `recentCities`
5. RecentlySearch component updates

#### Card Click:
1. User clicks on RecentlySearch card
2. `setSelectedCity()` - selects city
3. `toggleRightSidebar()` - opens sidebar
4. `fetchForecast()` - fetches forecast
5. RightSidebar shows detailed information

### Scripts
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

### Future Improvements
- [ ] localStorage persistence (recent searches)
- [ ] Geolocation support
- [ ] Dark/Light mode toggle
- [ ] Weather alerts
- [ ] Multiple language support
- [ ] PWA support
- [ ] Unit tests

### License
MIT

---

## <a name="georgian"></a>🇬🇪 ქართული

### პროექტის აღწერა
თანამედროვე ამინდის აპლიკაცია Next.js-ზე აგებული, რომელიც იყენებს OpenWeatherMap API-ს რეალურ-დროის ამინდის მონაცემების მოსაძიებად.

### ფუნქციონალი
- 🔍 **ქალაქის ძებნა** - ნებისმიერი ქალაქის ამინდის ძიება
- 📍 **ბოლო ძებნები** - ბოლო 5 მოძებნილი ქალაქის ისტორია
- 🌤️ **მიმდინარე ამინდი** - ტემპერატურა და ამინდის პირობები
- 📊 **საათობრივი პროგნოზი** - 8-საათიანი დეტალური პროგნოზი
- 📅 **7-დღიანი პროგნოზი** - კვირის ამინდის პროგნოზი
- 🎨 **დინამიური აიქონები** - ამინდისა და ტემპერატურის შესაბამისი აიქონები
- 🌈 **გრადიენტები** - ამინდის პირობებზე დაფუძნებული ფონის ფერები
- 💡 **შემოთავაზებები** - რენდომული ქალაქების შემოთავაზება

### ტექნოლოგიები
- **Framework:** Next.js 16.1.1 (App Router)
- **ენა:** TypeScript
- **სტილები:** SCSS Modules
- **State Management:** Zustand
- **HTTP Client:** Axios
- **აიქონები:** Lucide React, React Icons
- **API:** OpenWeatherMap

### დირექტორიის სტრუქტურა
```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # მთავარი გვერდი
├── components/            # React კომპონენტები
│   ├── Cards/            # ბარათის კომპონენტები
│   │   ├── DailyForecast/
│   │   ├── HourlyForecast/
│   │   ├── MoreSuggestions/
│   │   ├── RecentlySearch/
│   │   └── WeatherCard/
│   ├── Header/           # Header კომპონენტი (ძებნა)
│   ├── LeftSidebar/      # მარცხენა Sidebar
│   ├── MainContent/      # მთავარი კონტენტი
│   ├── RightSidebar/     # მარჯვენა Sidebar (დეტალები)
│   └── UI/               # UI კომპონენტები
├── constants/            # კონსტანტები
├── hooks/                # Custom React Hooks
├── services/             # API სერვისები
├── store/                # Zustand Store
├── styles/               # გლობალური სტილები
├── types/                # TypeScript ტიპები
└── utils/                # Utility ფუნქციები
```

### დაწყება

#### 1. დაინსტალირება
```bash
npm install
# ან
yarn install
```

#### 2. Environment Variables
შექმენი `.env.local` ფაილი:
```env
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
```

OpenWeatherMap API Key მისაღებად:
1. გადადი [OpenWeatherMap](https://openweathermap.org/)-ზე
2. დარეგისტრირდი
3. გადადი API Keys სექციაში
4. დააკოპირე API Key

#### 3. Development Server-ის გაშვება
```bash
npm run dev
# ან
yarn dev
```

აპლიკაცია გაიხსნება [http://localhost:3000](http://localhost:3000)-ზე

#### 4. Production Build
```bash
npm run build
npm run start
```

### კომპონენტების დოკუმენტაცია
თითოეული ფოლდერი შეიცავს `README.md` ფაილს დეტალური ახსნებით:
- [`src/services/README.md`](src/services/README.md) - API სერვისების დოკუმენტაცია
- [`src/hooks/README.md`](src/hooks/README.md) - Custom hooks-ის დოკუმენტაცია
- [`src/store/README.md`](src/store/README.md) - Zustand store-ის დოკუმენტაცია
- [`src/utils/README.md`](src/utils/README.md) - Utility ფუნქციების დოკუმენტაცია
- [`src/constants/README.md`](src/constants/README.md) - კონსტანტების დოკუმენტაცია

### ძირითადი ფუნქციონალის ნაკადი

#### ქალაქის ძებნა:
1. User შეიყვანს ქალაქს Header-ში
2. `useWeather` hook იძახებს `fetchWeather()`-ს
3. მონაცემები ინახება `weatherCache`-ში
4. ქალაქი ემატება `recentCities`-ში
5. RecentlySearch კომპონენტი განახლდება

#### ბარათზე დაწკაპუნება:
1. User დააჭერს RecentlySearch-ის ბარათს
2. `setSelectedCity()` - იყენებს ქალაქს
3. `toggleRightSidebar()` - ხსნის sidebar-ს
4. `fetchForecast()` - იღებს პროგნოზს
5. RightSidebar აჩვენებს დეტალურ ინფორმაციას

### ბრძანებები
```bash
npm run dev       # Development server-ის გაშვება
npm run build     # Production build
npm run start     # Production server-ის გაშვება
npm run lint      # ESLint-ის გაშვება
```

### სამომავლო გაუმჯობესებები
- [ ] localStorage persistence (recent searches)
- [ ] Geolocation მხარდაჭერა
- [ ] Dark/Light mode toggle
- [ ] ამინდის გაფრთხილებები
- [ ] მრავალენოვანი მხარდაჭერა
- [ ] PWA მხარდაჭერა
- [ ] Unit ტესტები

### ლიცენზია
MIT
