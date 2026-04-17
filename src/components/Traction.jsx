import { useInView } from '../hooks/useInView'

const stats = [
  { n: '175K+', l: 'Clients Served' },
  { n: '125K+', l: 'Digital Platform Users' },
  { n: '8,000+', l: 'Mortgage & Financing Clients Annually' },
  { n: '3,000+', l: 'Families in Active Growth Programs' },
]

export default function Traction() {
  const [ref, inView] = useInView()

  return (
    <div className="sec">
      <div className="inner">
        <div ref={ref} className={`section-fade ${inView ? 'is-visible' : ''}`}>
          <div className="slabel">Scale & Trust</div>
          <h2 className="stitle">Israel's financial hub for individuals and families</h2>
          <p className="sbody">
            goola is an established financial platform with a national client base, a dedicated
            advisor network, and a multi-platform ecosystem covering every aspect of financial
            life — from pension and insurance to mortgages, credit, and career planning.
          </p>
          <div className="tr-grid">
            {stats.map((s) => (
              <div className="trcard" key={s.n}>
                <div className="trn">{s.n}</div>
                <div className="trl">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
