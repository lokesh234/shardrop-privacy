import { EFFECTIVE_DATE } from '../config'
import { PrismField } from './PrismField'
import { Icon } from './Icon'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <PrismField />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow"><span className="dot" aria-hidden="true" /> Prismfall · Privacy Policy</p>
        <h1 id="hero-title">
          Your game.<br />
          Your data.<br />
          <span className="prism-text">Your call.</span>
        </h1>
        <p className="lede">
          Prismfall is a free arcade game with no account and no sign-up. Here's exactly what happens to your
          information when you play, in plain language.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#glance">Read the summary</a>
          <a className="btn btn-ghost" href="#choices"><Icon name="sliders" size={17} /> Your choices</a>
        </div>
        <ul className="hero-meta" aria-label="Policy details">
          <li><Icon name="clock" size={14} /> Effective {EFFECTIVE_DATE}</li>
          <li><Icon name="phone" size={14} /> Prismfall for iPhone</li>
          <li><Icon name="file" size={14} /> 4 min read</li>
        </ul>
      </div>
      <a href="#glance" className="scroll-cue" aria-label="Scroll to the summary"><span /></a>
    </section>
  )
}
