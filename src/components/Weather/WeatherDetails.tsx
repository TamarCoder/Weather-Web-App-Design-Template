/**
 * WEATHER DETAILS COMPONENT
 * 
 * რას უნდა შეიცავდეს:
 * - Humidity (ტენიანობა) %
 * - Wind Speed (ქარის სიჩქარე) km/h or mph
 * - Pressure (წნევა) hPa
 * - Visibility (ხილვადობა) km
 * - UV Index - optional
 * - Sunrise time
 * - Sunset time
 * - Grid layout ამ მონაცემებისთვის
 * 
 * რას აკეთებს:
 * - დეტალური ამინდის პარამეტრების ჩვენება
 * - icon + label + value თითოეული პარამეტრისთვის
 * - Responsive grid (2 columns mobile, 3-4 desktop)
 * 
 * სად იმპორტდება:
 * - src/app/page.tsx - WeatherCard-ის ქვემოთ
 * 
 * რა props უნდა მიიღოს:
 * - არაფერი (Zustand store-დან currentWeather)
 * 
 * რა icons დაგჭირდება:
 * - lucide-react: Droplets, Wind, Gauge, Eye, Sunrise, Sunset
 */
