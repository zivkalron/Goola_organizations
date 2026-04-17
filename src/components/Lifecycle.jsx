import { useInView } from '../hooks/useInView'

const stages = [
  {
    range: '21–30',
    label: 'Growing Up',
    color: 'var(--blue)',
    events: ['First job & salary', 'Building savings'],
    eventColor: 'var(--blue)',
  },
  {
    range: '31–45',
    label: 'The Difficult Decade',
    color: 'var(--purple)',
    events: ['Wedding & childbirth', 'Mortgage & home'],
    eventColor: 'var(--red)',
  },
  {
    range: '46–55',
    label: 'Reaping the Fruits',
    color: 'var(--red)',
    events: ['Career peak & income', "Children's milestones"],
    eventColor: 'var(--purple)',
  },
  {
    range: '56–64',
    label: 'Countdown to Retirement',
    color: 'var(--purple)',
    events: ['Pre-retirement planning', 'Unexpected life events'],
    eventColor: 'var(--purple)',
  },
  {
    range: '65+',
    label: 'The Golden Years',
    color: 'var(--success)',
    events: ['Retirement income', 'Estate & legacy'],
    eventColor: 'var(--success)',
  },
]

const legend = [
  { color: 'var(--purple)', label: 'Life stages' },
  { color: 'var(--red)',    label: 'Major life events' },
  { color: 'var(--muted)',  label: 'Unexpected events' },
  { color: 'var(--success)',label: 'Retirement milestones' },
]

export default function Lifecycle() {
  const [headerRef, headerVisible] = useInView()
  const [timelineRef, timelineVisible] = useInView(0.2)

  return (
    <div className="sec">
      <div className="inner">
        <div ref={headerRef} className={`section-fade ${headerVisible ? 'is-visible' : ''}`}>
          <div className="slabel">Life-Centric</div>
          <h2 className="stitle">A system built around life itself</h2>
          <p className="sbody">
            Financial needs don't stay the same. goola's platform maps and adapts to every stage —
            from early career through retirement — ensuring your employees always have the right
            guidance for where they are in life.
          </p>
        </div>

        <div className="lc-wrap" ref={timelineRef}>
          <div className="lc-title">The goola Life Journey — Continuous Adaptation</div>
          <div style={{ position: 'relative', paddingBottom: '16px' }}>
            <div
              className={`lc-line ${timelineVisible ? 'is-visible' : ''}`}
              style={{
                position: 'absolute', top: '10px', left: '20px', right: '20px',
                height: '2px', background: 'var(--border)', zIndex: 1,
              }}
            />
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              position: 'relative', zIndex: 2, padding: '0 10px',
            }}>
              {stages.map((s, i) => (
                <div key={s.range} style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', flex: 1,
                }}>
                  <div
                    className={`lc-dot ${timelineVisible ? 'is-visible' : ''}`}
                    style={{
                      width: '20px', height: '20px', borderRadius: '50%',
                      background: s.color,
                      border: '3px solid var(--surface)',
                      boxShadow: `0 0 0 2px ${s.color}`,
                      animationDelay: timelineVisible ? `${200 + i * 170}ms` : '0ms',
                    }}
                  />
                  <div style={{
                    fontSize: '10px', fontWeight: 700, color: 'var(--purple)',
                    marginTop: '8px', whiteSpace: 'nowrap',
                  }}>{s.range}</div>
                  <div style={{
                    fontSize: '9px', color: 'var(--muted)',
                    marginTop: '1px', whiteSpace: 'nowrap', textAlign: 'center',
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '20px 10px 0', gap: '8px',
            }}>
              {stages.map((s) => (
                <div key={s.range} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {s.events.map((ev, i) => (
                    <div key={ev} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', color: 'var(--body)' }}>
                      <div style={{
                        width: '7px', height: '7px', borderRadius: '50%',
                        background: i === 1 && s.range === '56–64' ? 'var(--muted)' : s.eventColor,
                        flexShrink: 0,
                      }} />
                      {ev}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div style={{
            display: 'flex', gap: '20px', marginTop: '24px',
            paddingTop: '20px', borderTop: '1px solid var(--border)', flexWrap: 'wrap',
          }}>
            {legend.map((l) => (
              <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--muted)' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: l.color }} />
                {l.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
