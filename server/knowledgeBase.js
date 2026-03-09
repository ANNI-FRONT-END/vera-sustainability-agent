const knowledgeBase = [
  {
    topic: "introduccion",
    keywords: ["objetivo", "objetivos", "curso", "introducción", "introduccion"],
    answer:
      "El objetivo del curso es fortalecer la comprensión y el compromiso con el Sistema de Gestión Ambiental (SGA) y la estrategia Misión Verde 2030.",
    simple:
      "En palabras simples, este curso busca que las personas entiendan mejor la gestión ambiental y se comprometan con las metas de sostenibilidad de la organización.",
    example:
      "Por ejemplo, el curso ayuda a que un colaborador sepa cómo actuar frente al consumo de recursos, los residuos o las buenas prácticas del día a día.",
  },
  {
    topic: "sga",
    keywords: ["sga", "sistema de gestión ambiental", "sistema gestion ambiental"],
    answer:
      "El SGA es un conjunto de políticas y herramientas para identificar y mejorar el impacto ambiental, basado en la norma ISO 14001:2015.",
    simple:
      "En palabras simples, el SGA es la forma organizada en que la empresa gestiona y mejora su relación con el ambiente.",
    example:
      "Por ejemplo, el SGA permite definir metas, medir resultados y corregir acciones para reducir impactos ambientales.",
  },
  {
    topic: "phva",
    keywords: ["phva", "planificar", "hacer", "verificar", "actuar"],
    answer:
      "El modelo PHVA significa Planificar, Hacer, Verificar y Actuar, y se usa para la mejora continua del Sistema de Gestión Ambiental.",
    simple:
      "En sencillo, PHVA es una forma de trabajar en ciclos para planear, ejecutar, revisar y mejorar.",
    example:
      "Por ejemplo, primero se define una meta ambiental, luego se implementa, después se mide y finalmente se ajusta para mejorar.",
  },
  {
    topic: "mision_verde",
    keywords: ["misión verde", "mision verde", "2030"],
    answer:
      "Misión Verde 2030 se centra en tres pilares: ecoeficiencia operacional, economía circular y abastecimiento sostenible.",
    simple:
      "En palabras simples, Misión Verde 2030 es la estrategia que guía las acciones ambientales y sostenibles de la organización.",
    example:
      "Por ejemplo, incluye reducir emisiones, gestionar mejor los residuos y trabajar con proveedores más sostenibles.",
  },
  {
    topic: "pilares",
    keywords: ["pilares", "ecoeficiencia", "economía circular", "economia circular", "abastecimiento sostenible"],
    answer:
      "Los pilares de Misión Verde 2030 son ecoeficiencia operacional, economía circular y abastecimiento sostenible.",
    simple:
      "En sencillo, estos pilares muestran en qué frentes se concentra la estrategia ambiental de la organización.",
    example:
      "Por ejemplo, ahorrar energía pertenece a ecoeficiencia, reciclar pertenece a economía circular y compras verdes pertenece a abastecimiento sostenible.",
  },
  {
    topic: "roles",
    keywords: ["roles", "responsabilidades", "liderazgo", "vicepresidencia", "proveedores", "colaboradores"],
    answer:
      "La Vicepresidencia Administrativa lidera la planeación y control del SGA, mientras colaboradores y proveedores también tienen responsabilidades ambientales específicas.",
    simple:
      "En palabras simples, la gestión ambiental no depende solo de un área: hay liderazgo central, pero todos participan.",
    example:
      "Por ejemplo, un colaborador debe aplicar buenas prácticas y reportar anomalías, mientras un proveedor debe cumplir cláusulas ambientales.",
  },
  {
    topic: "marco_legal",
    keywords: ["marco legal", "matriz legal", "normativa", "normativo", "legal"],
    answer:
      "El marco legal se gestiona mediante una Matriz Legal Ambiental para cumplir la normativa aplicable en cada país.",
    simple:
      "En sencillo, la matriz legal ayuda a organizar y cumplir las normas ambientales que aplican en cada lugar.",
    example:
      "Por ejemplo, permite revisar requisitos distintos para Colombia, Costa Rica, El Salvador, Honduras o Panamá.",
  },
  {
    topic: "aspecto_ambiental",
    keywords: ["aspecto ambiental", "aspecto", "qué hacemos", "que hacemos"],
    answer:
      "Un aspecto ambiental es el qué hacemos que puede interactuar con el ambiente, como el consumo de agua o el uso de papel.",
    simple:
      'En palabras simples, un aspecto ambiental es una acción o actividad que realizamos y que tiene relación con el ambiente.',
    example:
      "Por ejemplo, imprimir documentos, usar agua o consumir energía son aspectos ambientales.",
  },
  {
    topic: "impacto_ambiental",
    keywords: ["impacto ambiental", "impacto", "consecuencia", "efecto"],
    answer:
      "Un impacto ambiental es la consecuencia o efecto de una acción sobre el ambiente, como el agotamiento de recursos o la contaminación.",
    simple:
      "En sencillo, el impacto ambiental es el resultado que deja una acción sobre el ambiente.",
    example:
      "Por ejemplo, si se usa demasiada agua, uno de los impactos puede ser el agotamiento del recurso.",
  },
  {
    topic: "matriz_valoracion",
    keywords: ["matriz", "valoración", "valoracion", "frecuencia", "magnitud", "probabilidad"],
    answer:
      "La organización utiliza una matriz de valoración basada en frecuencia, magnitud y probabilidad para definir prioridades y controles ambientales.",
    simple:
      "En palabras simples, esta matriz ayuda a decidir qué temas ambientales son más importantes y deben atenderse primero.",
    example:
      "Por ejemplo, un impacto frecuente, grande y probable tendrá prioridad frente a otro menos relevante.",
  },
  {
    topic: "huella_carbono",
    keywords: ["huella de carbono", "carbono neutro", "ghg protocol", "net-zero", "net zero"],
    answer:
      "La huella de carbono se mide bajo el GHG Protocol y la organización cuenta con certificación de Carbono Neutro desde 2022, con meta de Net-Zero a 2050.",
    simple:
      "En sencillo, la organización mide sus emisiones, ya es carbono neutro y tiene una meta de reducción más ambiciosa hacia 2050.",
    example:
      "Por ejemplo, esta medición permite identificar dónde reducir emisiones de energía, operación o desplazamientos.",
  },
  {
    topic: "eficiencia_energetica",
    keywords: ["energía", "energia", "luces led", "sensores", "paneles solares", "trabajo híbrido", "trabajo hibrido"],
    answer:
      "La eficiencia energética se impulsa con luces LED, sensores de movimiento, paneles solares y esquemas de trabajo híbrido.",
    simple:
      "En palabras simples, se busca usar menos energía y usarla de manera más eficiente.",
    example:
      "Por ejemplo, instalar luces LED o usar sensores evita consumo innecesario en oficinas.",
  },
  {
    topic: "eficiencia_hidrica",
    keywords: ["agua", "hídrica", "hidrica", "grifería", "grifería", "baños verdes", "limpieza"],
    answer:
      "La eficiencia hídrica se apoya en grifería eficiente, baños verdes y productos biodegradables para limpieza.",
    simple:
      "En sencillo, se trata de usar mejor el agua y reducir desperdicios en la operación.",
    example:
      "Por ejemplo, una grifería eficiente ayuda a disminuir el consumo de agua en baños y oficinas.",
  },
  {
    topic: "residuos",
    keywords: ["residuos", "basura cero", "reciclaje", "compostaje", "cero papel", "separación en la fuente", "separacion en la fuente"],
    answer:
      "La gestión de residuos incluye separación en la fuente, reciclaje, compostaje de borra de café, digitalización de procesos y certificación Basura Cero categoría Oro.",
    simple:
      "En palabras simples, la organización busca reducir residuos, separarlos mejor y aprovechar materiales en vez de desecharlos.",
    example:
      "Por ejemplo, separar cartón y plástico correctamente o digitalizar procesos ayuda a disminuir residuos y uso de papel.",
  },
  {
    topic: "abastecimiento",
    keywords: ["abastecimiento sostenible", "compras verdes", "proveedores estratégicos", "proveedores estrategicos", "cláusulas ambientales", "clausulas ambientales"],
    answer:
      "El abastecimiento sostenible incluye cláusulas ambientales en contratos, compras verdes y evaluación ambiental para proveedores estratégicos.",
    simple:
      "En sencillo, significa comprar y contratar considerando también el impacto ambiental.",
    example:
      "Por ejemplo, elegir productos biodegradables o proveedores con mejores prácticas ambientales es parte de este enfoque.",
  },
  {
    topic: "practicas",
    keywords: ["buenas prácticas", "buenas practicas", "acciones correctas", "actividades prácticas", "actividades practicas"],
    answer:
      "Entre las acciones correctas están apagar luces y equipos, revisar documentos en digital, reportar fugas de agua, separar residuos, priorizar reuniones virtuales y elegir proveedores con criterios ambientales.",
    simple:
      "En palabras simples, son hábitos concretos que ayudan a reducir impactos ambientales en el trabajo diario.",
    example:
      "Por ejemplo, apagar luces al salir o evitar imprimir cuando se puede revisar un documento en digital son buenas prácticas.",
  },
];

const practiceQuestions = [
  {
    id: 1,
    topic: "sga",
    question: "¿Qué es el Sistema de Gestión Ambiental (SGA)?",
    answer:
      "Es un conjunto de políticas y herramientas para identificar y mejorar el impacto ambiental, basado en la norma ISO 14001:2015.",
    expectedKeywords: ["políticas", "herramientas", "impacto ambiental", "iso 14001"],
  },
  {
    id: 2,
    topic: "aspecto_ambiental",
    question: "¿Qué es un aspecto ambiental?",
    answer:
      "Es el qué hacemos que puede interactuar con el ambiente, como el consumo de agua o el uso de papel.",
    expectedKeywords: ["qué hacemos", "interactuar con el ambiente", "agua", "papel"],
  },
  {
    id: 3,
    topic: "impacto_ambiental",
    question: "¿Qué es un impacto ambiental?",
    answer:
      "Es la consecuencia o efecto de una acción sobre el ambiente, como el agotamiento de recursos o la contaminación.",
    expectedKeywords: ["consecuencia", "efecto", "ambiente", "contaminación", "agotamiento"],
  },
  {
    id: 4,
    topic: "mision_verde",
    question: "¿Cuáles son los tres pilares de Misión Verde 2030?",
    answer:
      "Ecoeficiencia operacional, economía circular y abastecimiento sostenible.",
    expectedKeywords: ["ecoeficiencia", "economía circular", "abastecimiento sostenible"],
  },
  {
    id: 5,
    topic: "phva",
    question: "¿Qué significa el modelo PHVA?",
    answer:
      "Planificar, Hacer, Verificar y Actuar.",
    expectedKeywords: ["planificar", "hacer", "verificar", "actuar"],
  },
  {
    id: 6,
    topic: "practicas",
    question: "Menciona una buena práctica de ecoeficiencia que promueva el curso.",
    answer:
      "Por ejemplo: apagar luces y equipos, revisar documentos en digital, reportar fugas de agua o separar residuos.",
    expectedKeywords: ["apagar luces", "digital", "fugas de agua", "separar residuos"],
  },
];

module.exports = {
  knowledgeBase,
  practiceQuestions,
};