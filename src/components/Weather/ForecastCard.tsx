/**
 * FORECAST CARD COMPONENT
 * 
 * რას უნდა შეიცავდეს:
 * - 5-დღიანი პროგნოზი
 * - თითოეული დღისთვის: თარიღი, icon, max/min temp
 * - Weather description
 * - Horizontal scroll ან grid layout
 * - Click - დეტალური ინფო modal/expand - optional
 * 
 * რას აკეთებს:
 * - forecast data-ს ჩვენება card-ებად
 * - Zustand store-დან forecast-ის წაკითხვა
 * - დღეების დაჯგუფება (API 3-hour intervals დაჯგუფება დღეებად)
 * - responsive layout
 * 
 * სად იმპორტდება:
 * - src/app/page.tsx - WeatherDetails-ის ქვემოთ
 * 
 * რა props უნდა მიიღოს:
 * - არაფერი (Zustand store-დან forecast)
 * 
 * რა icons დაგჭირდება:
 * - lucide-react: WeatherIcon კომპონენტი, Calendar, TrendingUp, TrendingDown
 */
