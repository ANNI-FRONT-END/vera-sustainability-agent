function ModulesPage({ onNavigate, diagnosticScore }) {
  const reinforcementModules = [
    {
      id: 1,
      title: "Introducción al SGA",
      description:
        "Refuerza los fundamentos del Sistema de Gestión Ambiental y su propósito dentro de la organización.",
      status: "recommended",
      points: 120,
    },
    {
      id: 2,
      title: "Roles y responsabilidades",
      description:
        "Comprende quién lidera la estrategia y cuál es el papel de colaboradores y proveedores.",
      status: "available",
      points: 90,
    },
    {
      id: 3,
      title: "Aspectos e impactos ambientales",
      description:
        "Aprende a diferenciar el qué hacemos y el efecto que generamos sobre el ambiente.",
      status: "available",
      points: 110,
    },
    {
      id: 4,
      title: "Buenas prácticas sostenibles",
      description:
        "Fortalece hábitos concretos para aplicar el aprendizaje en el trabajo diario.",
      status: "completed",
      points: 80,
    },
  ];

  const advancedModules = [
    {
      id: 1,
      title: "Pilares de Misión Verde 2030",
      description:
        "Profundiza en ecoeficiencia operacional, economía circular y abastecimiento sostenible.",
      status: "recommended",
      points: 140,
    },
    {
      id: 2,
      title: "Huella de carbono y Net-Zero",
      description:
        "Comprende cómo se mide la huella de carbono y cuáles son las metas ambientales de largo plazo.",
      status: "available",
      points: 120,
    },
    {
      id: 3,
      title: "Economía circular aplicada",
      description:
        "Explora separación en la fuente, reciclaje, compostaje y digitalización de procesos.",
      status: "available",
      points: 100,
    },
    {
      id: 4,
      title: "Abastecimiento sostenible",
      description:
        "Aprende cómo integrar criterios ambientales en contratos, compras y relación con proveedores.",
      status: "completed",
      points: 90,
    },
  ];

  const isReinforcementRoute = diagnosticScore !== null && diagnosticScore < 2;
  const modules = isReinforcementRoute ? reinforcementModules : advancedModules;

  const ranking = [
    { id: 1, name: "Ana", score: 420 },
    { id: 2, name: "Carlos", score: 390 },
    { id: 3, name: "Luisa", score: 360 },
    { id: 4, name: "Tú", score: 310 },
  ];

  function getStatusLabel(status) {
    if (status === "recommended") return "Recomendado";
    if (status === "available") return "Disponible";
    if (status === "locked") return "Bloqueado";
    if (status === "completed") return "Completado";
    return "Activo";
  }

  function getStatusClass(status) {
    if (status === "recommended") return "recommended";
    if (status === "available") return "available";
    if (status === "locked") return "locked";
    if (status === "completed") return "completed";
    return "";
  }

  const routeTitle = isReinforcementRoute
    ? "Ruta recomendada de refuerzo"
    : "Ruta recomendada de profundización";

  const routeDescription = isReinforcementRoute
    ? "Con base en tu diagnóstico, priorizamos fundamentos del SGA y conceptos clave."
    : "Con base en tu diagnóstico, puedes avanzar a temas de aplicación y estrategia ambiental.";

  return (
    <>
      <div className="topbar">
        <div>
          <span className="eyebrow">Ruta personalizada</span>
          <h1>{routeTitle}</h1>
        </div>

        <div className="topbar-badges">
          <span className="badge">4 módulos activos</span>
          <span className="badge">
            Score diagnóstico: {diagnosticScore !== null ? diagnosticScore : "-"} / 3
          </span>
        </div>
      </div>

      <div className="modules-layout">
        <section className="modules-section">
          <div className="route-summary-card">
            <span className="section-tag">Recomendación</span>
            <h3>{routeTitle}</h3>
            <p>{routeDescription}</p>
          </div>

          <div className="modules-grid">
            {modules.map((module) => (
              <article key={module.id} className="module-card">
                <div className="module-card-top">
                  <span className={`module-status ${getStatusClass(module.status)}`}>
                    {getStatusLabel(module.status)}
                  </span>
                  <span className="module-points">+{module.points} pts</span>
                </div>

                <h3>{module.title}</h3>
                <p>{module.description}</p>

                <button
                  className="secondary-btn module-btn"
                  onClick={() =>
                    onNavigate(module.id === 4 ? "incubator" : "course")
                  }
                >
                  Ver módulo
                </button>
              </article>
            ))}
          </div>
        </section>

        <aside className="ranking-panel">
          <div className="ranking-card">
            <span className="section-tag">Progreso</span>
            <h3>Tu ruta actual</h3>
            <p>
              {isReinforcementRoute
                ? "Tu diagnóstico indica que conviene reforzar fundamentos antes de avanzar."
                : "Tu diagnóstico indica que puedes avanzar a contenidos de mayor aplicación."}
            </p>

            <div className="mini-progress">
              <div
                className="mini-progress-fill"
                style={{ width: isReinforcementRoute ? "32%" : "58%" }}
              />
            </div>

            <span className="mini-progress-label">
              {isReinforcementRoute ? "Ruta base activada" : "Ruta avanzada activada"}
            </span>
          </div>

          <div className="ranking-card">
            <span className="section-tag">Ranking</span>
            <h3>Clasificación general</h3>

            <div className="ranking-list">
              {ranking.map((person, index) => (
                <div key={person.id} className="ranking-item">
                  <div className="ranking-left">
                    <span className="ranking-position">#{index + 1}</span>
                    <span className="ranking-name">{person.name}</span>
                  </div>
                  <span className="ranking-score">{person.score} pts</span>
                </div>
              ))}
            </div>
          </div>

          <div className="page-footer-actions">
            <button className="secondary-btn" onClick={() => onNavigate("welcome")}>
              Volver al inicio
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}

export default ModulesPage;