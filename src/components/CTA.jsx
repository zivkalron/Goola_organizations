import { useInView } from '../hooks/useInView'

export default function CTA() {
  const [ref, inView] = useInView()

  return (
    <div className="sec">
      <div className="inner">
        <div ref={ref} className={`cta-card section-fade ${inView ? 'is-visible' : ''}`}>
          {/* Decorative circles — same motif as hero */}
          <div className="cta-c1" />
          <div className="cta-c2" />
          <div className="cta-dots" />
          <div className="cta-content">
            <div className="cta-ey">Next Step</div>
            <h2 className="cta-h">Let's show you what this looks like for your team</h2>
            <p className="cta-s">
              A short conversation is all it takes to map goola's service to your organization
              and show you what your employees are currently missing.
            </p>
          </div>
          <div className="cta-right">
            <div className="ctact">
              <a href="mailto:info@goola-group.com">info@goola-group.com</a><br />
              <a href="https://goola-group.com/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>goola-group.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
