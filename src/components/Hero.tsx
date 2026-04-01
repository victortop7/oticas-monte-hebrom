import { useState, useEffect } from 'react'
import { stores, whatsappLink } from '../data/stores'

const slides = [
  '/hero1.jpg', '/hero2.jpg', '/hero3.jpg',
  '/hero4.jpg', '/hero5.jpg', '/hero6.jpg',
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-glow" />

      <div className="hero-grid">
        {/* ── LEFT ── */}
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            4 lojas · Fortaleza &amp; Natal
          </div>

          <h1 className="hero-title">
            Óticas<br />
            <em>Monte Hebrom</em>
          </h1>

          <p className="hero-tagline">
            "Se seus olhos forem bons, seu corpo será luz." — Mt 6:22
          </p>

          <p className="hero-desc">
            Tecnologia de ponta, garantia real e as melhores marcas.
            Seus óculos prontos em 1 hora.
          </p>

          <div className="hero-actions">
            <a href="#marcas" className="btn btn-red btn-lg">Ver coleções</a>
            <a href="#lojas" className="btn btn-ghost btn-lg">Nossas lojas</a>
          </div>

          <div className="hero-stats">
            <div>
              <div className="hero-stat-num">4</div>
              <div className="hero-stat-label">Lojas</div>
            </div>
            <div className="hero-stat-divider" />
            <div>
              <div className="hero-stat-num">1h</div>
              <div className="hero-stat-label">Entrega</div>
            </div>
            <div className="hero-stat-divider" />
            <div>
              <div className="hero-stat-num">7+</div>
              <div className="hero-stat-label">Marcas premium</div>
            </div>
          </div>

          {/* Store selector — dentro do left */}
          <div className="hero-store-picker">
            <div className="hero-store-picker-label">Fale com uma loja</div>
            <div className="hero-store-list">
              {stores.map(store => (
                <a
                  key={store.id}
                  href={whatsappLink(store.whatsapp, store.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-store-row"
                >
                  <div className="hero-store-row-info">
                    <span className="hero-store-row-name">{store.name}</span>
                    <span className="hero-store-row-addr">{store.address}</span>
                  </div>
                  <div className="hero-wa-icon">
                    <WaSVG />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT — carousel limpo ── */}
        <div className="hero-right">
          <div className="hero-carousel">
            {slides.map((src, i) => (
              <div key={i} className={`hero-slide${i === current ? ' active' : ''}`}>
                <img src={src} alt={`Óticas Monte Hebrom modelo ${i + 1}`} />
                <div className="hero-slide-overlay" />
              </div>
            ))}
            <div className="hero-dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`hero-dot${i === current ? ' active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Foto ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WaSVG() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
