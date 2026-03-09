import { useState } from "react";
import VeraChat from "../components/VeraChat";
import WelcomePage from "../pages/WelcomePage";
import DiagnosticPage from "../pages/DiagnosticPage";
import ModulesPage from "../pages/ModulesPage";
import CoursePage from "../pages/CoursePage";
import IncubatorPage from "../pages/IncubatorPage";
import CertificatePage from "../pages/CertificatePage";

function MainLayout({
  userName,
  setUserName,
  diagnosticScore,
  setDiagnosticScore,
}) {
  const [currentView, setCurrentView] = useState("welcome");

  const handleUserReady = () => {
    setCurrentView("diagnostic");
  };

  const renderCurrentView = () => {
    if (!userName) {
      return (
        <div className="locked-panel">
          <div className="locked-panel-card">
            <span className="section-tag">Bienvenida</span>
            <h2>Primero cuéntame tu nombre</h2>
            <p>
              Cuando ingreses tu nombre en el chat, activaré tu experiencia de
              aprendizaje personalizada.
            </p>
          </div>
        </div>
      );
    }

    if (currentView === "welcome") {
      return <WelcomePage onNavigate={setCurrentView} userName={userName} />;
    }

    if (currentView === "diagnostic") {
      return (
        <DiagnosticPage
          onNavigate={setCurrentView}
          userName={userName}
          diagnosticScore={diagnosticScore}
          setDiagnosticScore={setDiagnosticScore}
        />
      );
    }

    if (currentView === "modules") {
      return (
        <ModulesPage
          onNavigate={setCurrentView}
          userName={userName}
          diagnosticScore={diagnosticScore}
        />
      );
    }

    if (currentView === "course") {
      return <CoursePage onNavigate={setCurrentView} userName={userName} />;
    }

    if (currentView === "incubator") {
      return <IncubatorPage onNavigate={setCurrentView} userName={userName} />;
    }

    if (currentView === "certificate") {
      return <CertificatePage onNavigate={setCurrentView} userName={userName} />;
    }

    return <WelcomePage onNavigate={setCurrentView} userName={userName} />;
  };

  return (
    <div className="app-shell">
      <div className="app-frame">
        <VeraChat
          userName={userName}
          setUserName={setUserName}
          onUserReady={handleUserReady}
        />
        <main className="content-panel">{renderCurrentView()}</main>
      </div>
    </div>
  );
}

export default MainLayout;