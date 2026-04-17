import { useInView } from '../hooks/useInView'

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#6BC2DE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'For the employer',
    desc: 'Engagement rates, benefit utilization, and employee participation — all in one dashboard. Plus full coverage of your pension law compliance obligations.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#6BC2DE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: 'For the employee',
    desc: 'A personal financial dashboard showing real progress over time — what changed, what improved, and what still needs attention.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#6BC2DE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10"/>
        <path d="M12 20V4"/>
        <path d="M6 20v-6"/>
      </svg>
    ),
    title: 'Proactive, not reactive',
    desc: 'When regulations change, markets shift, or an employee hits a new life stage — the platform surfaces it automatically. The right advice arrives before the employee even asks.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#6BC2DE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Regulatory coverage, always current',
    desc: 'Pension law, insurance regulation, and compliance requirements change. goola tracks these automatically and ensures your organization stays ahead.',
  },
]

export default function Visibility() {
  const [headerRef, headerVisible] = useInView()
  const [cardsRef, cardsVisible] = useInView(0.1)

  return (
    <div className="sec dark">
      <div className="vis-bg" />
      <div className="vis-inner inner">
        <div ref={headerRef} className={`section-fade ${headerVisible ? 'is-visible' : ''}`}>
          <div className="slabel">Always in the picture</div>
          <h2 className="stitle">You see everything. So does your team.</h2>
          <p className="sbody">
            Unlike traditional advisory services — where the employer has no idea what's
            happening — goola gives you and your employees real visibility, and makes your
            advisors proactive rather than reactive.
          </p>
        </div>
        <div ref={cardsRef} className="vis-cards">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`vcard fade-up ${cardsVisible ? 'is-visible' : ''}`}
              style={cardsVisible ? { animationDelay: `${i * 100}ms` } : {}}
            >
              <div className="vcard-icon">{c.icon}</div>
              <div className="vcard-title">{c.title}</div>
              <div className="vcard-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
