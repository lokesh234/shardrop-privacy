import { useState, type ReactNode } from 'react'
import { Icon } from './Icon'

const QUESTIONS: { q: string; a: ReactNode }[] = [
  { q: 'Do you sell my data?', a: 'No. We don’t collect your data, so there’s nothing for us to sell. Our ad partner uses device and ad data to deliver ads, as described above.' },
  { q: 'Can you see my scores or progress?', a: 'No. Progress is saved only on your iPhone. If you use Game Center, Apple shows your scores on leaderboards, but they aren’t sent to us.' },
  { q: 'Why does the app ask to track me?', a: 'Apple requires apps to ask before using the advertising identifier. Allowing it can make ads more relevant; declining is fine and the game plays exactly the same.' },
  { q: 'What happens if I say no to tracking?', a: 'You still get ads, but they won’t be personalized using your activity in other companies’ apps and websites. Nothing in the game is locked.' },
  { q: 'Do I need an account?', a: 'No. There’s no sign-up, login or email. Game Center is optional and run by Apple.' },
  { q: 'How do I delete my data?', a: 'Delete Prismfall from your iPhone; that erases everything the game stored. For ad data held by AppLovin, use the choices above or contact AppLovin directly.' },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="faq">
      {QUESTIONS.map(({ q, a }, i) => {
        const isOpen = open === i
        return (
          <div key={q} className={`faq-item${isOpen ? ' open' : ''}`}>
            <h3>
              <button aria-expanded={isOpen} aria-controls={`faq-${i}`} id={`faq-q-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                {q}
                <span className="faq-toggle" aria-hidden="true"><Icon name="plus" size={16} strokeWidth={2.4} /></span>
              </button>
            </h3>
            <div id={`faq-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className="faq-answer" hidden={!isOpen}>
              <p>{a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
