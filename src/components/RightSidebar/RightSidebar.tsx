import styles from "./RightSidebar.module.scss";
import { WeatherCard, HourlyForecast, DailyForecast } from "../Cards";

export default function RightSidebar() {
  // Mock data - შემდეგში API-დან მოვა
  const hourlyData = [
    { time: "Now", icon: "/images/Group2.png", temperature: 30 },
    { time: "13:00", icon: "/images/Group2.png", temperature: 32 },
    { time: "14:00", icon: "/images/Group2.png", temperature: 32 },
  ];

  const dailyData = [
    { day: "Monday", icon: "/images/Group2.png", highTemp: 30, lowTemp: 21 },
    { day: "Tuesday", icon: "/images/Group2.png", highTemp: 28, lowTemp: 19 },
    { day: "Wednesday", icon: "/images/Group2.png", highTemp: 26, lowTemp: 18 },
    { day: "Thursday", icon: "/images/Group2.png", highTemp: 27, lowTemp: 20 },
    { day: "Friday", icon: "/images/Group2.png", highTemp: 29, lowTemp: 22 },
    { day: "Saturday", icon: "/images/Group2.png", highTemp: 29, lowTemp: 22 },
    { day: "Sunday", icon: "/images/Group2.png", highTemp: 29, lowTemp: 22 },
  ];

  return (
    <aside className={styles.rightSidebar}>
      <div className={styles.container}>
        <WeatherCard
          city="Tbilisi"
          date="Today . 12 March"
          temperature={32}
          weatherIcon="/images/Group2.png"
        />

        <HourlyForecast items={hourlyData} />

        <DailyForecast items={dailyData} />
      </div>
    </aside>
  );
}
