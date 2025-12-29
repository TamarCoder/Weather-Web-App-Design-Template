/**
 * DATE FORMATTING UTILITIES
 *
 * რა functions უნდა შეიცავდეს:
 * - formatDate(timestamp: number): string - "Monday, Dec 25"
 * - formatTime(timestamp: number): string - "14:30"
 * - formatDateTime(timestamp: number): string - "Dec 25, 2:30 PM"
 * - getDayName(timestamp: number): string - "Monday"
 * - getRelativeDay(timestamp: number): string - "Today", "Tomorrow"
 *
 * რას აკეთებს:
 * - Unix timestamp-ის ადამიანური ფორმატით გადაქცევა
 * - date-fns library გამოყენება
 * - timezone handling
 * - ქართული/ინგლისური locale support - optional
 *
 * სად იმპორტდება:
 * - WeatherCard (თარიღი/დრო)
 * - ForecastCard (დღეების სახელები)
 * - WeatherDetails (sunrise/sunset time)
 *
 * რა packages დაგჭირდება:
 * - date-fns (format, fromUnixTime, addDays)
 */
