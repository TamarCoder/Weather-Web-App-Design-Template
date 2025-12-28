"use client";
import { Cloudy, MapPin, Menu, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import styles from "./Navigation.module.scss";

const navItems = [
  { id: "weather", icon: Cloudy, label: "Weather", tooltip: "View Weather" },
  { id: "menu", icon: Menu, label: "Menu", tooltip: "Open Menu" },
  { id: "location", icon: MapPin, label: "Location", tooltip: "Find Location" },
  { id: "settings", icon: SlidersHorizontal, label: "Settings", tooltip: "Settings" },
];

export default function Navigation() {
  const [activeItem, setActiveItem] = useState("weather");

  return (
    <nav className={styles.navigation}>
      <ul className={styles.lists}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          
          return (
            <li
              key={item.id}
              className={`${styles.item} ${isActive ? styles.active : ""}`}
              onClick={() => setActiveItem(item.id)}
              data-tooltip={item.tooltip}
            >
              <Icon className={styles.icon} />
              <p className={styles.label}>{item.label}</p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}