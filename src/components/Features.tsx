const items = [
  {
    icon: '⏱️',
    title: 'Entregamos em 1 hora',
    desc: 'Seus óculos prontos rapidinho. Lentes cortadas e montadas na hora.',
  },
  {
    icon: '🎁',
    title: 'Brinde na compra',
    desc: 'Ganhe um brinde especial na compra do seu óculos. Consulte condições.',
  },
  {
    icon: '🛡️',
    title: 'Não negamos garantia',
    desc: 'Nossa política é clara: se tiver problema, a gente resolve. Sempre.',
  },
  {
    icon: '📍',
    title: '4 lojas para você',
    desc: '3 lojas em Fortaleza e 1 em Natal. Atendemos você onde estiver.',
  },
]

export function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          {items.map(item => (
            <div key={item.title} className="feature-item">
              <div className="feature-icon">{item.icon}</div>
              <div>
                <div className="feature-title">{item.title}</div>
                <div className="feature-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
