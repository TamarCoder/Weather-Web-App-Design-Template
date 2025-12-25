import styles from "./Sidebar.module.scss";

export default function SidebarLeft() {
  return (
    <aside className={styles.leftSidebar}>
      <div style={{ padding: "1.5rem" }}>
        <h3 style={{ marginBottom: "1rem", fontSize: "1.125rem" }}>
          Left Sidebar
        </h3>
        <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
          Popular cities, recent searches
        </p>
      </div>
    </aside>
  );
}
