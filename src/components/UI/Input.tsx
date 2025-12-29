"use client";
import React, { useState } from "react";
import styles from "./Input.module.scss";
import { FieldValues, Path } from "react-hook-form";
import { InputProps } from "@/types/input.type";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const Input = <TFormValues extends FieldValues = FieldValues>({
  type,
  name,
  placeholder,
  error,
  disabled = false,
  label,
  register,
  icon,
  iconPosition,
  className,
  value,
  onChange,
  onEnter,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedby,
}: InputProps<TFormValues>) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const inputType = type === "password" && showPassword ? "text" : type;
  const isPasswordField = type === "password";

  const hasLeftIcon = icon && iconPosition === "left";
  const hasRightIcon = (icon && iconPosition === "right") || isPasswordField;

  const inputFieldClasses = `${styles.inputField} ${className ? styles[className] : ""} ${
    error ? styles.error : ""
  } ${disabled ? styles.disabled : ""} ${
    hasLeftIcon ? styles.withLeftIcon : ""
  } ${hasRightIcon ? styles.withRightIcon : ""}`;

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputItem}>
        {icon && iconPosition === "left" && <span className={styles.leftSide}>{icon}</span>}
        <input
          id={name}
          value={value}
          type={inputType}
          placeholder={placeholder}
          disabled={disabled}
          className={inputFieldClasses}
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter" && onEnter) {
              onEnter();
            }
          }}
          aria-label={ariaLabel}
          aria-describedby={error ? `${name}-error` : ariaDescribedby}
          aria-invalid={!!error}
          {...(register && register(name as Path<TFormValues>))}
        />
        {icon && iconPosition === "right" && !isPasswordField && (
          <span className={styles.rightSide}>{icon}</span>
        )}
        {isPasswordField && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={styles.passwordToggle}
            disabled={disabled}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <AiOutlineEye className={styles.icon} />
            ) : (
              <AiOutlineEyeInvisible className={styles.icon} />
            )}
          </button>
        )}
      </div>
      {error && (
        <div className={styles.errorMessage} id={`${name}-error`} role="alert">
          {error}
        </div>
      )}
    </div>
  );
};
