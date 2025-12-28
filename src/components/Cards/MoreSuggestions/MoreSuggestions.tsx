import styles from "./MoreSuggestions.module.scss";
import { SkeletonLoader } from "@/components/UI";

interface SuggestionCard {
  id: number;
  title: string;
}

interface MoreSuggestionsProps {
  cards: SuggestionCard[];
  isLoading?: boolean;
}

export default function MoreSuggestions({ cards, isLoading = false }: MoreSuggestionsProps) {
  if (isLoading) {
    return (
      <section className={styles.moreSuggestions}>
        <h1 className={styles.sectionTitle}>More Suggestions</h1>
        <div className={styles.cardsContainer}>
          <SkeletonLoader variant="search" count={2} />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.moreSuggestions}>
      <h1 className={styles.sectionTitle}>More Suggestions</h1>
      <div className={styles.cardsContainer}>
        {cards.map((card) => (
          <div key={card.id} className={styles.smallCardPlaceholder}>
             <div className={styles.smallCardTitle}>
                  <h1>Tbilisi</h1>
             </div>
             <div className={styles.smallCardIcon}>
                <img src="/images/Group2.png" alt="" className={styles.icon} />
             </div>
             <div className={styles.smallCardDegree}>
                <h1>32°</h1>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
