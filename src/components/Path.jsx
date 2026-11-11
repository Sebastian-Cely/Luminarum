import { path } from '../data/content'

export default function Path() {
  return (
    <section className="section" id="sendero">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">El modelo etéreo</span>
          <h2 className="section-title">Un sendero con grados, como una universidad</h2>
          <p className="section-lead">
            Avanzas por círculos de conocimiento. Cada grado desbloquea
            disciplinas, mentorías y una certificación que acredita tu camino.
          </p>
        </div>

        <div className="path-grid">
          {path.map((p, i) => (
            <article className="path-step reveal" key={p.title}>
              <span className="num">{i + 1}</span>
              <div className="deg">{p.deg}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
