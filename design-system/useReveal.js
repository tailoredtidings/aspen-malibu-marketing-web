import { useEffect, useRef } from 'react'

/**
 * useReveal — Scroll reveal hook
 * Usage: const ref = useReveal()
 *        <div ref={ref} className="reveal">...</div>
 *
 * For staggered children:
 *        <div ref={ref} className="reveal-stagger">
 *          <div>child 1</div>
 *          <div>child 2</div>
 *        </div>
 */
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}
