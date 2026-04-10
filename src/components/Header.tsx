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
