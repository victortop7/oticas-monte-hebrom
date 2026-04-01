const cards = [
  {
    icon: '🔬',
    title: 'Laboratório próprio',
    desc: 'Corte e montagem das lentes feitos no local, com equipamentos modernos.',
  },
  {
    icon: '🛡️',
    title: 'Garantia real',
    desc: 'Nunca negamos garantia. Problema com óculos? A gente resolve, sempre.',
  },
  {
    icon: '👁️',
    title: 'Adaptação garantida',
    desc: 'Se não se adaptar, trocamos. Seu conforto visual é nossa prioridade.',
  },
  {
    icon: '⭐',
    title: 'Marcas premium',
    desc: 'Ray-Ban, Ana Hickmann e muito mais. As melhores marcas num só lugar.',
  },
]

export function Tecnologia() {
  return (
    <section id="tecnologia" className="tecnologia section">
      <div className="container tecnologia-inner">
        {/* Left */}
        <div>
          <span className="section-label">Por que escolher a Monte Hebrom</span>
          <h2 className="section-title">
            Tecnologia e<br />Garantia
          </h2>
          <p className="section-sub">
            Investimos em tecnologia de ponta para entregar óculos de qualidade,
            com lentes precisas e garantia que você pode confiar de verdade.
          </p>

          <div className="tech-grid">
            {cards.map(card => (
              <div key={card.title} className="tech-card">
                <div className="tech-card-icon">{card.icon}</div>
                <div className="tech-card-title">{card.title}</div>
                <div className="tech-card-desc">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="tech-visual tech-visual-img">
          <img
            src="/tecnologia.png"
            alt="Tecnologia e Garantia — Óticas Monte Hebrom"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }}
          />
        </div>
      </div>
    </section>
  )
}
