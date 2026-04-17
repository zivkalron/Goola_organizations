import { useInView } from '../hooks/useInView'

const steps = [
  {
    num: '01',
    title: 'A complete financial picture',
    desc: 'Every employee sees their full financial standing — pension, insurance, savings, and liabilities — all in one place, often for the first time.',
    tag: 'Data Reveal',
  },
  {
    num: '02',
    title: 'Personalized gaps & opportunities',
    desc: 'The platform surfaces where each employee is overpaying, underprotected, or missing out — with clear, specific findings they can act on.',
    tag: 'Smart Analysis',
  },
  {
    num: '03',
    title: 'An expert advisory meeting',
    desc: 'A structured, tech-powered session with a dedicated goola advisor — covering every financial domain, with real-time simulations and documented decisions.',
    tag: 'Human + Technology',
  },
  {
    num: '04',
    title: 'Ongoing life accompaniment',
    desc: 'As life changes — a new home, a growing family, a career move — the platform tracks what matters and ensures the right guidance arrives at the right time.',
    tag: 'Continuous',
  },
]

export default function Experience() {
  const [headerRef, headerVisible] = useInView()
  const [cardsRef, cardsVisible] = useInView(0.1)

  return (
    <div className="sec">
      <div className="inner">
        <div ref={headerRef} className={`section-fade ${headerVisible ? 'is-visible' : ''}`}>
          <div className="slabel">The Experience</div>
          <h2 className="stitle">What your employees receive</h2>
          <p className="sbody">
            A structured journey from first contact to ongoing financial guidance — designed to give
            every employee a clear picture of where they stand, what needs to change, and what
            happens next.
          </p>
        </div>
        <div ref={cardsRef} className="del-grid">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`dcard fade-up ${cardsVisible ? 'is-visible' : ''}`}
              style={cardsVisible ? { animationDelay: `${i * 100}ms` } : {}}
            >
              <div className="dnum">{s.num}</div>
              <div>
                <div className="dtitle">{s.title}</div>
                <div className="ddesc">{s.desc}</div>
                <span className="dtag">{s.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
