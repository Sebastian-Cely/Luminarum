export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <span className="eyebrow">La Universidad Etérea</span>
            <h1>
              Despierta tu magia en <span className="shimmer">Luminarum</span>
            </h1>
            <p className="sub">
              Cursos, clases en vivo y una biblioteca arcana viva. Aprende runas,
              tarot, astrología, alquimia y brujería con maestros reales — todo en
              una sola suscripción.
            </p>
            <div className="hero-actions">
              <a href="#planes" className="btn btn-primary">
                Comenzar el sendero ✦
              </a>
              <a href="#disciplinas" className="btn btn-ghost">
                Ver disciplinas
              </a>
            </div>
            <div className="hero-meta">
              <div className="stat">
                <div className="num">60+</div>
                <div className="lbl">cursos arcanos</div>
              </div>
              <div className="stat">
                <div className="num">12k</div>
                <div className="lbl">aprendices activos</div>
              </div>
              <div className="stat">
                <div className="num">∞</div>
                <div className="lbl">biblioteca etérea</div>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="hero-orb" />
            <img className="hero-seal" src="/assets/logo-white.png" alt="Sello rúnico de Luminarum" />
          </div>
        </div>

        <div className="hero-banner-strip reveal">
          <img src="/assets/banner.png" alt="El cosmos arcano de Luminarum" />
        </div>
      </div>
    </header>
  )
}
