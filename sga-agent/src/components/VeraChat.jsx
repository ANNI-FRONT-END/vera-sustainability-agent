import { useState, useEffect, useRef } from "react";

const quickSuggestions = [
  "Qué es el SGA",
  "Qué es un aspecto ambiental",
  "Qué es un impacto ambiental",
  "Hazme una pregunta",
];

function VeraChat({ userName, setUserName, onUserReady }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "vera",
      text: "Hola, soy Vera. Antes de comenzar, ¿cómo te llamas?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [veraTyping, setVeraTyping] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, veraTyping]);

  const askBackend = async (question) => {
    try {
      const response = await fetch("https://vera-sustainability-backend.onrender.com/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      return data.answer;
    } catch (error) {
      return "No pude conectarme con el servidor del curso. Revisa si el backend está corriendo.";
    }
  };

  const sendMessage = async (text) => {
    const trimmedValue = text.trim();

    if (!trimmedValue) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: trimmedValue,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue("");

    if (!userName) {
      setUserName(trimmedValue);

      const veraMessage = {
        id: Date.now() + 1,
        sender: "vera",
        text: `Encantada, ${trimmedValue}. Ya activé tu experiencia. Ahora comenzaremos con un diagnóstico inicial en el panel principal para personalizar tu ruta.`,
      };

      setMessages((prevMessages) => [...prevMessages, veraMessage]);

      if (onUserReady) {
        onUserReady();
      }

      return;
    }

    setVeraTyping(true);

    const backendAnswer = await askBackend(trimmedValue);

    const veraMessage = {
      id: Date.now() + 1,
      sender: "vera",
      text: backendAnswer,
    };

    setMessages((prevMessages) => [...prevMessages, veraMessage]);
    setVeraTyping(false);
  };

  const handleSendMessage = () => {
    sendMessage(inputValue);
  };

  const handleSuggestionClick = (suggestion) => {
    if (!userName) return;
    sendMessage(suggestion);
  };

  return (
    <aside className="sidebar-panel">
      <div className="sidebar-header">
        <div className="vera-badge">V</div>

        <div>
          <h2>Guardián Vera</h2>
          <p>Agente de sostenibilidad</p>
        </div>
      </div>

      <div className="sidebar-body">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.sender === "vera" ? "vera" : "user"}`}
          >
            {message.text}
          </div>
        ))}

        {veraTyping && (
          <div className="message vera">
            Consultando el curso...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {userName && (
        <div className="quick-suggestions-wrapper">
          <p className="quick-suggestions-label">
            Puedes preguntarme sobre el curso o usar una sugerencia rápida:
          </p>

          <div className="quick-suggestions">
            {quickSuggestions.map((suggestion) => (
              <button
                key={suggestion}
                className="suggestion-chip"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="sidebar-input">
        <input
          type="text"
          placeholder={userName ? "Pregúntame sobre el curso" : "Escribe tu nombre"}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSendMessage();
            }
          }}
        />

        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </aside>
  );
}

export default VeraChat;