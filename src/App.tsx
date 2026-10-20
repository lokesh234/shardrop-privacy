import { CONTACT_EMAIL, DEVELOPER, EFFECTIVE_DATE, SECTIONS } from './config'
import { useActiveSection, useScrollProgress } from './hooks'
import { TopBar, SideRail } from './components/TopBar'
import { Hero } from './components/Hero'
import { Section, Reveal } from './components/Section'
import { DataMap } from './components/DataMap'
import { Choices } from './components/Choices'
import { Faq } from './components/Faq'
import { Icon, type IconName } from './components/Icon'

const IDS = SECTIONS.map((s) => s.id)

const GLANCE: { icon: IconName; tone: string; title: string; text: string }[] = [
  { icon: 'phone', tone: 'cyan', title: 'Progress stays on your phone', text: 'Scores, shards, skins and settings never reach us.' },
  { icon: 'noUser', tone: 'violet', title: 'No account, ever', text: 'No name, email, contacts, photos or precise location.' },
  { icon: 'play', tone: 'pink', title: 'Ads keep it free', text: 'AppLovin receives device and ad data to show ads.' },
  { icon: 'sliders', tone: 'gold', title: 'You’re in control', text: 'Say no to tracking and the game plays exactly the same.' },
]

const RIGHTS: { icon: IconName; title: string; text: string }[] = [
  { icon: 'file', title: 'Access', text: 'Know what’s processed about you and get a copy.' },
  { icon: 'edit', title: 'Correct', text: 'Ask for inaccurate information to be fixed.' },
  { icon: 'trash', title: 'Delete', text: 'Ask for your information to be erased.' },
  { icon: 'hand', title: 'Object & withdraw', text: 'Restrict processing or withdraw consent at any time.' },
  { icon: 'ban', title: 'Opt out', text: 'Of “sale” or “sharing” for targeted advertising.' },
  { icon: 'scale', title: 'Complain', text: 'To your local data protection authority.' },
]

export default function App() {
  const active = useActiveSection(IDS)
  const progress = useScrollProgress()

  return (
    <>
      <a className="skip" href="#glance">Skip to the policy</a>
      <TopBar active={active} progress={progress} />
      <Hero />

      <div className="shell">
        <SideRail active={active} />
        <main>
          <Section id="glance" num="01" kicker="At a glance" title="The whole policy in four cards">
            <div className="glance">
              {GLANCE.map((g, i) => (
                <Reveal key={g.title} className={`glance-card tone-${g.tone}`} index={i}>
                  <span className="glance-icon"><Icon name={g.icon} size={22} /></span>
                  <h3>{g.title}</h3>
                  <p>{g.text}</p>
                </Reveal>
              ))}
            </div>
          </Section>

          <Section id="map" num="02" kicker="Data map" title="Where your information goes"
            tldr="Almost everything stays on your iPhone. Apple and our ad partner get only what they need. We get nothing.">
            <DataMap />
          </Section>

          <Section id="device" num="03" kicker="On your device" title="What the game remembers"
            tldr="Your progress is saved on your phone, only on your phone.">
            <p>To keep your progress between sessions, Prismfall saves your best scores, unlocked maps and mastery stars, shards and skins, missions, Daily Prism streaks and results, and your sound and haptics settings.</p>
            <p>This information never leaves your device through Prismfall, and we can’t see it. It’s included in your own iCloud or computer backups if you make them, under Apple’s terms. Deleting the app deletes it.</p>
            <p>We don’t run servers, and Prismfall has no analytics service of its own.</p>
          </Section>

          <Section id="game-center" num="04" kicker="Apple" title="Game Center"
            tldr="Optional. If you’re signed in, your scores go to Apple’s leaderboards.">
            <p>If you’re signed in to Game Center, Prismfall sends your scores, Daily Prism results and achievements to Apple so they appear on leaderboards and to your friends. Your Game Center nickname and profile are managed by Apple; we never receive your Apple ID or email.</p>
            <p>You can sign out in Settings › Game Center and the game works the same. See the <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple Privacy Policy</a> for how Apple handles this data.</p>
          </Section>

          <Section id="ads" num="05" kicker="Advertising" title="How ads work"
            tldr="Ads keep the game free. Tracking happens only if you say yes.">
            <p>Prismfall shows occasional full-screen ads between runs, and optional ads you can choose to watch for bonus shards. There are never ads during play. Ads are delivered by <strong>AppLovin MAX</strong>, which may work with other ad networks (“mediation partners”) to fill each ad.</p>
            <div className="split">
              <div className="mini-card">
                <h3>What they may receive</h3>
                <ul>
                  <li><strong>Device identifiers:</strong> the IDFV, and the IDFA only if you allow tracking</li>
                  <li><strong>Device and app info:</strong> model, iOS version, language, time zone, screen size, network type, app version</li>
                  <li><strong>IP address</strong>, which can indicate approximate, city-level location</li>
                  <li><strong>Ad interactions:</strong> which ads were shown, watched, skipped or tapped</li>
                </ul>
              </div>
              <div className="mini-card">
                <h3>Why</h3>
                <ul>
                  <li>Choose and deliver ads</li>
                  <li>Limit how often you see the same ad</li>
                  <li>Confirm rewarded ads so you get your shards</li>
                  <li>Measure ad performance and attribute installs</li>
                  <li>Detect and prevent ad fraud</li>
                  <li>Personalize ads, only if you allow tracking</li>
                </ul>
              </div>
            </div>
            <div className="callout">
              <span className="callout-icon"><Icon name="shield" size={22} /></span>
              <div>
                <strong>Tracking is your choice.</strong>
                <p>Prismfall asks with Apple’s standard prompt before any tracking. Choose “Ask App Not to Track” and your IDFA isn’t shared. You’ll still see ads; they just won’t use your activity in other companies’ apps and websites.</p>
              </div>
            </div>
            <p>In the European Economic Area, the UK and Switzerland, the app asks for your consent where the law requires it before ads use your data for personalization.</p>
            <p>We don’t sell your personal information for money. Read the <a href="https://www.applovin.com/privacy/" target="_blank" rel="noopener noreferrer">AppLovin Privacy Policy</a> to learn how AppLovin handles data.</p>
          </Section>

          <Section id="choices" num="06" kicker="Your choices" title="Four switches, all yours"
            tldr="Everything is controlled from the iPhone Settings app.">
            <Choices />
          </Section>

          <Section id="children" num="07" kicker="Children" title="Made for players 13 and up"
            tldr="Prismfall isn’t directed at children under 13.">
            <p>Prismfall is not directed at children under 13 (or the minimum age in your country), and we don’t knowingly collect personal information from them. If you believe a child has provided information through the app, <a href="#contact">contact us</a> and we’ll help remove it.</p>
          </Section>

          <Section id="rights" num="08" kicker="Your rights" title="What the law gives you"
            tldr="Depending on where you live, you have rights over your data. Exercising them never costs you anything in the game.">
            <div className="rights">
              {RIGHTS.map((r, i) => (
                <Reveal key={r.title} className="right" index={i}>
                  <Icon name={r.icon} size={20} />
                  <div><strong>{r.title}</strong><span>{r.text}</span></div>
                </Reveal>
              ))}
            </div>
            <p>These rights apply under laws like the GDPR in the EU and UK and state laws such as California’s. Because we don’t hold your data on our servers, the fastest route is usually the settings above. For data held by our ad partner, you can also contact AppLovin directly. You’re always welcome to <a href="#contact">write to us</a>.</p>
            <p className="fine">For users in the EEA and UK: the legal basis for advertising that uses your data is your consent. For non-personalized ads and fraud prevention, it’s our legitimate interest in keeping the game free and safe.</p>
          </Section>

          <Section id="retention" num="09" kicker="Retention & security" title="How long, and how safe"
            tldr="On-device data lasts until you delete the app. Everything sent out is encrypted.">
            <p>Data saved on your device stays until you delete the app. Game Center data is kept by Apple under its policies, and AppLovin and its partners keep advertising data for the periods in their own policies. Information sent to them travels over encrypted connections.</p>
            <p>If the way Prismfall handles information changes, for example a new partner, we’ll update this page and its effective date, and note significant changes in the app’s release notes.</p>
          </Section>

          <Section id="faq" num="10" kicker="Questions" title="Things people ask">
            <Faq />
          </Section>

          <Section id="contact" num="11" kicker="Contact" title="Talk to a human">
            <div className="contact">
              <div className="contact-art" aria-hidden="true">
                <img src={`${import.meta.env.BASE_URL}prism.svg`} alt="" width={56} height={56} />
              </div>
              <div className="contact-text">
                <h3>Questions about your privacy?</h3>
                <p>Prismfall is made by {DEVELOPER}, an independent developer. You’ll get a reply from the person who wrote the game, usually within a few days.</p>
              </div>
              <a className="btn btn-primary" href={`mailto:${CONTACT_EMAIL}?subject=Prismfall%20privacy`}>
                <Icon name="mail" size={18} /> Email us
              </a>
            </div>
          </Section>
        </main>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <span>© 2026 {DEVELOPER} · Prismfall · Effective {EFFECTIVE_DATE}</span>
          <a href="#top" className="to-top"><Icon name="arrowUp" size={15} /> Back to top</a>
        </div>
      </footer>
    </>
  )
}
