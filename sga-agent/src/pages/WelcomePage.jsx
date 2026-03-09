function WelcomePage({ onNavigate, userName }) {
  return (
    <>
      <div className="topbar">
        <div>
          <span className="eyebrow">Misión Verde 2030</span>
          <h1>Plataforma de aprendizaje ambiental</h1>
        </div>

        <div className="topbar-badges">
          <span className="badge">Eco Puntos: 120</span>
          <span className="badge">Nivel inicial</span>
        </div>
      </div>

      <section className="hero-card">
        <span className="section-tag">Bienvenida</span>
        <h2>
          {userName
            ? `Bienvenida, ${userName}. Construyamos una experiencia de aprendizaje inteligente`
            : "Construyamos una experiencia de aprendizaje inteligente"}
        </h2>
        <p>
          Esta será la base visual del agente conversacional y del recorrido
          formativo personalizado.
        </p>

        <button className="primary-btn" onClick={() => onNavigate("diagnostic")}>
          Comenzar
        </button>
      </section>

      <section className="placeholder-grid">
        <div className="placeholder-card">
          <h3>Diagnóstico</h3>
          <p>Espacio para assessment inicial y termómetro ambiental.</p>
        </div>

        <div className="placeholder-card">
          <h3>Ruta personalizada</h3>
          <p>Espacio para módulos recomendados según desempeño.</p>
        </div>

        <div className="placeholder-card">
          <h3>Microlearning</h3>
          <p>Espacio para contenidos, videos, lecturas y actividades.</p>
        </div>

        <div className="placeholder-card">
          <h3>Certificación</h3>
          <p>Espacio para logros, insignias y certificado final.</p>
        </div>
      </section>
    </>
  );
}

export default WelcomePage;

