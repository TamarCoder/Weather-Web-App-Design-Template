import { useState, useEffect } from "react";
import { BREAKPOINTS } from "@/utils/responsive";

interface UseResponsiveReturn {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
  height: number;
  isPortrait: boolean;
  isTouchDevice: boolean;
}

export const useResponsive = (): UseResponsiveReturn => {
  const [state, setState] = useState<UseResponsiveReturn>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    width: 0,
    height: 0,
    isPortrait: false,
    isTouchDevice: false,
  });

  useEffect(() => {
    const updateState = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setState({
        isMobile: width < BREAKPOINTS.mobile,
        isTablet: width >= BREAKPOINTS.mobile && width < BREAKPOINTS.desktop,
        isDesktop: width >= BREAKPOINTS.desktop,
        width,
        height,
        isPortrait: height > width,
        isTouchDevice: "ontouchstart" in window || navigator.maxTouchPoints > 0,
      });
    };

    updateState();
    window.addEventListener("resize", updateState);
    window.addEventListener("orientationchange", updateState);

    return () => {
      window.removeEventListener("resize", updateState);
      window.removeEventListener("orientationchange", updateState);
    };
  }, []);

  return state;
};
