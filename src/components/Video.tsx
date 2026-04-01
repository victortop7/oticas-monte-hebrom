export function Video() {
  return (
    <section id="sobre" className="video-section section">
      <div className="container">
        <div className="video-inner">
          <div className="video-content">
            <span className="section-label">Quem somos</span>
            <h2 className="section-title">
              Conheça a<br />Monte Hebrom
            </h2>
            <p className="section-sub">
              Assista ao nosso vídeo e descubra a história, os valores e o
              compromisso que fazem da Óticas Monte Hebrom a escolha certa
              para a sua visão.
            </p>
            <div className="video-badges">
              <span className="video-badge">👓 Óculos de qualidade</span>
              <span className="video-badge">🛡️ Garantia real</span>
              <span className="video-badge">⏱️ Entrega em 1 hora</span>
            </div>
          </div>

          <div className="video-embed-wrap">
            <div className="video-embed">
              <iframe
                src="https://www.youtube.com/embed/W_nJar4zUNk?rel=0&modestbranding=1"
                title="Óticas Monte Hebrom — Conheça a nossa história"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
