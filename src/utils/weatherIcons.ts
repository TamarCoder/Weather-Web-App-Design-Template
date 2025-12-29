// Weather icon mapping based on OpenWeatherMap conditions and temperature
export const getWeatherIcon = (weatherMain: string, temperature: number): string => {
  const temp = Math.round(temperature);

  // Temperature-based and condition-based logic
  switch (weatherMain.toLowerCase()) {
    case 'clear':
      return '/images/sun.png';
    
    case 'clouds':
      if (temp > 15) {
        return '/images/sun-clouds.png';
      }
      return '/images/clouds.png';
    
    case 'rain':
    case 'drizzle':
      return '/images/sun-clouds-rain.png';
    
    case 'thunderstorm':
      return '/images/lightning.png';
    
    case 'snow':
      return '/images/clouds-snow.png';
    
    case 'mist':
    case 'smoke':
    case 'haze':
    case 'dust':
    case 'fog':
    case 'sand':
    case 'ash':
    case 'squall':
    case 'tornado':
      return '/images/clouds.png';
    
    default:
      return '/images/sun-clouds.png';
  }
};

// Get gradient colors based on weather condition
export const getWeatherGradient = (weatherMain: string, temperature: number): string => {
  const temp = Math.round(temperature);

  switch (weatherMain.toLowerCase()) {
    case 'clear':
      if (temp > 25) {
        return 'linear-gradient(135deg, #FDB99B 0%, #F6822C 100%)'; // Hot sunny
      } else if (temp > 15) {
        return 'linear-gradient(135deg, #FFD89B 0%, #19547B 100%)'; // Warm sunny
      }
      return 'linear-gradient(135deg, #89C4F4 0%, #1F4E78 100%)'; // Cool sunny
    
    case 'clouds':
      if (temp > 15) {
        return 'linear-gradient(135deg, #B8C6DB 0%, #F5F7FA 100%)'; // Warm cloudy
      }
      return 'linear-gradient(135deg, #757F9A 0%, #D7DDE8 100%)'; // Cool cloudy
    
    case 'rain':
    case 'drizzle':
      return 'linear-gradient(135deg, #5B6467 0%, #8B9DA9 100%)'; // Rainy
    
    case 'thunderstorm':
      return 'linear-gradient(135deg, #2C3E50 0%, #4CA1AF 100%)'; // Stormy
    
    case 'snow':
      return 'linear-gradient(135deg, #E6DADA 0%, #274046 100%)'; // Snowy
    
    case 'mist':
    case 'fog':
    case 'haze':
      return 'linear-gradient(135deg, #BCC5CE 0%, #929FA8 100%)'; // Misty
    
    default:
      return 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)'; // Default
  }
};
