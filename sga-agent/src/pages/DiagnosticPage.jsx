import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "¿Cuáles son los tres pilares fundamentales en los que se centra la estrategia Misión Verde 2030?",
    options: [
      "Ahorro de agua, reducción de energía y gestión de papel.",
      "Ecoeficiencia operacional, economía circular y abastecimiento sostenible",
      "Carbono neutralidad, certificación ISO y auditorías legales",
      "Cultura organizacional, innovación tecnológica y responsabilidad social",
    ],
    correctAnswer:
      "Ecoeficiencia operacional, economía circular y abastecimiento sostenible",
  },
  {
    id: 2,
    question: "¿Qué norma internacional sirve como base para el Sistema de Gestión Ambiental (SGA) y qué modelo utiliza para la mejora continua?",
    options: [
      "ISO 9001 y el modelo de gestión por procesos.",
      "ISO 14001:2015 y el modelo PHVA (Planificar, Hacer, Verificar, Actuar).",
      "ISO 45001 y el modelo de prevención de riesgos.",
      " ISO 50001 y el modelo de eficiencia energética.",
    ],
    correctAnswer:
      "ISO 14001:2015 y el modelo PHVA (Planificar, Hacer, Verificar, Actuar).",
  },
  {
    id: 3,
    question: " En el contexto del SGA, ¿cómo se define la relación entre un aspecto ambiental y un impacto ambiental?",
    options: [
      "Son términos sinónimos que se refieren a las leyes ambientales.",
      "El impacto es la actividad que realizamos (causa) y el aspecto es la consecuencia legal.",
      "El aspecto es lo que generamos o usamos (el qué hacemos), mientras que el impacto es la consecuencia de esa acción sobre el ambiente.",
      "El aspecto es siempre positivo y el impacto es siempre negativo para la organización.",
    ],
    correctAnswer:
      "El aspecto es lo que generamos o usamos (el qué hacemos), mientras que el impacto es la consecuencia de esa acción sobre el ambiente.",
  },
];

function DiagnosticPage({
  onNavigate,
  userName,
  diagnosticScore,
  setDiagnosticScore,
}) {
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleNextQuestion = () => {
    if (!selectedOption) return;

    const answerRecord = {
      questionId: currentQuestion.id,
      selectedOption,
      isCorrect: selectedOption === currentQuestion.correctAnswer,
    };

    const updatedAnswers = [...answers, answerRecord];
    setAnswers(updatedAnswers);

    if (isLastQuestion) {
      const totalCorrect = updatedAnswers.filter((answer) => answer.isCorrect).length;
      setScore(totalCorrect);

      if (setDiagnosticScore) {
        setDiagnosticScore(totalCorrect);
      }

      setSelectedOption("");
      return;
    }

    setCurrentQuestionIndex((prev) => prev + 1);
    setSelectedOption("");
  };

  if (!started) {
    return (
      <>
        <div className="topbar">
          <div>
            <span className="eyebrow">Diagnóstico inicial</span>
            <h1>Termómetro ambiental</h1>
          </div>

          <div className="topbar-badges">
            <span className="badge">Paso 1 de 3</span>
          </div>
        </div>

        <section className="hero-card">
          <span className="section-tag">Assessment</span>
          <h2>
            {userName
              ? `${userName}, descubramos tu nivel de conocimiento`
              : "Descubramos tu nivel de conocimiento"}
          </h2>
          <p>
            Te haré unas preguntas iniciales para identificar tu nivel y
            recomendarte una ruta de aprendizaje personalizada.
          </p>

          <div className="action-row">
            <button className="primary-btn" onClick={() => setStarted(true)}>
              Iniciar diagnóstico
            </button>

            <button className="secondary-btn" onClick={() => onNavigate("modules")}>
              Saltar a módulos
            </button>
          </div>
        </section>
      </>
    );
  }

  if (score !== null) {
    const needsReinforcement = score < 2;

    return (
      <>
        <div className="topbar">
          <div>
            <span className="eyebrow">Resultado del diagnóstico</span>
            <h1>Ruta recomendada para ti</h1>
          </div>

          <div className="topbar-badges">
            <span className="badge">
              Puntaje: {score} / {questions.length}
            </span>
          </div>
        </div>

        <section className="diagnostic-result">
          {needsReinforcement ? (
            <>
              <h3>Recomendamos reforzar fundamentos del SGA</h3>
              <p>
                Tu resultado muestra oportunidades de refuerzo en conceptos base
                del Sistema de Gestión Ambiental.
              </p>

              <ul>
                <li>Módulo 1: Introducción al SGA</li>
                <li>Módulo 2: Roles, responsabilidades y marco normativo</li>
                <li>Módulo 3: Aspectos e impactos ambientales</li>
              </ul>
            </>
          ) : (
            <>
              <h3>Tienes una buena base para avanzar</h3>
              <p>
                Tu resultado muestra que ya dominas varios conceptos clave y
                puedes avanzar a contenidos de aplicación.
              </p>

              <ul>
                <li>Módulo 4: Pilares de Misión Verde 2030</li>
                <li>Ecoeficiencia operacional</li>
                <li>Economía circular y abastecimiento sostenible</li>
              </ul>
            </>
          )}

          <div className="page-footer-actions">
            <button className="secondary-btn" onClick={() => onNavigate("welcome")}>
              Volver al inicio
            </button>

            <button className="primary-btn" onClick={() => onNavigate("modules")}>
              Ver módulos recomendados
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
          <span className="eyebrow">Diagnóstico inicial</span>
          <h1>Termómetro ambiental</h1>
        </div>

        <div className="topbar-badges">
          <span className="badge">
            Pregunta {currentQuestionIndex + 1} de {questions.length}
          </span>
        </div>
      </div>

      <section className="diagnostic-card">
        <div className="progress-header">
          <span>Progreso del diagnóstico</span>
          <span>{Math.round(progressPercentage)}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        <div className="question-block">
          <span className="section-tag">Pregunta activa</span>
          <h2>{currentQuestion.question}</h2>
        </div>

        <div className="options-list">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              className={`option-card ${selectedOption === option ? "selected" : ""}`}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="page-footer-actions">
          <button className="primary-btn" onClick={handleNextQuestion} disabled={!selectedOption}>
            {isLastQuestion ? "Finalizar diagnóstico" : "Siguiente pregunta"}
          </button>
        </div>
      </section>
    </>
  );
}

export default DiagnosticPage;