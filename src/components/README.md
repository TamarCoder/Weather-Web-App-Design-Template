# 📄 Layout Components

აპლიკაციის მთავარი layout კომპონენტები - Header, Sidebars, Footer.

---

## 🧩 კომპონენტების სტრუქტურა

```
┌──────────────┬─────────────┬──────────────┐
│              │   Header    │              │
│  Left        ├─────────────┤   Right      │
│  Sidebar     │    Main     │   Sidebar    │
│              │  (children) │   (optional) │
└──────────────┴─────────────┴──────────────┘
└──────────────── Footer ─────────────────────┘
```

---

## 1. 🎯 Header

**მდებარეობა:** `src/components/Header/`

**რას აკეთებს:**

- მთავარი ძიების ფუნქციონალი
- City search input
- Weather fetch და cache update

**Features:**

- ✅ Search input Icon-ით
- ✅ Enter key support
- ✅ Debounced search (performance)
- ✅ Error handling
- ✅ ARIA labels accessibility
- ✅ Responsive design

**გამოყენება:**

```tsx
<Header />
```

**State Management:**

```typescript
const [searchValue, setSearchValue] = useState("");
const addRecentCity = useStore((state) => state.addRecentCity);
const setWeatherCache = useStore((state) => state.setWeatherCache);
const { fetchWeather } = useWeather();
```

**ფუნქციონალი:**

1. მომხმარებელი ჰკრიბავს ქალაქის სახელს
2. Enter-ზე ან Submit-ზე
3. `fetchWeather(city)` - API call
4. მონაცემები `weatherCache`-ში
5. ქალაქი `recentCities`-ში (max 5)

**Icons:**

- 🔍 `IoSearch` - search icon

---

## 2. 📱 LeftSidebar

**მდებარეობა:** `src/components/LeftSidebar/`

**რას აკეთებს:**

- Navigation menu
- Popular cities
- Weather mode toggle (Celsius/Fahrenheit)
- App branding

**Sub-components:**

- `Navigation/` - Navigation menu items
- `WeatherMode/` - Temperature unit toggle

**Features:**

- ✅ Responsive - collapsible mobile-ზე
- ✅ Fixed positioning
- ✅ Smooth animations

**გამოყენება:**

```tsx
<LeftSidebar />
```

### Navigation

```tsx
<Navigation />
```

- Home, Favorites, Settings, About links
- Active state highlighting
- Icons + text labels

### WeatherMode

```tsx
<WeatherMode />
```

- Toggle °C / °F
- State saved localStorage-ში
- ყველა ტემპერატურა გადაანგარიშდება

---

## 3. 📊 RightSidebar

**მდებარეობა:** `src/components/RightSidebar/`

**რას აკეთებს:**

- დეტალური ამინდის ინფორმაცია
- Hourly forecast
- Daily forecast (7 days)
- Additional weather metrics
- Toggle open/close

**Features:**

- ✅ Collapsible sidebar
- ✅ Smooth slide animations
- ✅ Sticky positioning
- ✅ Responsive - hidden mobile-ზე by default

**State:**

```typescript
const isRightSidebarOpen = useStore((state) => state.isRightSidebarOpen);
const toggleRightSidebar = useStore((state) => state.toggleRightSidebar);
const selectedCity = useStore((state) => state.selectedCity);
```

**გამოყენება:**

```tsx
<RightSidebar />
```

**რა ინფორმაცია იჩენს:**

- 📍 Selected city name
- 🕐 Hourly forecast cards
- 📅 Daily forecast cards
- 💧 Humidity, Wind Speed
- 🌅 Sunrise/Sunset times

---

## 4. 🦶 Footer

**მდებარეობა:** `src/components/Footer/`

**რას აკეთებს:**

- Copyright info
- Developer credits
- External links (GitHub, LinkedIn, etc.)
- Version info

**Features:**

- ✅ Sticky footer (bottom of page)
- ✅ Responsive layout
- ✅ Social media links

**გამოყენება:**

```tsx
<Footer />
```

**შიგთავსი:**

- © 2025 Weather Dashboard
- Built by Tamar Khuskivadze
- GitHub, LinkedIn links
- API credit: OpenWeatherMap

---

## 🎨 Styling

ყველა კომპონენტს აქვს:

- `ComponentName.module.scss` - SCSS Modules
- Responsive breakpoints
- CSS Grid/Flexbox layouts
- Smooth transitions

### Breakpoints:

```scss
$breakpoint-mobile: 640px;
$breakpoint-tablet: 768px;
$breakpoint-desktop: 1024px;
```

---

## 📱 Responsive Behavior

### Mobile (< 640px):

```
┌─────────────────┐
│   Header        │
├─────────────────┤
│   Main Content  │
├─────────────────┤
│   Footer        │
└─────────────────┘
```

- Left Sidebar: Hidden (Hamburger menu)
- Right Sidebar: Hidden (Full screen overlay)

### Tablet (640-1024px):

```
┌──────┬──────────┐
│ Left │  Header  │
├──────┼──────────┤
│      │   Main   │
│      ├──────────┤
│      │  Footer  │
└──────┴──────────┘
```

- Left Sidebar: Visible (narrow)
- Right Sidebar: Toggle overlay

### Desktop (> 1024px):

```
┌──────┬────────┬────────┐
│      │ Header │        │
│ Left ├────────┤ Right  │
│      │  Main  │        │
│      ├────────┤        │
│      │ Footer │        │
└──────┴────────┴────────┘
```

- All visible
- Right Sidebar: Toggle slide

---

## ⚙️ Layout Configuration

`layout.tsx`-ში:

```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>
          <div className={styles.layoutContainer}>
            <LeftSidebar />

            <div className={styles.mainWrapper}>
              <Header />
              <main id="main-content" role="main">
                {children}
              </main>
              <Footer />
            </div>

            <RightSidebar />
          </div>
        </ErrorBoundary>
      </body>
    </html>
  );
}
```

---

## ♿ Accessibility

- ✅ Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ✅ ARIA landmarks და labels
- ✅ Skip to main content link
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Screen reader support

---

## 🎯 Navigation Flow

```
User clicks city →
  addRecentCity() →
    setSelectedCity() →
      toggleRightSidebar() →
        RightSidebar shows details
```

---

## 🔄 State Synchronization

Layout კომპონენტები იყენებენ Zustand store-ს:

```typescript
// Shared state
- recentCities: string[]
- selectedCity: string | null
- isRightSidebarOpen: boolean
- weatherCache: Record<string, WeatherData>

// Actions
- addRecentCity(city)
- setSelectedCity(city)
- toggleRightSidebar()
- setWeatherCache(city, data)
```

---

## 📊 Performance Tips

- ✅ Lazy load sidebars (`dynamic import`)
- ✅ Memoize heavy components
- ✅ Virtual scrolling for long lists
- ✅ Debounced search input
- ✅ CSS `will-change` for animations

---

## 🎨 Theming

Layout-ები იყენებენ CSS variables:

```scss
--header-height: 80px;
--sidebar-width: 280px;
--footer-height: 60px;
--layout-gap: 20px;
```

---

## 📝 ახალი Layout კომპონენტის დამატება

1. შექმენი ფოლდერი `components/NewComponent/`
2. `NewComponent.tsx` + `NewComponent.module.scss`
3. TypeScript interface props-ისთვის
4. დაამატე `layout.tsx`-ში
5. განაახლე responsive styles
6. ARIA labels და accessibility
7. განაახლე ეს README
