import kobiDahan          from '../assets/team/kobi-dahan.jpg'
import noamGold           from '../assets/team/noam-gold.jpg'
import eladShoshani       from '../assets/team/elad-shoshani.jpg'
import meravLevyLeibow    from '../assets/team/merav-levy-leibowitz.jpg'
import roniBoter          from '../assets/team/roni-boter.jpg'
import zivKalron          from '../assets/team/ziv-kalron.jpg'
import vardaBarnea        from '../assets/team/varda-barnea.jpg'
import amirBenShlomo      from '../assets/team/amir-ben-shlomo.jpg'
import { useInView }      from '../hooks/useInView'

const members = [
  { name: 'Kobi Dahan',           role: 'goola Group Founder & CEO', photo: kobiDahan },
  { name: 'Ziv Kalron',           role: 'Chief Product Officer',     photo: zivKalron },
  { name: 'Roni Boter',           role: 'CTO',                       photo: roniBoter },
  { name: 'Noam Gold',            role: 'VP Insurance',              photo: noamGold },
  { name: 'Varda Barnea',         role: 'Retirement Manager',        photo: vardaBarnea },
  { name: 'Merav Levy Leibowitz', role: 'Financier CEO',             photo: meravLevyLeibow },
  { name: 'Elad Shoshani',        role: 'U360 CEO',                  photo: eladShoshani },
  { name: 'Amir Ben-Shlomo',      role: 'goola Credit CEO',          photo: amirBenShlomo },
]

export default function Team() {
  const [ref, inView] = useInView()

  return (
    <div className="sec">
      <div className="inner">
        <div ref={ref} className={`section-fade ${inView ? 'is-visible' : ''}`}>
          <div className="slabel">Leadership</div>
          <h2 className="stitle">An experienced team you can trust</h2>
          <p className="sbody">
            goola brings together deep financial expertise and technology leadership — a team that
            has spent years building the systems, relationships, and knowledge that make this possible.
          </p>
          <div className="team-grid">
            {members.map((m) => (
              <div className="tmember" key={m.name}>
                <div className="tavatar">
                  <img src={m.photo} alt={m.name} />
                </div>
                <div className="tname">{m.name}</div>
                <div className="trole">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
