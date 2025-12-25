/**
 * WEATHER ICON COMPONENT
 * 
 * რას უნდა შეიცავდეს:
 * - Dynamic weather icon rendering
 * - Mapping OpenWeatherMap icon codes to Lucide icons
 * - Different sizes support
 * - Animated icons - optional
 * 
 * რას აკეთებს:
 * - icon code-ის მიხედვით შესაბამისი Lucide icon-ის ჩვენება
 * - constants/index.ts-დან WEATHER_ICONS mapping გამოყენება
 * - size prop-ით ზომის კონტროლი
 * 
 * სად იმპორტდება:
 * - WeatherCard (main weather icon)
 * - ForecastCard (forecast icons)
 * - Sidebar (recent cities icons)
 * 
 * რა props უნდა მიიღოს:
 * - iconCode: string (მაგ: "01d", "10n")
 * - size: number (default: 64)
 * - className: string (optional)
 * 
 * რა icons დაგჭირდება:
 * - lucide-react: Sun, Moon, Cloud, CloudSun, CloudMoon, CloudRain,
 *   CloudDrizzle, CloudLightning, CloudSnow, CloudFog
 */
