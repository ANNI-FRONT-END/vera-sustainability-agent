const express = require("express");
const cors = require("cors");
const { knowledgeBase, practiceQuestions } = require("./knowledgeBase");

const app = express();
app.use(cors());
app.use(express.json());
let lastPracticeQuestion = null;

function findBestItem(question) {
  const q = question.toLowerCase();

  let bestItem = null;
  let bestScore = -1;

  for (const item of knowledgeBase) {
    let score = 0;

    for (const keyword of item.keywords) {
      if (q.includes(keyword.toLowerCase())) {
        score += keyword.length > 6 ? 3 : 2;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestItem = item;
    }
  }

  if (!bestItem || bestScore <= 0) {
    return null;
  }

  return bestItem;
}

/* NUEVA FUNCIÓN */

function getRandomPracticeQuestion() {
  const randomIndex = Math.floor(Math.random() * practiceQuestions.length);
  return practiceQuestions[randomIndex];
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function evaluatePracticeAnswer(userAnswer) {
  if (!lastPracticeQuestion) {
    return null;
  }

  const normalizedUserAnswer = normalizeText(userAnswer);
  const expectedKeywords = (lastPracticeQuestion.expectedKeywords || []).map(normalizeText);

  let matches = 0;

  for (const keyword of expectedKeywords) {
    if (normalizedUserAnswer.includes(keyword)) {
      matches += 1;
    }
  }

  const matchRatio =
    expectedKeywords.length > 0 ? matches / expectedKeywords.length : 0;

  if (matchRatio >= 0.6) {
    return `Muy bien. Tu respuesta es coherente con la idea esperada. Respuesta esperada: ${lastPracticeQuestion.answer}`;
  }

  if (matchRatio >= 0.25) {
    return `Vas por buen camino, pero te faltó más precisión. Respuesta esperada: ${lastPracticeQuestion.answer}`;
  }

  return `Tu respuesta necesita refuerzo. Una respuesta más precisa sería: ${lastPracticeQuestion.answer}`;
}

function buildAnswer(question, item) {
  const q = question.toLowerCase();

  const wantsPractice =
  q.includes("hazme una pregunta") ||
  q.includes("quiero practicar") ||
  q.includes("quiz") ||
  q.includes("pregunta de práctica") ||
  q.includes("pregunta de practica") ||
  q.includes("otra pregunta") ||
  q.includes("otra") ||
  q.includes("sigamos practicando") ||
  q.includes("quiero otra");

  const wantsSimple =
    q.includes("fácil") ||
    q.includes("facil") ||
    q.includes("simple") ||
    q.includes("explícame") ||
    q.includes("explicame");

  const wantsExample =
    q.includes("ejemplo") ||
    q.includes("caso práctico") ||
    q.includes("caso practico");

  const wantsFullTutorMode =
    q.includes("explícame mejor") ||
    q.includes("explicame mejor") ||
    q.includes("enséñame") ||
    q.includes("enseñame");

  if (wantsPractice) {
    const practiceItem = getRandomPracticeQuestion();
    return `Pregunta de práctica: ${practiceItem.question}`;
  }

  if (wantsFullTutorMode) {
    return `Definición: ${item.answer}\n\nEn palabras simples: ${item.simple}\n\nEjemplo práctico: ${item.example}`;
  }

  if (wantsSimple) {
    return item.simple;
  }

  if (wantsExample) {
    return item.example;
  }

  return item.answer;
}

app.get("/", (req, res) => {
  res.send("Backend del curso activo");
});

app.post("/ask", (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        answer: "No recibí ninguna pregunta.",
      });
    }

    const q = question.toLowerCase();

    /* NUEVA PREGUNTA DE PRÁCTICA */
    const wantsNewPracticeQuestion =
      q.includes("otra pregunta") ||
      q.includes("quiero otra") ||
      q.includes("sigamos practicando");

    if (wantsNewPracticeQuestion) {
      const practiceItem = getRandomPracticeQuestion();
      lastPracticeQuestion = practiceItem;

      return res.json({
        answer: `Pregunta de práctica: ${practiceItem.question}`,
      });
    }

    /* ACTIVAR PRÁCTICA */
    const wantsPractice =
      q.includes("hazme una pregunta") ||
      q.includes("quiero practicar") ||
      q.includes("quiz") ||
      q.includes("pregunta de práctica") ||
      q.includes("pregunta de practica");

    if (wantsPractice) {
      const practiceItem = getRandomPracticeQuestion();
      lastPracticeQuestion = practiceItem;

      return res.json({
        answer: `Pregunta de práctica: ${practiceItem.question}`,
      });
    }

    /* EVALUAR RESPUESTA */
    const wantsEvaluation =
      q.startsWith("respuesta:") ||
      q.startsWith("mi respuesta es") ||
      q.startsWith("creo que") ||
      q.startsWith("diría que") ||
      q.startsWith("diria que") ||
      (!!lastPracticeQuestion && q.length > 3);

    if (wantsEvaluation && lastPracticeQuestion) {
      const evaluation = evaluatePracticeAnswer(question);
      lastPracticeQuestion = null;

      return res.json({
        answer: evaluation,
      });
    }

    const item = findBestItem(question);

    if (!item) {
      return res.json({
        answer:
          "Puedo ayudarte con temas del curso SGA, Misión Verde 2030, aspectos e impactos ambientales, roles, ecoeficiencia y buenas prácticas.",
      });
    }

    const answer = buildAnswer(question, item);

    return res.json({ answer });
  } catch (error) {
    console.error("Error en /ask:", error.message);

    return res.status(500).json({
      answer: "Ocurrió un error consultando el contenido del curso.",
    });
  }
});

app.listen(3001, () => {
  console.log("Servidor del curso corriendo en http://localhost:3001");
});