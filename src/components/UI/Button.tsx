import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  icon,
  iconPosition = "left",
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const buttonClasses = `${styles.btn} ${styles[`btn-${variant}`]} ${styles[`btn-${size}`]} ${
    isLoading ? styles.loading : ""
  } ${className}`;

  return (
    <button className={buttonClasses} disabled={disabled || isLoading} {...props}>
      {isLoading && <span className={styles.loader}></span>}
      {!isLoading && icon && iconPosition === "left" && (
        <span className={styles.iconLeft}>{icon}</span>
      )}
      <span>{children}</span>
      {!isLoading && icon && iconPosition === "right" && (
        <span className={styles.iconRight}>{icon}</span>
      )}
    </button>
  );
}
