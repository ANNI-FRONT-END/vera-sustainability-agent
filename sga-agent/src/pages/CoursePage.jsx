import { useState } from "react";

const lessons = [
  {
    id: 1,
    title: "Introducción al SGA",
    type: "Video",
    contentTitle: "Cimientos del Sistema de Gestión Ambiental",
    description:
      "En esta lección conocerás los fundamentos del SGA, su propósito dentro de la organización y cómo se conecta con la estrategia Misión Verde 2030.",
    reading:
      "El Sistema de Gestión Ambiental permite estructurar políticas, procesos y prácticas orientadas a reducir impactos, fortalecer la cultura ambiental y asegurar el cumplimiento de lineamientos corporativos.",
  },
  {
    id: 2,
    title: "Aspectos e impactos",
    type: "Lectura",
    contentTitle: "Cómo identificar aspectos e impactos ambientales",
    description:
      "Aprenderás a diferenciar entre lo que hacemos y el efecto que eso genera sobre el ambiente, usando ejemplos del entorno laboral.",
    reading:
      "Un aspecto ambiental es una actividad, producto o servicio que interactúa con el ambiente. Un impacto ambiental es el cambio que ocurre como consecuencia de esa interacción, ya sea positivo o negativo.",
  },
  {
    id: 3,
    title: "Buenas prácticas",
    type: "Actividad",
    contentTitle: "Hábitos sostenibles aplicados al día a día",
    description:
      "Explora acciones concretas que ayudan a reducir residuos, optimizar recursos y fortalecer el compromiso ambiental en la operación diaria.",
    reading:
      "Las buenas prácticas se incorporan en decisiones pequeñas pero frecuentes: consumo consciente, separación adecuada de residuos, uso eficiente de energía y prevención de riesgos ambientales.",
  },
];

function CoursePage({ onNavigate }) {
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);

  const activeLesson = lessons[activeLessonIndex];
  const isLastLesson = activeLessonIndex === lessons.length - 1;

  const handleNextLesson = () => {
    if (isLastLesson) {
      onNavigate("modules");
      return;
    }

    setActiveLessonIndex((prev) => prev + 1);
  };

  return (
    <>
      <div className="topbar">
        <div>
          <span className="eyebrow">Microlearning</span>
          <h1>Ruta de aprendizaje del curso</h1>
        </div>

        <div className="topbar-badges">
          <span className="badge">
            Lección {activeLessonIndex + 1} de {lessons.length}
          </span>
          <span className="badge">{activeLesson.type}</span>
        </div>
      </div>

      <div className="course-layout">
        <aside className="lesson-menu">
          <span className="section-tag">Lecciones</span>
          <div className="lesson-list">
            {lessons.map((lesson, index) => (
              <button
                key={lesson.id}
                className={`lesson-item ${
                  activeLessonIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveLessonIndex(index)}
              >
                <span className="lesson-item-number">{index + 1}</span>

                <div className="lesson-item-content">
                  <strong>{lesson.title}</strong>
                  <span>{lesson.type}</span>
                </div>
              </button>
            ))}
          </div>
        </aside>

        <section className="lesson-content">
          <div className="lesson-media-card">
            <span className="section-tag">{activeLesson.type}</span>
            <h2>{activeLesson.contentTitle}</h2>
            <p>{activeLesson.description}</p>

            <div className="video-placeholder">
              <div className="play-badge">▶</div>
              <span>Espacio visual para recurso multimedia</span>
            </div>
          </div>

          <div className="lesson-reading-card">
            <h3>Lectura guiada</h3>
            <p>{activeLesson.reading}</p>
          </div>

          <div className="page-footer-actions">
            <button className="secondary-btn" onClick={() => onNavigate("modules")}>
              Volver a módulos
            </button>

            <button className="primary-btn" onClick={handleNextLesson}>
              {isLastLesson ? "Finalizar lección" : "Siguiente lección"}
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default CoursePage;