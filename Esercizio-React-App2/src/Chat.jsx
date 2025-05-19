import { useState } from "react";

function AppChat() {
  // Impostiamo lo stato lista di messaggi come array vuoto
  const [messaggi, setMessaggi] = useState([]);

  // Impostiamo lo stato del testo che l'utente scrive come stringa vuota
  const [testo, setTesto] = useState("");

  // Impostiamo la funzione receivedMsg che simulerà la chat:
  // per ogni testo speifico che invieremo, restituirà una risposta preimpostata
  function receivedMsg(testo) {
    if (testo === "Ciao") {
      return "Ciao!";
    } else if (testo === "Come stai?") {
      return "Bene, grazie! E tu?";
    } else if (testo === "Bene!") {
      return "Fantastico! 😊";
    } else {
      return "Non ho capito 🥲";
    }
  }
  
  // Impostiamo la funzione invia che si occuperà di settare e modificare gli stati di messaggi e testo
  function invia() {
    if (testo !== "") {
      const risposta = receivedMsg(testo); // Popoliamo la costante risposta con i return della funzione receivedMsg
      const nuovoMessaggio = { testo, risposta }; // Popoliamo la costante nuovoMessaggio con un oggetto contenente il testo che l'utente scrive e una risposta
      setMessaggi([...messaggi, nuovoMessaggio]); // Impostiamo messaggi con un array contenente la copia di tutti i messaggi precedenti e il nuovo messaggio
      setTesto(""); // Ripuliamo l'input
    }
  }

  return (
    <div>
      {/* Mostriamo tutti i messaggi */}
      {messaggi.map((msg, i) => (
        <div key={i}> {/* Facciamo un map di tutto l'array e diamo una key con indice perché React lo richiede */}
          <p className="sent">{msg.testo}</p> {/* In questo p visualizziamo il testo dell'oggetto dell'array */}
          <p className="received">{msg.risposta}</p> {/* In questo p visualizziamo la risposta dell'oggetto dell'array */}
        </div>
      ))} 

      <input
        className="barra-msg"
        type="text"
        value={testo}
        onChange={(e) => setTesto(e.target.value)} //Impostiamo nel valore dell'input la modifica del testo che andiamo a scrivere
      />

      {/* Pulsante per inviare */}
      <button className="send-btn" onClick={invia}>➤</button>
    </div>
  );
};

export default AppChat;
