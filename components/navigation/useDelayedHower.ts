import { useRef } from "react";

export function useDelayedHover(delay: number) {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (callback: () => void) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(callback, delay);
  };

  const handleMouseLeave = (callback: () => void) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(callback, delay);
  };

  return { handleMouseEnter, handleMouseLeave };
}