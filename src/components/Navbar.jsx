import { useEffect, useState } from 'react'

const links = [
  { label: 'Disciplinas', href: '#disciplinas' },
  { label: 'El Sendero', href: '#sendero' },
  { label: 'Maestros', href: '#maestros' },
  { label: 'Biblioteca', href: '#biblioteca' },
  { label: 'Planes', href: '#planes' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-brand">
          <img src={`${import.meta.env.BASE_URL}assets/logo-white.png`} alt="Sello de Luminarum" />
          <span className="wordmark">LUMINARUM</span>
        </a>
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav-cta">
          <a href="#planes" className="btn btn-ghost">
            Iniciar sesión
          </a>
          <a href="#planes" className="btn btn-primary">
            Unirme
          </a>
        </div>
      </div>
    </nav>
  )
}
