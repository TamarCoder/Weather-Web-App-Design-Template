import styles from './page.module.scss'

export default function Home() {
  return (
    <main className="container">
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Weather Dashboard</h1>
          <p className={styles.subtitle}>
            Get real-time weather information and forecasts for any city worldwide
          </p>
        </div>
      </section>

      {/* Weather content will be added here */}
      <section className={styles.weatherSection}>
        {/* SearchCity component */}
        {/* WeatherCard component */}
        {/* WeatherDetails component */}
        {/* ForecastCard component */}
      </section>
    </main>
  )
}
