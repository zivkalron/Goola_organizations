import { useEffect, useState } from 'react'

export function useCountUp(target, duration = 1400, inView = false) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame = 0
    const totalFrames = Math.round(duration / 16)
    // Ease-out cubic
    const tick = () => {
      frame++
      const progress = frame / totalFrames
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * target))
      if (frame < totalFrames) requestAnimationFrame(tick)
      else setValue(target)
    }
    requestAnimationFrame(tick)
  }, [inView, target, duration])

  return value
}
