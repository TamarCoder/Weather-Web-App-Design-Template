/**
 * USE GEOLOCATION HOOK
 *
 * რას უნდა შეიცავდეს:
 * - getCurrentPosition() - browser geolocation
 * - latitude, longitude state
 * - isLoading state
 * - error state
 * - Permission status check
 *
 * რას აკეთებს:
 * - Browser Geolocation API გამოყენება
 * - მომხმარებლის coordinates-ის მოპოვება
 * - weatherApi-ში getWeatherByCoordinates გამოძახება
 * - Permission denied error handling
 *
 * სად იმპორტდება:
 * - SearchCity component (location button)
 * - Header component (location icon)
 *
 * რა return უნდა უბრუნოს:
 * - {
 *     getCurrentPosition: () => Promise<void>,
 *     coordinates: { lat: number, lon: number } | null,
 *     isLoading: boolean,
 *     error: string | null
 *   }
 *
 * რა packages დაგჭირდება:
 * - react (useState, useCallback)
 * - Browser Geolocation API (navigator.geolocation)
 */
