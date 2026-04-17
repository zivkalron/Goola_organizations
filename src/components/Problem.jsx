import { useInView } from '../hooks/useInView'

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#421763" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Everyone has a different advisor',
    desc: 'Pension, insurance, mortgage — each managed separately, by different people, with no one connecting the dots.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#421763" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Important decisions get deferred',
    desc: 'When financial matters feel complex and unclear, people tend to avoid them. Small deferrals compound into significant long-term costs.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#421763" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'The right advice rarely arrives at the right time',
    desc: 'Life changes quickly. Without a system tracking these changes, opportunities pass and problems go unaddressed.',
  },
]

export default function Problem() {
  const [headerRef, headerVisible] = useInView()
  const [cardsRef, cardsVisible] = useInView(0.1)

  return (
    <div className="sec">
      <div className="inner">
        <div ref={headerRef} className={`section-fade ${headerVisible ? 'is-visible' : ''}`}>
          <div className="slabel">The Reality</div>
          <h2 className="stitle">Your employees have financial blind spots</h2>
          <p className="sbody">
            Most employees are paying too much, saving too little, and carrying the wrong coverage —
            without even knowing it. They don't lack the will to fix it. They lack the time, the
            guidance, and someone who sees the full picture.
          </p>
        </div>
        <div ref={cardsRef} className="prob-cards">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`pcard fade-up ${cardsVisible ? 'is-visible' : ''}`}
              style={cardsVisible ? { animationDelay: `${i * 100}ms` } : {}}
            >
              <div className="picon">{c.icon}</div>
              <div className="ptitle">{c.title}</div>
              <div className="pdesc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
