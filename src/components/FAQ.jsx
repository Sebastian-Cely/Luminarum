import { useState } from 'react'
import { faqs } from '../data/content'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Dudas del umbral</span>
          <h2 className="section-title">Preguntas frecuentes</h2>
        </div>

        <div className="faq-wrap reveal">
          {faqs.map((f, i) => (
            <div className={`faq-item ${open === i ? 'open' : ''}`} key={f.q}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                {f.q}
                <span className="sign">+</span>
              </button>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
