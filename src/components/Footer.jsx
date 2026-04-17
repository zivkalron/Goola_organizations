import goolaLogo from '../assets/goola-logo.png'

export default function Footer() {
  return (
    <div className="footer">
      <div className="inner footer-inner">
        <img src={goolaLogo} alt="goola" className="footer-logo-img" />
        <div className="ftag">Financial Quality of Life — for every household</div>
        <div className="fright">© 2026 goola Group<br />Confidential — Not for Distribution</div>
      </div>
    </div>
  )
}
