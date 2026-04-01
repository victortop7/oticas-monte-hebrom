import { stores, whatsappLink } from '../data/stores'

const benefits = [
  {
    title: 'Convênio para colaboradores',
    desc: 'Condições especiais para funcionários da sua empresa, com desconto e facilidade de pagamento.',
  },
  {
    title: 'Atendimento prioritário',
    desc: 'Seus colaboradores são atendidos com agilidade e profissionalismo nas nossas lojas.',
  },
  {
    title: 'Ampla variedade de armações',
    desc: 'Centenas de modelos para todos os gostos e necessidades, incluindo marcas premium.',
  },
  {
    title: 'Lentes com tecnologia avançada',
    desc: 'Trabalhamos com as melhores lentes do mercado: JR Light Vision e Marchal Light Easy HD.',
  },
]

export function Empresa() {
  const wa = whatsappLink(
    stores[0].whatsapp,
    'empresas/convênios'
  )

  return (
    <section id="empresa" className="empresa section">
      <div className="container empresa-inner">
        {/* Left */}
        <div>
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Soluções corporativas
          </span>
          <h2 className="section-title section-title-white">
            Para a sua Empresa
          </h2>
          <p className="section-sub section-sub-white">
            Oferecemos a solução ideal para os seus colaboradores. Convênio,
            atendimento especial e tecnologia de ponta para cuidar da visão
            de toda a equipe.
          </p>

          <div className="empresa-benefits">
            {benefits.map(b => (
              <div key={b.title} className="empresa-benefit">
                <div className="benefit-check">✓</div>
                <div>
                  <div className="benefit-title">{b.title}</div>
                  <div className="benefit-desc">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="btn btn-white btn-lg"
            style={{ marginTop: 40 }}
          >
            💬 Falar sobre convênio
          </a>
        </div>

        {/* Right card */}
        <div className="empresa-card">
          <div className="empresa-card-title">Faça parte do nosso convênio</div>
          <div className="empresa-card-sub">
            Cadastre sua empresa e ofereça um benefício real para seus colaboradores.
            Óculos de qualidade com condições exclusivas.
          </div>

          <div className="empresa-metrics">
            <div className="metric-box">
              <div className="metric-num">4</div>
              <div className="metric-label">Lojas parceiras</div>
            </div>
            <div className="metric-box">
              <div className="metric-num">1h</div>
              <div className="metric-label">Entrega dos óculos</div>
            </div>
            <div className="metric-box">
              <div className="metric-num">0</div>
              <div className="metric-label">Garantias negadas</div>
            </div>
            <div className="metric-box">
              <div className="metric-num">∞</div>
              <div className="metric-label">Modelos disponíveis</div>
            </div>
          </div>

          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp btn-full btn-lg"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Quero o convênio
          </a>
        </div>
      </div>
    </section>
  )
}
