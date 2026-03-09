import { useState } from "react";

function CertificatePage({ onNavigate }) {
  const [showCertificate, setShowCertificate] = useState(false);

  if (!showCertificate) {
    return (
      <>
        <div className="topbar">
          <div>
            <span className="eyebrow">Certificación</span>
            <h1>Has desbloqueado tu logro final</h1>
          </div>

          <div className="topbar-badges">
            <span className="badge">Ruta completada</span>
            <span className="badge">Insignia obtenida</span>
          </div>
        </div>

        <section className="certificate-unlock-card">
          <span className="section-tag">Reconocimiento</span>
          <h2>¡Felicitaciones! Has completado tu recorrido de aprendizaje</h2>
          <p>
            Terminaste el diagnóstico, exploraste los módulos, recorriste el
            contenido del curso y llegaste hasta la incubadora de impacto.
          </p>

          <div className="achievement-badge">
            <div className="achievement-icon">★</div>
            <div>
              <strong>Insignia desbloqueada</strong>
              <span>Guardián de la sostenibilidad</span>
            </div>
          </div>

          <div className="action-row">
            <button className="primary-btn" onClick={() => setShowCertificate(true)}>
              Ver certificado
            </button>

            <button className="secondary-btn" onClick={() => onNavigate("modules")}>
              Volver a módulos
            </button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <div className="topbar">
        <div>
          <span className="eyebrow">Certificación</span>
          <h1>Certificado final</h1>
        </div>

        <div className="topbar-badges">
          <span className="badge">Emitido por Vera</span>
          <span className="badge">Misión Verde 2030</span>
        </div>
      </div>

      <section className="certificate-card">
        <div className="certificate-inner">
          <span className="certificate-label">Certificado de finalización</span>
          <h2>Ana</h2>
          <p className="certificate-text">
            Ha completado satisfactoriamente la experiencia de aprendizaje
            conversacional en sostenibilidad y Sistema de Gestión Ambiental.
          </p>

          <div className="certificate-meta">
            <div>
              <strong>Programa</strong>
              <span>Ruta SGA · Guardián Vera</span>
            </div>

            <div>
              <strong>Reconocimiento</strong>
              <span>Guardián de la sostenibilidad</span>
            </div>
          </div>
        </div>
      </section>

      <div className="page-footer-actions">
        <button className="secondary-btn" onClick={() => setShowCertificate(false)}>
          Volver al logro
        </button>

        <button className="primary-btn" onClick={() => onNavigate("welcome")}>
          Ir al inicio
        </button>
      </div>
    </>
  );
}

export default CertificatePage;