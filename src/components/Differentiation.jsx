import { useInView } from '../hooks/useInView'

const XIcon = () => (
  <svg viewBox="0 0 11 11" fill="none" stroke="#7A6E8A" strokeWidth="1.5" strokeLinecap="round">
    <line x1="2" y1="2" x2="9" y2="9"/>
    <line x1="9" y1="2" x2="2" y2="9"/>
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 11 11" fill="none" stroke="#6BC2DE" strokeWidth="1.8" strokeLinecap="round">
    <polyline points="2 5.5 4.5 8 9 3"/>
  </svg>
)

const rows = [
  {
    before: 'Separate advisors for each financial domain',
    after:  'One unified platform covering all financial domains',
  },
  {
    before: 'An annual check-in, then silence',
    after:  'Ongoing accompaniment through every life stage',
  },
  {
    before: 'Hours of manual preparation per client meeting',
    after:  'Every meeting fully prepared by the platform — automatically',
  },
  {
    before: 'No visibility for the employer',
    after:  'Real-time engagement and outcome visibility for your HR team',
  },
]

export default function Differentiation() {
  const [ref, inView] = useInView()

  return (
    <div className="sec">
      <div className="inner">
        <div ref={ref} className={`section-fade ${inView ? 'is-visible' : ''}`}>
          <div className="slabel">Why goola</div>
          <h2 className="stitle">Not another advisor. A complete financial platform.</h2>
          <p className="sbody">
            Most providers offer a single product, show up once a year, and leave. goola brings
            together expert advisors and proprietary technology to deliver an ongoing, unified
            financial service — all in one place, for every employee.
          </p>
          <div className="diff-wrap">
            <div className="diff-header">
              <div className="dh">What employees have today</div>
              <div className="dh hl">What goola delivers</div>
            </div>
            <div className="diff-rows">
              {rows.map((r) => (
                <div className="drow" key={r.before}>
                  <div className="dcell">
                    <div className="dicon bad"><XIcon /></div>
                    {r.before}
                  </div>
                  <div className="dcell hl">
                    <div className="dicon good"><CheckIcon /></div>
                    {r.after}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
