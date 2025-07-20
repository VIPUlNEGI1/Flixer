// hooks/useDelayedHover.ts
import { useState, useCallback } from 'react'

export default function useDelayedHover(delay: number) {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)

  const handleMouseEnter = useCallback((callback: () => void) => {
    if (timer) clearTimeout(timer)
    const newTimer = setTimeout(callback, delay)
    setTimer(newTimer)
  }, [delay, timer])

  const handleMouseLeave = useCallback((callback: () => void) => {
    if (timer) clearTimeout(timer)
    callback()
  }, [timer])

  return { handleMouseEnter, handleMouseLeave }
}