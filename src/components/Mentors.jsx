import { mentors } from '../data/content'

export default function Mentors() {
  return (
    <section className="section" id="maestros">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">El claustro</span>
          <h2 className="section-title">Maestros que han caminado el sendero</h2>
          <p className="section-lead">
            No son influencers: son practicantes con décadas de oficio que
            enseñan en vivo y te acompañan en tu evolución.
          </p>
        </div>

        <div className="mentor-grid">
          {mentors.map((m) => (
            <article className="mentor-card reveal" key={m.name}>
              <div className="avatar">{m.initials}</div>
              <h4>{m.name}</h4>
              <div className="role">{m.role}</div>
              <p>{m.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
