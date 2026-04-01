import { useState, useEffect, useCallback } from 'react'
import type { Brand } from '../data/brands'
import { stores } from '../data/stores'

interface Props {
  brand: Brand
  onClose: () => void
}

export function BrandModal({ brand, onClose }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null)

  // Fechar com ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightbox !== null) setLightbox(null)
        else onClose()
      }
      if (lightbox !== null) {
        if (e.key === 'ArrowRight') setLightbox(i => (i! + 1) % brand.photos.length)
        if (e.key === 'ArrowLeft') setLightbox(i => (i! - 1 + brand.photos.length) % brand.photos.length)
      }
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, brand.photos.length, onClose])

  const prev = useCallback(() =>
    setLightbox(i => (i! - 1 + brand.photos.length) % brand.photos.length),
    [brand.photos.length]
  )
  const next = useCallback(() =>
    setLightbox(i => (i! + 1) % brand.photos.length),
    [brand.photos.length]
  )

  return (
    <div className="modal-backdrop" onClick={lightbox === null ? onClose : undefined}>
      {/* Modal container */}
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-brand-info">
            {brand.logo ? (
              <img src={brand.logo} alt={brand.name} className="modal-brand-logo" />
            ) : (
              <span className="modal-brand-name-text">{brand.name}</span>
            )}
            <div>
              <div className="modal-brand-name">{brand.name}</div>
              <div className="modal-brand-tag">{brand.tag} · {brand.photos.length} modelos</div>
            </div>
          </div>
          <div className="modal-header-actions">
            <a
              href={`https://wa.me/${stores[0].whatsapp}?text=${encodeURIComponent(brand.waMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
            >
              <WaSVG /> Consultar preços
            </a>
            <button className="modal-close" onClick={onClose} aria-label="Fechar">✕</button>
          </div>
        </div>

        {/* Grid */}
        <div className="modal-body">
          <div className="modal-grid">
            {brand.photos.map((photo, i) => (
              <button
                key={i}
                className="modal-thumb"
                onClick={() => setLightbox(i)}
                aria-label={`Ver modelo ${i + 1}`}
              >
                <img src={photo} alt={`${brand.name} modelo ${i + 1}`} />
                <div className="modal-thumb-overlay">
                  <span className="modal-thumb-icon">🔍</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="modal-footer">
          <span className="modal-footer-text">
            Gostou de algum modelo? Fale agora e saiba o preço!
          </span>
          <div className="modal-footer-stores">
            {stores.map(store => (
              <a
                key={store.id}
                href={`https://wa.me/${store.whatsapp}?text=${encodeURIComponent(brand.waMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="modal-store-btn"
              >
                <WaSVG />
                {store.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            {/* Nav prev */}
            <button className="lightbox-nav lightbox-prev" onClick={prev}>‹</button>

            <img
              src={brand.photos[lightbox]}
              alt={`${brand.name} ${lightbox + 1}`}
              className="lightbox-img"
            />

            {/* Nav next */}
            <button className="lightbox-nav lightbox-next" onClick={next}>›</button>

            {/* Top bar */}
            <div className="lightbox-top">
              <span className="lightbox-counter">
                {lightbox + 1} / {brand.photos.length}
              </span>
              <div style={{ display: 'flex', gap: 10 }}>
                <a
                  href={`https://wa.me/${stores[0].whatsapp}?text=${encodeURIComponent(
                    `${brand.waMessage} — Modelo ${lightbox + 1}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                  style={{ padding: '9px 18px', fontSize: 13 }}
                  onClick={e => e.stopPropagation()}
                >
                  <WaSVG /> Quero este modelo
                </a>
                <button
                  className="lightbox-close"
                  onClick={() => setLightbox(null)}
                >✕</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function WaSVG() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
