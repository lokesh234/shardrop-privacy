import { useEffect, useRef, useState } from 'react'
import { SECTIONS } from '../config'
import { Icon } from './Icon'

export function TopBar({ active, progress }: { active: string; progress: number }) {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const current = SECTIONS.find((s) => s.id === active)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onClick = (e: MouseEvent) => { if (!panelRef.current?.contains(e.target as Node)) setOpen(false) }
    window.addEventListener('keydown', onKey)
    window.addEventListener('mousedown', onClick)
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('mousedown', onClick) }
  }, [open])

  return (
    <header className="topbar">
      <div className="topbar-inner" ref={panelRef}>
        <a href="#top" className="brand" aria-label="Prismfall privacy policy, back to top">
          <img src={`${import.meta.env.BASE_URL}prism.svg`} alt="" width={22} height={22} />
          <span>Prismfall</span>
          <span className="brand-sub">Privacy</span>
        </a>
        <span className="topbar-current" aria-live="polite">{progress > 0.04 ? current?.label : ''}</span>
        <button className="contents-button" aria-expanded={open} aria-controls="contents-panel" onClick={() => setOpen((o) => !o)}>
          <Icon name={open ? 'x' : 'list'} size={16} />
          <span>Contents</span>
        </button>
        {open && (
          <nav id="contents-panel" className="contents-panel" aria-label="Contents">
            {SECTIONS.map((s, i) => (
              <a key={s.id} href={`#${s.id}`} className={s.id === active ? 'active' : ''} onClick={() => setOpen(false)}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                {s.label}
              </a>
            ))}
          </nav>
        )}
      </div>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </header>
  )
}

/** Desktop rail: the same contents, always visible, with a marker on the current section. */
export function SideRail({ active }: { active: string }) {
  return (
    <nav className="rail" aria-label="On this page">
      <p className="rail-title">On this page</p>
      <ol>
        {SECTIONS.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className={s.id === active ? 'active' : ''} aria-current={s.id === active ? 'true' : undefined}>
              {s.label}
            </a>
          </li>
        ))}
      </ol>
      <button className="rail-print" onClick={() => window.print()}>
        <Icon name="printer" size={15} /> Print or save as PDF
      </button>
    </nav>
  )
}
