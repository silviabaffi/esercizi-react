import { useEffect, useRef, useState } from "react";

function AppChat() {
  const [messaggi, setMessaggi] = useState([]);
  const [testo, setTesto] = useState("");

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

  function invia() {
    if (testo !== "") {
      const risposta = receivedMsg(testo);
      const nuovoMessaggio = { testo, risposta };
      setMessaggi([...messaggi, nuovoMessaggio]);
      setTesto("");
    }
  }

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messaggi]);

  return (
    <div>
      {messaggi.map((msg, i) => (
        <div key={i}>
          <p className="sent">{msg.testo}</p>
          <p className="received">{msg.risposta}</p>
        </div>
      ))}

      <input
        className="barra-msg"
        type="text"
        value={testo}
        onChange={(e) => setTesto(e.target.value)}
      />

      <button
        className="send-btn"
        onClick={invia}
        disabled={testo.trim() === ""}
      >
        ➤
      </button>

      <div ref={chatEndRef} />
    </div>
  );
}

export default AppChat;
