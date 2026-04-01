import { useState } from 'react'
import { brands } from '../data/brands'
import { BrandModal } from './BrandModal'
import type { Brand } from '../data/brands'

const allNames = brands.map(b => b.name)
const marqueeItems = [...allNames, ...allNames, ...allNames]

export function Brands() {
  const [active, setActive] = useState<Brand | null>(null)

  return (
    <>
      <section id="marcas" className="brands section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Coleções exclusivas</span>
            <h2 className="section-title">Marcas que você ama</h2>
            <p className="section-sub">
              As maiores marcas de óculos em um só lugar. Clique numa marca
              para ver todos os modelos disponíveis.
            </p>
          </div>
        </div>

        {/* Marquee */}
        <div className="brands-marquee-wrap" style={{ marginTop: 52 }}>
          <div className="brands-marquee">
            {marqueeItems.map((name, i) => (
              <span key={i} className="brand-chip">
                {name}<span>◆</span>
              </span>
            ))}
          </div>
        </div>

        {/* Brand cards */}
        <div className="container">
          <div className="brands-card-grid">
            {brands.map(brand => (
              <button
                key={brand.id}
                className="brand-card-btn"
                onClick={() => setActive(brand)}
              >
                <div className="brand-card-img-wrap">
                  <img src={brand.cover} alt={brand.name} />
                  <div className="brand-card-img-overlay" />
                </div>

                <div className="brand-card-body">
                  {brand.logo ? (
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="brand-logo-badge"
                    />
                  ) : (
                    <div className="brand-logo-text">{brand.name}</div>
                  )}
                  <div className="brand-card-meta">
                    <span className="brand-card-tag2">{brand.tag}</span>
                    <span className="brand-card-count">{brand.photos.length} modelos</span>
                  </div>
                  <div className="brand-card-cta2">
                    Ver coleção →
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <BrandModal brand={active} onClose={() => setActive(null)} />
      )}
    </>
  )
}
