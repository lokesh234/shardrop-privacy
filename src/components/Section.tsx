import type { CSSProperties, ReactNode } from 'react'
import { useReveal } from '../hooks'

export function Section({ id, num, kicker, title, tldr, children }: {
  id: string; num: string; kicker?: string; title: string; tldr?: ReactNode; children: ReactNode
}) {
  const ref = useReveal<HTMLElement>()
  return (
    <section id={id} ref={ref} className="section reveal" aria-labelledby={`${id}-title`}>
      <p className="kicker"><span className="kicker-num">{num}</span>{kicker}</p>
      <h2 id={`${id}-title`}>{title}</h2>
      {tldr && (
        <p className="tldr"><span className="tldr-label">In short</span>{tldr}</p>
      )}
      <div className="prose">{children}</div>
    </section>
  )
}

/** A child that animates in, one after another, when its section scrolls into view. */
export function Reveal({ children, className = '', index = 0 }: { children: ReactNode; className?: string; index?: number }) {
  return <div className={`stagger ${className}`} style={{ '--i': index } as CSSProperties}>{children}</div>
}
