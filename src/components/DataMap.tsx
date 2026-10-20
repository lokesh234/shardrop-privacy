import { useId, useState } from 'react'
import { Icon, type IconName } from './Icon'

type Destination = {
  key: string
  name: string
  short: string
  icon: IconName
  tone: 'cyan' | 'violet' | 'pink' | 'muted'
  what: string[]
  why: string
  control: string
}

const DESTINATIONS: Destination[] = [
  {
    key: 'device', name: 'Stays on your iPhone', short: 'Progress & settings', icon: 'phone', tone: 'cyan',
    what: ['Best scores, maps and mastery stars', 'Shards, skins and missions', 'Daily Prism streaks and results', 'Music, sound and haptics settings'],
    why: 'So your progress is there next time you open the game.',
    control: 'Delete the app to erase it.',
  },
  {
    key: 'apple', name: 'Apple Game Center', short: 'Scores & achievements', icon: 'trophy', tone: 'violet',
    what: ['Scores and Daily Prism results', 'Achievements you unlock'],
    why: 'For leaderboards and to show friends how you did. Only if you’re signed in.',
    control: 'Sign out in Settings › Game Center.',
  },
  {
    key: 'ads', name: 'AppLovin & ad partners', short: 'Ad data', icon: 'megaphone', tone: 'pink',
    what: ['Device identifiers (IDFV; IDFA only if you allow tracking)', 'Device model, iOS version, language', 'IP address (approximate location)', 'Which ads were shown, watched or tapped'],
    why: 'To show ads that keep Prismfall free, reward ads you choose to watch, and stop ad fraud.',
    control: 'Decline tracking in Settings › Privacy & Security › Tracking.',
  },
  {
    key: 'us', name: 'The developer', short: 'Nothing at all', icon: 'server', tone: 'muted',
    what: ['No servers', 'No analytics', 'No account database'],
    why: 'Prismfall doesn’t send anything to us. We can’t see your scores, your device or you.',
    control: 'Nothing to manage.',
  },
]

export function DataMap() {
  const [selected, setSelected] = useState('device')
  const id = useId()
  const dest = DESTINATIONS.find((d) => d.key === selected)!

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const delta = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0
    if (!delta) return
    e.preventDefault()
    const next = DESTINATIONS[(i + delta + DESTINATIONS.length) % DESTINATIONS.length]
    setSelected(next.key)
    document.getElementById(`${id}-tab-${next.key}`)?.focus()
  }

  return (
    <div className="datamap">
      <div className="datamap-source" aria-hidden="true">
        <div className="phone">
          <div className="phone-notch" />
          <img src={`${import.meta.env.BASE_URL}prism.svg`} alt="" width={40} height={40} />
          <span>Prismfall</span>
        </div>
      </div>

      <div className="datamap-tabs" role="tablist" aria-label="Where your information goes" aria-orientation="vertical">
        {DESTINATIONS.map((d, i) => (
          <button
            key={d.key}
            id={`${id}-tab-${d.key}`}
            role="tab"
            aria-selected={d.key === selected}
            aria-controls={`${id}-panel`}
            tabIndex={d.key === selected ? 0 : -1}
            className={`datamap-tab tone-${d.tone}`}
            onClick={() => setSelected(d.key)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <span className="wire" aria-hidden="true" />
            <span className="tab-icon"><Icon name={d.icon} size={18} /></span>
            <span className="tab-text">
              <strong>{d.name}</strong>
              <span>{d.short}</span>
            </span>
            <Icon name="chevron" size={16} />
          </button>
        ))}
      </div>

      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${dest.key}`} className={`datamap-panel tone-${dest.tone}`} key={dest.key}>
        <div className="panel-head">
          <span className="tab-icon"><Icon name={dest.icon} size={20} /></span>
          <h3>{dest.name}</h3>
        </div>
        <p className="panel-label">What</p>
        <ul className="checks">
          {dest.what.map((w) => (
            <li key={w}><Icon name={dest.key === 'us' ? 'ban' : 'check'} size={16} />{w}</li>
          ))}
        </ul>
        <p className="panel-label">Why</p>
        <p>{dest.why}</p>
        <p className="panel-label">Your control</p>
        <p>{dest.control}</p>
      </div>
    </div>
  )
}
