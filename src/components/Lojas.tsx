import { stores, whatsappLink } from '../data/stores'
import { img } from '../lib/base'

const storePhotos: Record<number, string> = {
  1: img('loja1.png'),
  2: img('loja2.png'),
  3: img('loja3.png'),
}

export function Lojas() {
  return (
    <section id="lojas" className="lojas section">
      <div className="container">
        <div className="text-center">
          <span className="section-label">Onde nos encontrar</span>
          <h2 className="section-title">Nossas Lojas</h2>
          <p className="section-sub">
            Estamos em Fortaleza, prontos para cuidar da sua visão
            com tecnologia e atendimento de qualidade.
          </p>
        </div>

        <div className="lojas-grid">
          {stores.map(store => (
            <div key={store.id} className="loja-card">
              {storePhotos[store.id] && (
                <div className="loja-photo">
                  <img
                    src={storePhotos[store.id]}
                    alt={`${store.name} — Óticas Monte Hebrom`}
                  />
                </div>
              )}
              <div className="loja-card-body">
                <span className="loja-badge">
                  📍 Fortaleza
                </span>
                <div className="loja-name">{store.name}</div>
                <div className="loja-address">{store.address}</div>
                <div className="loja-city">{store.city}</div>
                <div className="loja-divider" />
                <div className="loja-actions">
                  <a
                    href={whatsappLink(store.whatsapp, store.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-whatsapp btn-full"
                  >
                    <img src={img('logo-whatsapp.png')} alt="WhatsApp" width={16} height={16} style={{ filter: 'brightness(0) invert(1)' }} />
                    Falar no WhatsApp
                  </a>
                  {store.phone && (
                    <a
                      href={`tel:+${store.phone}`}
                      className="btn btn-ghost btn-full"
                    >
                      📞 Ligar agora
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
