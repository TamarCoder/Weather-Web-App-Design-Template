# 🎨 UI Components

ყველა გამოყენებადი და მრავალჯერადი UI კომპონენტი აპლიკაციისთვის.

## 📦 კომპონენტების ჩამონათვალი

### 1. 🔘 Button

**რას აკეთებს:**

- მრავალფუნქციური ღილაკის კომპონენტი
- მხარს უჭერს სხვადასხვა ვარიანტებს, ზომებს და loading states-ს

**Props:**

```typescript
interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}
```

**გამოყენება:**

```tsx
import { Button } from '@/components/UI';

<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>

<Button variant="outline" isLoading>
  Loading...
</Button>
```

**სად გამოიყენება:**

- ErrorBoundary - reload ღილაკი
- ყველგან სადაც CTA ღილაკი საჭიროა

---

### 2. 🔍 Input

**რას აკეთებს:**

- მრავალფუნქციური input კომპონენტი
- Search, text, email, password ტიპები
- Icon support (left/right)
- Error handling და validation
- Accessibility support (ARIA labels)

**Props:**

```typescript
interface InputProps {
  type: "text" | "password" | "email" | "textarea" | "search";
  name: string;
  placeholder: string;
  value?: string;
  onChange?: (e) => void;
  onEnter?: () => void;
  error?: string;
  disabled?: boolean;
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  "aria-label"?: string;
  "aria-describedby"?: string;
}
```

**გამოყენება:**

```tsx
import { Input } from "@/components/UI";

<Input
  type="search"
  name="search"
  placeholder="Search for a city..."
  icon={<IoSearch />}
  iconPosition="left"
  value={searchValue}
  onChange={(e) => setSearchValue(e.target.value)}
  onEnter={handleSearch}
  aria-label="Search for city weather"
/>;
```

**სად გამოიყენება:**

- Header - city search input
- ნებისმიერი ფორმა

---

### 3. ⏳ Loader

**რას აკეთებს:**

- Loading spinner indicator
- Fullscreen overlay ოფცია
- მხარს უჭერს სხვადასხვა ზომებს
- ტექსტის ჩვენება (optional)

**Props:**

```typescript
interface LoaderProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  fullscreen?: boolean;
}
```

**გამოყენება:**

```tsx
import { Loader } from '@/components/UI';

// ჩვეულებრივი loader
<Loader size="md" />

// ტექსტით
<Loader size="lg" text="Loading weather data..." />

// Fullscreen overlay
<Loader fullscreen text="Please wait..." />
```

**სად გამოიყენება:**

- API მოთხოვნების დროს
- Data fetching states
- Page transitions

---

### 4. 💀 SkeletonLoader

**რას აკეთებს:**

- Placeholder animations loading დროს
- სხვადასხვა ვარიანტები (card, hourly, daily, search)
- UX გაუმჯობესება - მომხმარებელმა იცის რომ იტვირთება

**Props:**

```typescript
interface SkeletonLoaderProps {
  variant?: "card" | "hourly" | "daily" | "search";
  count?: number;
}
```

**გამოყენება:**

```tsx
import { SkeletonLoader } from '@/components/UI';

// ერთი skeleton card
<SkeletonLoader variant="card" />

// 3 skeleton hourly cards
<SkeletonLoader variant="hourly" count={3} />

// Search skeleton
<SkeletonLoader variant="search" />
```

**ვარიანტები:**

- `card` - დიდი weather card placeholder
- `hourly` - hourly forecast placeholder
- `daily` - daily forecast placeholder
- `search` - search result placeholder

**სად გამოიყენება:**

- RecentlySearch - cards loading state
- MoreSuggestions - suggestions loading
- WeatherCard - data fetching
- ყველა რამე loading state

---

### 5. ❌ ErrorMessage

**რას აკეთებს:**

- Error შეტყობინებების ჩვენება
- Warning და Info ტიპებიც მხარდაჭერილია
- Retry ფუნქციონალი (optional)
- Dismissible - დახურვის ღილაკი

**Props:**

```typescript
interface ErrorMessageProps {
  message: string;
  type?: "error" | "warning" | "info";
  onRetry?: () => void;
  onDismiss?: () => void;
}
```

**გამოყენება:**

```tsx
import { ErrorMessage } from '@/components/UI';

<ErrorMessage
  message="City not found. Please try again."
  type="error"
  onRetry={handleRetry}
/>

<ErrorMessage
  message="Weather data is outdated"
  type="warning"
/>
```

**Icons:**

- `error` ⚠️ - AlertCircle
- `warning` ⚠️ - AlertTriangle
- `info` ℹ️ - Info

**სად გამოიყენება:**

- WeatherCard - API errors
- Header - search errors
- ნებისმიერი error state

---

## 🎯 ზოგადი გამოყენება

ყველა კომპონენტი ექსპორტირებულია `index.ts`-დან:

```tsx
import { Button, Input, Loader, SkeletonLoader } from "@/components/UI";
```

## 📝 სტილების მიდგომა

- ყველა კომპონენტს აქვს თავისი `.module.scss` ფაილი
- გამოიყენება CSS Modules (scoped styles)
- SCSS variables იმპორტირებულია `_variables.scss`-დან
- Responsive breakpoints: mobile, tablet, desktop

## ♿ Accessibility

ყველა კომპონენტი აკმაყოფილებს WCAG 2.1 AA სტანდარტებს:

- ✅ ARIA labels და roles
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Screen reader support
- ✅ Semantic HTML

## 🎨 თემატიზაცია

კომპონენტები იყენებენ CSS custom properties:

```scss
--primary-color: #667eea --text-color: #1f2937 --border-radius: 0.5rem;
```

## 🔄 გამოყენების მაგალითები

### ფორმა Input + Button-ით

```tsx
<form onSubmit={handleSubmit}>
  <Input
    type="email"
    name="email"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    error={emailError}
  />

  <Button variant="primary" type="submit" isLoading={isSubmitting}>
    Subscribe
  </Button>
</form>
```

### Loading State SkeletonLoader-ით

```tsx
{
  isLoading ? <SkeletonLoader variant="card" count={3} /> : <WeatherCards data={weatherData} />;
}
```

### Error Handling

```tsx
{
  error && <ErrorMessage message={error} type="error" onRetry={() => fetchWeather(city)} />;
}
```

---

## 📚 დამატებითი ინფორმაცია

თითოეული კომპონენტის დეტალური დოკუმენტაციისთვის იხილეთ:

- TypeScript interfaces კომპონენტების `.tsx` ფაილებში
- SCSS სტილები `.module.scss` ფაილებში
- Usage examples საერთო კოდბაზაში

## 🚀 ახალი კომპონენტის დამატება

1. შექმენი `ComponentName.tsx` და `ComponentName.module.scss`
2. დაამატე TypeScript interface props-ისთვის
3. იმპლემენტაცია გაუკეთე accessibility-ს გათვალისწინებით
4. ექსპორტი გაუკეთე `index.ts`-ში
5. განაახლე ეს README ფაილი
