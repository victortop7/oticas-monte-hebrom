import { img as _img } from '../lib/base'

const cards = [
  { icon: '🔬', title: 'Laboratório próprio', desc: 'Corte e montagem das lentes feitos no local, com equipamentos modernos.' },
  { icon: '🛡️', title: 'Garantia real', desc: 'Nunca negamos garantia. Problema com óculos? A gente resolve, sempre.' },
  { icon: '👁️', title: 'Adaptação garantida', desc: 'Se não se adaptar, trocamos. Seu conforto visual é nossa prioridade.' },
  { icon: '⭐', title: 'Marcas premium', desc: 'Ray-Ban, Ana Hickmann e muito mais. As melhores marcas num só lugar.' },
  { icon: '⏱️', title: 'Entrega em 1 hora', desc: 'Seus óculos prontos rapidinho. Lentes cortadas e montadas na hora.' },
  { icon: '🎁', title: 'Brinde na compra', desc: 'Ganhe um brinde especial na compra do seu óculos. Consulte condições.' },
]

export function Tecnologia() {
  return (
    <section id="tecnologia" className="tecnologia section">
      <div className="container">
        <div className="text-center">
          <span className="section-label">Por que escolher a Monte Hebrom</span>
          <h2 className="section-title">Tecnologia e Garantia</h2>
          <p className="section-sub">
            Investimos em tecnologia de ponta para entregar óculos de qualidade,
            com lentes precisas e garantia que você pode confiar de verdade.
          </p>
        </div>

        <div className="tech-grid-6">
          {cards.map(card => (
            <div key={card.title} className="tech-card">
              <div className="tech-card-icon">{card.icon}</div>
              <div className="tech-card-title">{card.title}</div>
              <div className="tech-card-desc">{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
