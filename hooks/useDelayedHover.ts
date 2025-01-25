import { useState, useCallback } from 'react';

export function useDelayedHover(delay = 200) {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback((callback: () => void) => {
    if (timeoutId) clearTimeout(timeoutId);
    callback();
  }, [timeoutId]);

  const handleMouseLeave = useCallback((callback: () => void) => {
    const id = setTimeout(callback, delay);
    setTimeoutId(id);
  }, [delay]);

  return { handleMouseEnter, handleMouseLeave };
}
