import goolaLogo from '../assets/goola-logo.png'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hc1" />
      <div className="hc2" />
      <div className="hdots" />
      <div className="hinner inner">
        <div className="logo">
          <img src={goolaLogo} alt="goola" className="logo-img" />
        </div>
        <div className="eyebrow">For Employers &amp; Organizations</div>
        <h1>
          Your employees are navigating their financial lives <span>alone.</span>
        </h1>
        <p className="hero-sub">
          The cost isn't invisible — it shows up in distraction, disengagement, and turnover.
          goola delivers a complete, technology-powered financial advisory service to your
          employees — as a structured organizational benefit.
        </p>
        <div className="stats">
          <div className="stat">
            <span className="stat-n">175,000+</span>
            <span className="stat-l">Clients Served</span>
          </div>
          <div className="sdiv" />
          <div className="stat">
            <span className="stat-n">125,000+</span>
            <span className="stat-l">Digital Users</span>
          </div>
          <div className="sdiv" />
          <div className="stat">
            <span className="stat-n">8,000+</span>
            <span className="stat-l">Financing &amp; Mortgage<br />Clients Annually</span>
          </div>
        </div>
      </div>
    </div>
  )
}
