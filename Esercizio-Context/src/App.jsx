import { useState } from "react";
import "./App.css";
import Hello from "./Hello";
import LanguageContext from "./LanguageContext";

function App() {
  const [language, setLanguage] = useState("Hello, World!");

  const messages = {
    en: "Hello, World!",
    it: "Ciao, Mondo!",
    fr: "Bonjour, tout le Monde!",
    es: "¡Hola, Mundo!",
    de: "Hallo, Welt!",
  };

  return (
    <LanguageContext.Provider value={language}>
      <label>Select Language:</label>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value={messages.en}>English</option>
        <option value={messages.it}>Italian</option>
        <option value={messages.fr}>French</option>
        <option value={messages.es}>Spanish</option>
        <option value={messages.de}>German</option>
      </select>
      <Hello text={language} />
    </LanguageContext.Provider>
  );
}

export default App;
