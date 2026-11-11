import { plans } from '../data/content'

export default function Pricing() {
  return (
    <section className="section" id="planes">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Suscripción</span>
          <h2 className="section-title">Una sola llave para todo el saber</h2>
          <p className="section-lead">
            Sin comprar curso por curso. Elige tu círculo y accede a la
            universidad etérea completa. Cancela cuando quieras.
          </p>
        </div>

        <div className="price-grid">
          {plans.map((p) => (
            <article className={`price-card reveal ${p.featured ? 'featured' : ''}`} key={p.tier}>
              {p.featured && <span className="badge">Más elegido</span>}
              <div className="tier">{p.tier}</div>
              <div className="price">
                <span className="amount">{p.price}</span>{' '}
                <span className="per">{p.per}</span>
              </div>
              <p className="tagline">{p.tagline}</p>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#top" className={`btn ${p.featured ? 'btn-primary' : 'btn-ghost'}`}>
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
