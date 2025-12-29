/**
 * Responsive Design Breakpoints & Media Query Utilities
 *
 * Mobile-first approach:
 * - Mobile: < 640px
 * - Tablet: 640px - 1024px
 * - Desktop: > 1024px
 */

// Test viewport sizes and orientation
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  large: 1280,
} as const;

// Check if viewport matches media query
export const matchMedia = (query: string): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia(query).matches;
};

// Device detection utilities
export const isMobile = (): boolean => {
  if (typeof window === "undefined") return false;
  return matchMedia(`(max-width: ${BREAKPOINTS.mobile}px)`);
};

export const isTablet = (): boolean => {
  if (typeof window === "undefined") return false;
  return matchMedia(
    `(min-width: ${BREAKPOINTS.mobile + 1}px) and (max-width: ${BREAKPOINTS.desktop - 1}px)`
  );
};

export const isDesktop = (): boolean => {
  if (typeof window === "undefined") return false;
  return matchMedia(`(min-width: ${BREAKPOINTS.desktop}px)`);
};

// Check if device supports touch
export const isTouchDevice = (): boolean => {
  if (typeof window === "undefined") return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
};

// Get current viewport width
export const getViewportWidth = (): number => {
  if (typeof window === "undefined") return 0;
  return window.innerWidth;
};

// Get current viewport height
export const getViewportHeight = (): number => {
  if (typeof window === "undefined") return 0;
  return window.innerHeight;
};

// Check if in portrait mode
export const isPortrait = (): boolean => {
  if (typeof window === "undefined") return false;
  return matchMedia("(orientation: portrait)");
};

// Check if prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return matchMedia("(prefers-reduced-motion: reduce)");
};

// Check if prefers dark mode
export const prefersDarkMode = (): boolean => {
  if (typeof window === "undefined") return false;
  return matchMedia("(prefers-color-scheme: dark)");
};
