/**
 * SEARCH CITY COMPONENT
 * 
 * რას უნდა შეიცავდეს:
 * - Search input field
 * - Search icon
 * - Clear button (X)
 * - Search results dropdown - optional (autocomplete)
 * - Current location button
 * 
 * რას აკეთებს:
 * - ქალაქის სახელით ძიება
 * - Input change-ზე ამინდის მოთხოვნა
 * - Enter key press - search
 * - Geolocation button - მიმდინარე ლოკაციის ამინდი
 * - Loading state search-ის დროს
 * 
 * სად იმპორტდება:
 * - src/app/page.tsx - Header-ის ქვემოთ ან Header-ში
 * 
 * რა props უნდა მიიღოს:
 * - onSearch: (city: string) => void
 * - isLoading: boolean
 * 
 * რა icons დაგჭირდება:
 * - lucide-react: Search, X, MapPin, Loader2
 */
