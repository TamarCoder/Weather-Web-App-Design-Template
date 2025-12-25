/**
 * LOADER COMPONENT
 * 
 * რას უნდა შეიცავდეს:
 * - Loading spinner animation
 * - Multiple sizes (sm, md, lg)
 * - Optional loading text
 * - Fullscreen overlay mode - optional
 * 
 * რას აკეთებს:
 * - Loading state-ის ვიზუალიზაცია
 * - ანიმირებული spinner
 * - Fullscreen overlay თუ API request გრძელდება
 * 
 * სად იმპორტდება:
 * - WeatherCard (weather data-ს loading-ისას)
 * - ForecastCard (forecast loading)
 * - page.tsx (initial load)
 * 
 * რა props უნდა მიიღოს:
 * - size: 'sm' | 'md' | 'lg' (default: 'md')
 * - text: string (optional, მაგ: "Loading weather...")
 * - fullscreen: boolean (overlay mode)
 * 
 * რა icons დაგჭირდება:
 * - lucide-react: Loader2 (rotating spinner)
 */
