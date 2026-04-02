import { stores, whatsappLink } from '../data/stores'
import { img } from '../lib/base'

interface LensFeature {
  text: string
  available: boolean
}

interface Lens {
  tag: string
  brand: string
  subtitle: string
  features: LensFeature[]
  highlight: boolean
  cta: string
}

const lenses: Lens[] = [
  {
    tag: 'Tradicional',
    brand: 'Multifocal',
    subtitle: 'Lentes tradicionais',
    highlight: false,
    cta: 'Saber mais',
    features: [
      { text: 'Campo de visão básico', available: true },
      { text: 'Imagem com definição padrão', available: true },
      { text: 'Campo de visão com otimização', available: false },
      { text: 'Conforto visual avançado', available: false },
      { text: 'Proteção UV', available: false },
    ],
  },
  {
    tag: 'Recomendado',
    brand: 'Marchal',
    subtitle: 'Light Easy HD',
    highlight: true,
    cta: 'Quero essa lente',
    features: [
      { text: 'Campo de visão aprimorado', available: true },
      { text: 'Imagem com melhor definição', available: true },
      { text: 'Campo de visão com otimização', available: true },
      { text: 'Melhor conforto visual', available: true },
      { text: 'Proteção UV básica', available: false },
    ],
  },
  {
    tag: 'Premium',
    brand: 'JR Light Vision',
    subtitle: 'Free Form',
    highlight: false,
    cta: 'Quero essa lente',
    features: [
      { text: 'Campo de visão mais amplo', available: true },
      { text: 'Imagem cristalina HD', available: true },
      { text: 'Tecnologia MAX SIZE e FOCUS++', available: true },
      { text: 'Melhor adaptação e conforto', available: true },
      { text: 'Proteção UVA, UVB e UVC', available: true },
    ],
  },
]

export function Lentes() {
  const wa = whatsappLink(stores[0].whatsapp, 'Loja 1')

  return (
    <section id="lentes" className="lentes section">
      <div className="container">
        <div className="text-center">
          <span className="section-label">Tecnologia de ponta</span>
          <h2 className="section-title">Compare as Lentes</h2>
          <p className="section-sub">
            Trabalhamos com as melhores tecnologias em lentes do mercado.
            Veja a diferença e escolha a que melhor atende à sua visão.
          </p>
        </div>

        <div className="lentes-banner">
          <img
            src={img('lentes.png')}
            alt="Lentes JR Light Vision e Marchal Light Easy HD"
          />
        </div>

        <div className="lentes-grid">
          {lenses.map(lens => (
            <div
              key={lens.brand}
              className={`lente-card${lens.highlight ? ' lente-card-highlight' : ''}`}
            >
              <div className="lente-header">
                <span className="lente-tag">{lens.tag}</span>
                <div className="lente-brand">{lens.brand}</div>
                <div className="lente-subtitle">{lens.subtitle}</div>
              </div>

              <div className="lente-body">
                <ul className="lente-features">
                  {lens.features.map(f => (
                    <li key={f.text}>
                      <span className={f.available ? 'check' : 'cross'}>
                        {f.available ? '✓' : '✗'}
                      </span>
                      {f.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lente-footer">
                <a
                  href={whatsappLink(
                    stores[0].whatsapp,
                    `informações sobre ${lens.brand} ${lens.subtitle}`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn btn-full ${lens.highlight ? 'btn-red' : 'btn-outline'}`}
                >
                  💬 {lens.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <p style={{ color: 'var(--gray-400)', fontSize: 14, marginBottom: 20 }}>
            Não sabe qual lente escolher? Fale com nossos especialistas.
          </p>
          <a href={wa} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar com especialista
          </a>
        </div>
      </div>
    </section>
  )
}
