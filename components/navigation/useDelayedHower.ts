import { useCallback, useRef } from "react"

export const useDelayedHover = (delay: number) => {
  const timeoutRef = useRef<number | null>(null)

  const handleMouseEnter = useCallback((callback: () => void) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = window.setTimeout(callback, delay)
  }, [delay])

  const handleMouseLeave = useCallback((callback: () => void) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    callback()
  }, [])

  return { handleMouseEnter, handleMouseLeave }
}