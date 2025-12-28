import { IoSearch } from "react-icons/io5";
import styles from "./Header.module.scss";
import { Input } from "../UI/Input";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.searchPlaceholder}>
        <Input
          placeholder="Search..."
          name="search"
          type="search"
          icon={<IoSearch />}
          iconPosition="left"
          className={styles.fillInput}
        />
      </div>
    </header>
  );
}
