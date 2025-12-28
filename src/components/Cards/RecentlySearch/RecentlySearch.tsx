import styles from "./RecentlySearch.module.scss";
import { SkeletonLoader } from "@/components/UI";

interface SearchCard {
  id: number;
  city: string;
  time: string;
  temperature: number;
  icon: string;
}

interface RecentlySearchProps {
  cards: SearchCard[];
  isLoading?: boolean;
}

export default function RecentlySearch({ cards, isLoading = false }: RecentlySearchProps) {
  if (isLoading) {
    return (
      <section className={styles.recentlySearch}>
        <h1 className={styles.sectionTitle}>Recently Search</h1>
        <div className={styles.cardsContainer}>
          <SkeletonLoader variant="search" count={3} />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.recentlySearch}>
      <h1 className={styles.sectionTitle}>Recently Search</h1>
      <div className={styles.cardsContainer}>
        {cards.map((card) => (
          <div key={card.id} className={styles.searchCard}>
            <div className={styles.weatherInfo}>
              <div className={styles.weatherIcon}>
                <img 
                  src={card.icon} 
                  alt={`${card.city} weather`} 
                  className={styles.icon} 
                />
              </div>
              <div className={styles.locationInfo}>
                <p className={styles.cityName}>{card.city}</p>
                <span className={styles.time}>{card.time}</span>
              </div>
            </div>
            
            <div className={styles.temperature}>
              <h1>{card.temperature}°</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
