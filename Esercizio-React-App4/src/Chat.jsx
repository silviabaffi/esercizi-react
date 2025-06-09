import { useEffect, useRef, useState } from "react";
import useSWR from "swr";

function AppChat() {
  const [messaggi, setMessaggi] = useState([]);
  const [testo, setTesto] = useState("");

  const endpoint = "https://mocki.io/v1/6f23619c-3474-4559-b929-0838ca23edcc";

  const { data } = useSWR(endpoint);

  function invia() {
    if (testo !== "") {
      // const risposta = receivedMsg(testo);
      // const nuovoMessaggio = { testo, risposta };
      setMessaggi([...messaggi, testo]);
      setTesto("");
    }
  }

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messaggi]);

  return (
    <form onSubmit={invia}>
      {messaggi.map((msg, i) => (
        <div key={i}>
          <p className="sent">{msg}</p>
          <p className="received">{data.responses[i].data}</p>
          {/* <p className="sent">{msg.testo}</p>
          <p className="received">{msg.risposta}</p> */}
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
    </form>
  );
}

export default AppChat;
