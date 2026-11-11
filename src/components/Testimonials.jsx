import { testimonials } from '../data/content'

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Voces del círculo</span>
          <h2 className="section-title">Aprendices que ya brillan</h2>
        </div>

        <div className="testi-grid">
          {testimonials.map((t) => (
            <article className="testi-card reveal" key={t.name}>
              <p className="quote">“{t.quote}”</p>
              <div className="who">
                <span className="dot">{t.name.charAt(0)}</span>
                <div>
                  <div className="name">{t.name}</div>
                  <div className="meta">{t.meta}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
