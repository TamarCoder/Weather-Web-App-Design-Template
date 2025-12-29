# 🛡️ ErrorBoundary Component

React Error Boundary - აპლიკაციის crash-ების დაჭერა და graceful error UI-ს ჩვენება.

---

## 📋 რას აკეთებს

Error Boundary არის React class component რომელიც:

- იჭერს JavaScript errors-ს component tree-ში
- აჩვენებს fallback UI crash-ის ნაცვლად
- ლოგავს error ინფორმაციას
- სთავაზობს recovery ოფციას (reload)

---

## 🎯 გამოყენება

### Basic Usage

```tsx
import { ErrorBoundary } from "@/components/ErrorBoundary";

<ErrorBoundary>
  <YourApp />
</ErrorBoundary>;
```

### Custom Fallback

```tsx
<ErrorBoundary fallback={<CustomErrorUI />}>
  <YourComponent />
</ErrorBoundary>
```

---

## 🔧 Props

```typescript
interface Props {
  children: ReactNode;
  fallback?: ReactNode; // Custom error UI (optional)
}
```

---

## 📱 Default Error UI

თუ `fallback` არ არის მითითებული, ErrorBoundary აჩვენებს ლამაზ default UI-ს:

```
┌─────────────────────────────┐
│         ⚠️                  │
│                             │
│ Oops! Something went wrong  │
│                             │
│  [Error message here]       │
│                             │
│    [Reload Page] Button     │
└─────────────────────────────┘
```

**Features:**

- ✅ Warning emoji icon (⚠️)
- ✅ User-friendly message
- ✅ Actual error message
- ✅ Reload button
- ✅ Gradient background
- ✅ Card-style design
- ✅ Animations (slide-in, shake)

---

## 🎨 Styling

`ErrorBoundary.module.scss`:

```scss
.errorBoundary {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.errorContent {
  background: white;
  border-radius: 1rem;
  padding: 3rem 2rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.3s ease-out;
}
```

**Animations:**

- `slideIn` - content ჩამოსვლა
- `shake` - warning icon-ის ანიმაცია

---

## ♿ Accessibility

```tsx
<div className={styles.errorBoundary} role="alert" aria-live="assertive">
  {/* Error content */}
</div>
```

- ✅ `role="alert"` - screen readers-ისთვის
- ✅ `aria-live="assertive"` - დაუყონებლივ აცნობებს
- ✅ `aria-label` reload ღილაკზე
- ✅ Semantic HTML

---

## 🔄 Lifecycle Methods

### `getDerivedStateFromError(error)`

```typescript
public static getDerivedStateFromError(error: Error): State {
  return { hasError: true, error };
}
```

- რეაქტის render phase-ში
- განაახლებს state-ს error-ის შენახვის მიზნით

### `componentDidCatch(error, errorInfo)`

```typescript
public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  console.error("ErrorBoundary caught an error:", error, errorInfo);
}
```

- რეაქტის commit phase-ში
- ლოგავს error-ს console-ში
- შეიძლება error reporting service-ში გაგზავნა

---

## 🚨 რა Errors იჭერს

ErrorBoundary იჭერს:

- ✅ Render errors
- ✅ Lifecycle method errors
- ✅ Constructor errors
- ✅ Child component errors

**არ იჭერს:**

- ❌ Event handlers errors (use try-catch)
- ❌ Async code (setTimeout, promises)
- ❌ Server-side rendering errors
- ❌ Errors in ErrorBoundary itself

---

## 🎯 სად გამოიყენება

### Root Level (layout.tsx)

```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>
          <div className={styles.layoutContainer}>{/* All app components */}</div>
        </ErrorBoundary>
      </body>
    </html>
  );
}
```

### Component Level

```tsx
<ErrorBoundary fallback={<WeatherCardError />}>
  <WeatherCard city={city} />
</ErrorBoundary>
```

---

## 🔧 Customization Examples

### Custom Fallback UI

```tsx
const CustomError = () => (
  <div>
    <h1>😕 Oops!</h1>
    <p>Something went wrong with the weather data.</p>
    <button onClick={() => window.location.reload()}>Try Again</button>
  </div>
);

<ErrorBoundary fallback={<CustomError />}>
  <WeatherDashboard />
</ErrorBoundary>;
```

### Multiple Boundaries

```tsx
<ErrorBoundary>
  {" "}
  {/* Root level */}
  <Layout>
    <ErrorBoundary fallback={<SidebarError />}>
      <Sidebar />
    </ErrorBoundary>

    <ErrorBoundary fallback={<MainError />}>
      <MainContent />
    </ErrorBoundary>
  </Layout>
</ErrorBoundary>
```

---

## 📊 Error Logging

Production-ში ჩართე error reporting:

```typescript
public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  // Log to console
  console.error("ErrorBoundary caught:", error, errorInfo);

  // Send to error tracking service
  if (process.env.NODE_ENV === 'production') {
    // Sentry.captureException(error);
    // or LogRocket.captureException(error);
  }
}
```

---

## 🧪 Testing Error Boundaries

```tsx
// Create error throwing component
const BuggyComponent = () => {
  throw new Error("Test error!");
};

// Test
<ErrorBoundary>
  <BuggyComponent />
</ErrorBoundary>;
```

---

## 🔄 Recovery Strategies

### Reload Page

```typescript
private handleReset = () => {
  this.setState({ hasError: false, error: null });
  window.location.reload();
};
```

### Reset State

```typescript
private handleRetry = () => {
  this.setState({ hasError: false, error: null });
};
```

### Navigation

```typescript
private handleGoHome = () => {
  window.location.href = '/';
};
```

---

## 📝 Best Practices

1. **Root Level Boundary**
   - ყოველთვის გქონდეს root level ErrorBoundary
   - უზრუნველყოფს fallback მთელი app-ისთვის

2. **Strategic Boundaries**
   - დაამატე boundaries critical sections-ზე
   - sidebar, main content, modals

3. **User-Friendly Messages**
   - არ აჩვენო technical error details users-ს
   - მარტივი, გასაგები ენა

4. **Error Logging**
   - ყოველთვის ლოგე errors
   - production-ში გამოიყენე error tracking

5. **Recovery Options**
   - სთავაზე retry/reload
   - navigation to safe route

---

## 🚀 Performance

- ✅ Minimal overhead
- ✅ Only activates on errors
- ✅ Lightweight class component
- ✅ No dependencies

---

## 🔗 Related

- `Button` component - Reload button
- `layout.tsx` - Root integration
- Error tracking services (Sentry, LogRocket)

---

## 📚 დამატებითი რესურსები

- [React Error Boundaries Docs](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- [Error Handling in React](https://react.dev/learn/error-boundaries)
