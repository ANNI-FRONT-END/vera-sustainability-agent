import { useState, useEffect } from "react";
import MainLayout from "./layouts/MainLayout";

function App() {
  const [userName, setUserName] = useState("");
  const [diagnosticScore, setDiagnosticScore] = useState(null);

  useEffect(() => {
    setUserName("");
    setDiagnosticScore(null);
  }, []);

  return (
    <MainLayout
      userName={userName}
      setUserName={setUserName}
      diagnosticScore={diagnosticScore}
      setDiagnosticScore={setDiagnosticScore}
    />
  );
}

export default App;