import styles from "./MainContent.module.scss";
import { RecentlySearch, MoreSuggestions } from "../Cards";

export default function MainContent() {
  // Mock data - შემდეგში API-დან მოვა
  const recentSearchCards = [
    { 
      id: 1, 
      city: "Tbilisi", 
      time: "10:00", 
      temperature: 32,
      icon: "/images/Group2.png"
    },
    { 
      id: 2, 
      city: "Tbilisi", 
      time: "10:00", 
      temperature: 32,
      icon: "/images/Group2.png"
    },
    { 
      id: 3, 
      city: "Tbilisi", 
      time: "10:00", 
      temperature: 32,
      icon: "/images/Group2.png"
    },
  ];

  const suggestionCards = [
    { id: 1, title: "Small Card 1" },
    { id: 2, title: "Small Card 2" },
  ];

  return (
    <div className={styles.mainContent}>
      <RecentlySearch cards={recentSearchCards} />
      <MoreSuggestions cards={suggestionCards} />
    </div>
  );
}
