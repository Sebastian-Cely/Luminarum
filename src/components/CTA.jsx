export default function CTA() {
  return (
    <section className="section cta-final">
      <div className="container">
        <div className="cta-card reveal">
          <img className="cta-seal" src={`${import.meta.env.BASE_URL}assets/logo-white.png`} alt="" aria-hidden="true" />
          <span className="eyebrow">Tu iniciación te espera</span>
          <h2>El umbral está abierto</h2>
          <p>
            Únete a Luminarum y comienza hoy tu sendero por las artes mágicas.
            Tu primera semana es gratis.
          </p>
          <a href="#planes" className="btn btn-primary">
            Cruzar el umbral ✦
          </a>
        </div>
      </div>
    </section>
  )
}
