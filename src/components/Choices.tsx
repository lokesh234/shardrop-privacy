import { Icon, type IconName } from './Icon'

const ROWS: { icon: IconName; color: string; title: string; path: string[]; note: string }[] = [
  { icon: 'eyeOff', color: '#ff338c', title: 'Stop tracking', path: ['Privacy & Security', 'Tracking'], note: 'Turn off Prismfall, or “Allow Apps to Request to Track”.' },
  { icon: 'megaphone', color: '#9959ff', title: 'Limit Apple’s personalized ads', path: ['Privacy & Security', 'Apple Advertising'], note: 'Controls ads Apple itself shows.' },
  { icon: 'trophy', color: '#1fb8d6', title: 'Leave Game Center', path: ['Game Center'], note: 'Your progress on the phone is kept.' },
  { icon: 'trash', color: '#f59e0b', title: 'Erase everything', path: ['General', 'iPhone Storage', 'Prismfall'], note: 'Tap Delete App. All game data goes with it.' },
]

/** Styled like the iPhone Settings list players will actually tap through. */
export function Choices() {
  return (
    <ul className="settings-list">
      {ROWS.map((row) => (
        <li key={row.title} className="settings-row">
          <span className="settings-icon" style={{ background: row.color }}><Icon name={row.icon} size={17} strokeWidth={2.4} /></span>
          <div className="settings-text">
            <strong>{row.title}</strong>
            <span className="crumbs">
              <span>Settings</span>
              {row.path.map((p) => (
                <span key={p}><Icon name="chevron" size={11} strokeWidth={3} />{p}</span>
              ))}
            </span>
            <span className="settings-note">{row.note}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}
