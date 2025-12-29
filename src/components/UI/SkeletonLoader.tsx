import styles from "./SkeletonLoader.module.scss";

interface SkeletonLoaderProps {
  variant?: "card" | "hourly" | "daily" | "search";
  count?: number;
}

export default function SkeletonLoader({ variant = "card", count = 1 }: SkeletonLoaderProps) {
  const renderSkeleton = () => {
    switch (variant) {
      case "card":
        return (
          <div className={styles.skeletonCard}>
            <div className={styles.skeletonHeader}>
              <div className={styles.skeletonTitle}></div>
              <div className={styles.skeletonSubtitle}></div>
            </div>
            <div className={styles.skeletonContent}>
              <div className={styles.skeletonCircle}></div>
              <div className={styles.skeletonText}></div>
              <div className={styles.skeletonTextShort}></div>
            </div>
          </div>
        );

      case "hourly":
        return (
          <div className={styles.skeletonHourly}>
            <div className={styles.skeletonTime}></div>
            <div className={styles.skeletonIcon}></div>
            <div className={styles.skeletonTemp}></div>
          </div>
        );

      case "daily":
        return (
          <div className={styles.skeletonDaily}>
            <div className={styles.skeletonDay}></div>
            <div className={styles.skeletonIcon}></div>
            <div className={styles.skeletonTempRange}></div>
          </div>
        );

      case "search":
        return (
          <div className={styles.skeletonSearch}>
            <div className={styles.skeletonIconSmall}></div>
            <div className={styles.skeletonInfo}>
              <div className={styles.skeletonCity}></div>
              <div className={styles.skeletonTime}></div>
            </div>
            <div className={styles.skeletonTempSmall}></div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.skeletonContainer}>
      {Array.from({ length: count }, (_, i) => (
        <div key={i}>{renderSkeleton()}</div>
      ))}
    </div>
  );
}
