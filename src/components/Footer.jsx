const cols = [
  {
    title: 'Escuela',
    links: ['Disciplinas', 'El Sendero', 'Maestros', 'Certificaciones'],
  },
  {
    title: 'Recursos',
    links: ['Biblioteca arcana', 'Blog etéreo', 'Calendario lunar', 'Comunidad'],
  },
  {
    title: 'Luminarum',
    links: ['Sobre nosotros', 'Contacto', 'Términos', 'Privacidad'],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/assets/logo-white.png" alt="Sello de Luminarum" />
            <div className="wordmark">LUMINARUM</div>
            <p>
              La universidad etérea de magia y brujería. Educación arcana viva,
              en español, para toda Latinoamérica y el mundo.
            </p>
          </div>
          {cols.map((c) => (
            <div className="footer-col" key={c.title}>
              <h5>{c.title}</h5>
              {c.links.map((l) => (
                <a href="#top" key={l}>
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Luminarum · Hecho con magia ✦</span>
          <span>Per aspera ad astra</span>
        </div>
      </div>
    </footer>
  )
}
