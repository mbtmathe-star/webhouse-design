import { useEffect, useRef, useState } from 'react'

/**
 * Fires once when the observed element enters the viewport.
 * Disconnects after first trigger so the element stays revealed.
 */
export function useReveal(threshold = 0.10) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, visible]
}
