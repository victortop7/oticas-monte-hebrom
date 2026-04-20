import { useState, useEffect } from 'react'
import { stores, whatsappLink } from '../data/stores'
import { img } from '../lib/base'

const NAV_LINKS = [
  { label: 'Início', href: '#hero', external: false },
  { label: 'Marcas', href: '#marcas', external: false },
  { label: 'Nossas Lojas', href: '#lojas', external: false },
  { label: 'Lentes', href: '#lentes', external: false },
  { label: 'Para Empresas', href: '#empresa', external: false },
  { label: 'Instagram', href: 'https://www.instagram.com/oticamontehebromfortaleza/', external: true },
]

const PHONE_LOJA1 = `tel:+${stores[0].phone}`

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const waLink = whatsappLink(stores[0].whatsapp, stores[0].name)

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="container header-inner">
          <a href="#hero" className="logo">
            <img src={img('logo.png')} alt="Óticas Monte Hebrom" className="logo-img" />
          </a>

          <nav className={`nav${menuOpen ? ' nav-open' : ''}`}>
            {NAV_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
                {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {l.label}
              </a>
            ))}
            <a
              href={PHONE_LOJA1}
              className="btn btn-ghost"
              onClick={() => setMenuOpen(false)}
              title="Ligar para Loja 1"
            >
              <PhoneSVG /> Ligar
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
              onClick={() => setMenuOpen(false)}
            >
              <img src={img('logo-whatsapp.png')} alt="WhatsApp" width={16} height={16} style={{ filter: 'brightness(0) invert(1)' }} />
              Fale Conosco
            </a>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Phone float button */}
      <a
        href={PHONE_LOJA1}
        className="phone-float"
        aria-label="Ligar"
        title="Ligar para Loja 1"
      >
        <PhoneSVG size={26} />
      </a>

      {/* WhatsApp float button */}
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="wa-float"
        aria-label="WhatsApp"
        title="Fale conosco no WhatsApp"
      >
        <img src={img('logo-whatsapp.png')} alt="WhatsApp" width={28} height={28} style={{ filter: 'brightness(0) invert(1)' }} />
      </a>
    </>
  )
}

function PhoneSVG({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  )
}
