function IncubatorPage({ onNavigate }) {
  return (
    <>
      <div className="topbar">
        <div>
          <span className="eyebrow">Incubadora de impacto</span>
          <h1>Transforma el aprendizaje en una propuesta real</h1>
        </div>

        <div className="topbar-badges">
          <span className="badge">Idea en análisis</span>
          <span className="badge">Impacto estimado</span>
        </div>
      </div>

      <div className="incubator-layout">
        <section className="incubator-main">
          <article className="incubator-card featured">
            <span className="section-tag">Propuesta sugerida</span>
            <h2>Programa interno de separación inteligente de residuos</h2>
            <p>
              Diseña una iniciativa para mejorar la separación de residuos en las
              áreas de trabajo, combinando señalización, puntos de reciclaje y
              acompañamiento pedagógico por parte de Vera.
            </p>
          </article>

          <article className="incubator-card">
            <h3>Cómo podría funcionar</h3>
            <p>
              La iniciativa puede comenzar con una fase piloto en una sede, medir
              hábitos iniciales, activar micro-retos por equipos y luego escalar
              con base en resultados y participación.
            </p>
          </article>

          <article className="incubator-card">
            <h3>Recomendaciones del agente</h3>
            <div className="insight-list">
              <div className="insight-item">
                Inicia con una sede piloto para validar adopción.
              </div>
              <div className="insight-item">
                Usa mensajes breves y visuales para reforzar hábitos.
              </div>
              <div className="insight-item">
                Mide participación, reducción de residuos mezclados y eco-puntos.
              </div>
            </div>
          </article>
        </section>

        <aside className="incubator-side">
          <article className="incubator-card impact-card">
            <span className="section-tag">Impacto esperado</span>
            <h3>Métricas proyectadas</h3>

            <div className="impact-metrics">
              <div className="impact-metric">
                <strong>120 kg</strong>
                <span>residuos mejor clasificados</span>
              </div>

              <div className="impact-metric">
                <strong>18%</strong>
                <span>mejora en hábitos sostenibles</span>
              </div>

              <div className="impact-metric">
                <strong>240</strong>
                <span>eco-puntos acumulables</span>
              </div>
            </div>
          </article>

          <article className="incubator-card">
            <h3>Siguiente acción</h3>
            <p>
              Luego podremos conectar esta sección con generación asistida por IA
              para crear propuestas desde respuestas del usuario.
            </p>
          </article>

          <div className="page-footer-actions incubator-actions">
            <button className="secondary-btn" onClick={() => onNavigate("modules")}>
              Volver a módulos
            </button>

            <button className="primary-btn" onClick={() => onNavigate("certificate")}>
              Continuar
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}

export default IncubatorPage;