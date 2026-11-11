export default function Library() {
  return (
    <section className="section" id="biblioteca">
      <div className="container">
        <div className="feature-split">
          <div className="feature-media reveal">
            <img src={`${import.meta.env.BASE_URL}assets/banner.png`} alt="La biblioteca arcana de Luminarum" />
          </div>

          <div className="feature-copy reveal">
            <span className="eyebrow">Biblioteca arcana</span>
            <h2 className="section-title">Todo el saber oculto, en un solo lugar</h2>
            <p className="section-lead">
              Una biblioteca viva que crece cada mes: grimorios digitales, clases
              grabadas, lecturas comentadas y material de referencia curado por
              nuestros maestros.
            </p>
            <ul className="feature-list">
              <li>Grimorios y manuales descargables por disciplina</li>
              <li>Videoclases y rituales en alta calidad, siempre disponibles</li>
              <li>Bibliografía comentada: del Edda a la magia contemporánea</li>
              <li>Tableros lunares, calendarios de sabbats y plantillas rituales</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
