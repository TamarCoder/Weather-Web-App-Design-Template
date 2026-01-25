# Copilot Instructions for Weather Dashboard

## Project Overview
Weather Dashboard is a Next.js 16 + TypeScript weather application featuring real-time weather data from OpenWeatherMap API, client-side caching with Zustand, and a responsive SCSS-based UI.

## Architecture & Data Flow

### Core Structure
- **Layout Grid** (CSS Grid): Header spans full width, LeftSidebar | MainContent | RightSidebar, Footer spans full width
- **Main Entry**: `src/app/layout.tsx` wraps all pages with ErrorBoundary, Header, Sidebars, and Footer
- **Page Component**: `src/app/page.tsx` renders `MainContent` as a client component

### Data Flow Pattern
1. **API Layer** (`src/services/weatherApi.ts`): Three functions export Axios calls to OpenWeatherMap
   - `getCurrentWeather(city)` → `WeatherData`
   - `getForecast(city)` → `ForecastData`  
   - `getWeatherByCoordinates(lat, lon)` → `WeatherData`
2. **Hook Layer** (`src/hooks/useWeather.ts`): Wraps API calls with useState for loading/error states
3. **Store Layer** (`src/store/useStore.ts`): Zustand with persist middleware manages:
   - `recentCities[]` (last 5, localStorage persisted)
   - `selectedCity` (current selection)
   - `weatherCache` & `forecastCache` (Record<cityName, data>)
   - `isRightSidebarOpen` (UI state)
4. **Component Layer**: Fetch via `useWeather()`, cache results via `useStore()`, pass data down as props

### Types Foundation
- `src/types/weather.types.ts`: Defines OpenWeatherMap API response shapes (`WeatherData`, `ForecastData`, `ForecastItem`)
- All components receive typed props from `src/types/component.types.ts`

## Development Workflow

### Essential Scripts
```bash
npm run dev          # Start Next.js dev server (http://localhost:3000)
npm run build        # Production build
npm run lint         # Run ESLint on src/
npm run lint:fix     # Auto-fix linting issues
npm run format       # Prettier format src/**
npm run type-check   # TypeScript strict check (--noEmit)
```

### Code Style & Patterns

**Module Scope**: Each component/hook in its own folder with:
- `.tsx` (or `.ts` for hooks) - main implementation
- `.module.scss` - scoped styles
- `index.ts` - barrel export (for subdirectories like Cards/)

**SCSS Variables** (`src/styles/_variables.scss`):
- Colors: `$color-primary` (#222d3d), `$color-text` (#fff), `$color-secondary` (#6b7280)
- Typography: `$font-size-*`, `$font-weight-*`
- Spacing: `$spacing-*` (multiples of 4px)
- All styles are **dark theme** by default (black bg #000000)

**Component Props**: Use TypeScript interfaces from `types/component.types.ts`; avoid `any` types

**Dynamic Imports**: Use `next/dynamic` for lazy-loaded components in `MainContent` to reduce initial bundle (e.g., RecentlySearch, MoreSuggestions cards)

## Key Implementation Details

### State Management (Zustand + Persist)
- `useStore()` persists `recentCities` to localStorage via persist middleware
- Weather/forecast data cached by city name as key (not separately fetched if already cached)
- Always destructure specific state slices: `const { recentCities } = useStore(state => state.recentCities)`

### API Integration
- **Base URL**: `https://api.openweathermap.org/data/2.5`
- **Auth**: `NEXT_PUBLIC_OPENWEATHER_API_KEY` env variable (client-side, safe to expose)
- **Units**: Always request `units=metric` for Celsius temperatures
- **Error Handling**: Catch `axios.isAxiosError()` to extract API error messages; throw with readable messages
- **Rate Limiting**: No built-in throttling; rely on user interactions to avoid quota exhaustion

### Styling Conventions
- **Scoped CSS Modules**: Import as `import styles from './Component.module.scss'`; className access is object notation `styles.containerName`
- **No Tailwind**: Pure SCSS with variable-based design system
- **Responsive Design**: Use `useResponsive()` hook from `src/hooks/useResponsive.ts` for breakpoint detection
- **Gradients**: Weather-based gradients computed in `src/utils/weatherIcons.ts` (`getWeatherGradient()`)

### Utility Functions
- `getWeatherIcon(weatherCode)` → icon className from Lucide or react-icons
- `getWeatherGradient(weatherCondition)` → CSS gradient string for UI background
- `formatTemperature()`, `formatDate()` → human-readable display values
- All exported from `src/utils/index.ts`

## Component Responsibilities

| Component | Purpose | Key Dependencies |
|-----------|---------|-----------------|
| LeftSidebar | Navigation, weather mode toggle | useResponsive, useStore |
| MainContent | Grid of weather cards, suggested cities | useWeather, useStore, dynamic imports |
| RightSidebar | Detailed forecast, optional collapsible | useStore, conditional render |
| Header | Search bar, branding, geolocation button | useGeolocation, useWeather |
| Cards/WeatherCard | Displays current weather snapshot | Takes WeatherData prop |
| Cards/HourlyForecast | 8-hour forecast grid | Takes ForecastData prop |
| Cards/DailyForecast | 7-day outlook | Takes ForecastData prop |
| UI/Button, Input | Reusable primitives | Styled with module.scss |
| ErrorBoundary | Catches React errors, displays fallback | Wraps entire app in layout |

## Common Tasks

**Add New API Endpoint**: 
1. Add function to `src/services/weatherApi.ts` with Axios error handling
2. Create wrapper hook in `src/hooks/` if it needs state management
3. Type the response in `src/types/weather.types.ts`
4. Import and call from component, cache result via `useStore()`

**Add New Component**:
1. Create folder in `src/components/FeatureName/`
2. Create `FeatureName.tsx` (with "use client" if using hooks), `FeatureName.module.scss`, `index.ts`
3. Define props interface in component or import from `src/types/component.types.ts`
4. Use module SCSS for styling; import utilities from `src/utils/index.ts`

**Fix Linting/Type Errors**:
- Run `npm run lint:fix` for auto-fixes
- Run `npm run type-check` to catch TypeScript errors before build
- Fix remaining manual issues in component

## Performance Optimizations
- Code splitting with `next/dynamic` in MainContent for card components
- Weather data cached by city name in Zustand to avoid re-fetching
- localStorage persistence of recent cities via Zustand middleware
- Image optimization through Next.js Image component (if used)

## Environment Setup
- **Node.js**: No version specified; assumes modern LTS (use .nvmrc if needed)
- **Required Env Var**: `NEXT_PUBLIC_OPENWEATHER_API_KEY` (add to `.env.local` for dev)
- **No Database**: All state in-memory + localStorage, stateless API calls only

---

**Last Updated**: January 25, 2026 | **Next.js**: 16.1.1 | **React**: 19.2.3 | **TypeScript**: 5.4.0
