// Component prop types
export interface HourlyItem {
  time: string;
  icon: string;
  temperature: number;
}

export interface DailyItem {
  day: string;
  icon: string;
  highTemp: number;
  lowTemp: number;
}

export interface WeatherCardProps {
  city: string;
  date: string;
  temperature: number;
  weatherIcon: string;
}
