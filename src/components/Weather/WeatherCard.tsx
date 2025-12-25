/**
 * WEATHER CARD COMPONENT
 * 
 * რას უნდა შეიცავდეს:
 * - ქალაქის სახელი და ქვეყანა
 * - მიმდინარე ტემპერატურა (დიდი ციფრები)
 * - Weather icon (მზე, ღრუბელი, წვიმა და ა.შ.)
 * - Weather description ("Partly cloudy", "Clear sky")
 * - Feels like temperature
 * - Min/Max temperature დღისთვის
 * - თარიღი და დრო
 * 
 * რას აკეთებს:
 * - მთავარი ამინდის ინფორმაციის ჩვენება
 * - Zustand store-დან currentWeather-ის წაკითხვა
 * - ტემპერატურის ერთეულის კონვერტაცია (°C/°F)
 * - Loading და Error states-ის მართვა
 * 
 * სად იმპორტდება:
 * - src/app/page.tsx - მთავარ გვერდზე (hero section)
 * 
 * რა props უნდა მიიღოს:
 * - არაფერი (state მოდის Zustand-დან)
 * 
 * რა icons დაგჭირდება:
 * - lucide-react: WeatherIcon კომპონენტი (dynamic)
 * - MapPin, Calendar, Thermometer
 */
