import { disciplines } from '../data/content'

export default function Disciplines() {
  return (
    <section className="section" id="disciplinas">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Facultades arcanas</span>
          <h2 className="section-title">Seis caminos, una sola escuela</h2>
          <p className="section-lead">
            Cada disciplina es una facultad completa con cursos, prácticas y
            maestros. Explora libremente o sigue un sendero guiado.
          </p>
        </div>

        <div className="disc-grid">
          {disciplines.map((d) => (
            <article className="disc-card reveal" key={d.name}>
              <span className="rune">{d.rune}</span>
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
              <div className="count">{d.count}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
