import { Loader2 } from "lucide-react";
import styles from "./Loader.module.scss";

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullscreen?: boolean;
}

export default function Loader({ 
  size = 'md', 
  text, 
  fullscreen = false 
}: LoaderProps) {
  const loaderContent = (
    <div className={`${styles.loaderContainer} ${styles[size]}`}>
      <Loader2 className={styles.spinner} />
      {text && <p className={styles.loadingText}>{text}</p>}
    </div>
  );

  if (fullscreen) {
    return (
      <div className={styles.overlay}>
        {loaderContent}
      </div>
    );
  }

  return loaderContent;
}
