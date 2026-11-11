const words = [
  'Runas', 'Tarot', 'Astrología', 'Alquimia', 'Brujería Lunar',
  'Herbolaria', 'Cristales', 'Numerología', 'Sanación Etérica', 'Galdr',
]

export default function Marquee() {
  const loop = [...words, ...words]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <span>
          {loop.map((w, i) => (
            <span key={i}>{w}</span>
          ))}
        </span>
      </div>
    </div>
  )
}
