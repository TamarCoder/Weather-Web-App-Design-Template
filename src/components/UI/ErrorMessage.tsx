/**
 * ERROR MESSAGE COMPONENT
 *
 * რას უნდა შეიცავდეს:
 * - Error icon
 * - Error message text
 * - Retry button - optional
 * - Dismissible (X button) - optional
 *
 * რას აკეთებს:
 * - Error-ების ვიზუალიზაცია
 * - მომხმარებლისთვის ცხადი შეტყობინება
 * - Retry functionality (თავიდან ცდა)
 *
 * სად იმპორტდება:
 * - WeatherCard (API error)
 * - ForecastCard (forecast error)
 * - SearchCity (city not found)
 * - page.tsx (general errors)
 *
 * რა props უნდა მიიღოს:
 * - message: string
 * - onRetry: () => void (optional)
 * - onDismiss: () => void (optional)
 * - type: 'error' | 'warning' | 'info' (default: 'error')
 *
 * რა icons დაგჭირდება:
 * - lucide-react: AlertCircle, XCircle, AlertTriangle, Info, X
 */
