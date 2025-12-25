import styles from "./RightSidebar.module.scss";

export default function RightSidebar() {
  return (
    <aside className={styles.rightSidebar}>
      <div style={{ padding: "1.5rem" }}>
        <h3 style={{ marginBottom: "1rem", fontSize: "1.125rem" }}>
          Right Sidebar
        </h3>
        <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
          Additional weather details
        </p>
      </div>
    </aside>
  );
}
