import { stores, whatsappLink } from '../data/stores'
import { img } from '../lib/base'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          {/* Brand */}
          <div className="footer-brand">
            <img src={img('logo.png')} alt="Óticas Monte Hebrom" style={{ height: 70, marginBottom: 12, filter: 'brightness(0) invert(1)' }} />
            <p className="footer-tagline">
              "Se seus olhos forem bons,<br />
              seu corpo será luz."<br />
              — Mateus 6:22
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 4, flexWrap: 'wrap' }}>
              <a
                href={whatsappLink(stores[0].whatsapp, 'Loja 1')}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
                style={{ width: 'fit-content' }}
              >
                <img src={img('logo-whatsapp.png')} alt="WhatsApp" width={18} height={18} style={{ filter: 'brightness(0) invert(1)' }} />
                Fale Conosco
              </a>
              <a
                href="https://www.instagram.com/oticamontehebromfortaleza/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-instagram"
                style={{ width: 'fit-content' }}
              >
                <img src={img('logo-instagram.png')} alt="Instagram" width={18} height={18} style={{ filter: 'brightness(0) invert(1)' }} />
                Instagram
              </a>
            </div>
          </div>

          {/* Lojas */}
          <div>
            <div className="footer-col-title">Nossas Lojas</div>
            <div className="footer-links">
              {stores.map(store => (
                <a
                  key={store.id}
                  href={whatsappLink(store.whatsapp, store.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  {store.name} — {store.city}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="footer-col-title">Explore</div>
            <div className="footer-links">
              <a href="#hero" className="footer-link">Início</a>
              <a href="#lojas" className="footer-link">Nossas Lojas</a>
              <a href="#lentes" className="footer-link">Comparar Lentes</a>
              <a href="#empresa" className="footer-link">Para Empresas</a>
              <a href="#tecnologia" className="footer-link">Tecnologia</a>
              <a href="#contato" className="footer-link">Contato</a>
            </div>
            <div className="footer-col-title" style={{ marginTop: 28 }}>Redes Sociais</div>
            <div className="footer-links">
              <a
                href="https://www.instagram.com/oticamontehebromfortaleza/"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
                style={{ display: 'flex', alignItems: 'center', gap: 8 }}
              >
                <img src={img('logo-instagram.png')} alt="Instagram" width={16} height={16} />
                @oticamontehebromfortaleza
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            © {new Date().getFullYear()} Óticas Monte Hebrom. Todos os direitos reservados.
          </span>
          <span className="footer-verse">
            "Se seus olhos forem bons, seu corpo será luz." — Mt 6:22
          </span>
        </div>
      </div>
    </footer>
  )
}
