import Welcome from "./Welcome";
import { useState } from "react";

function InteractiveWelcome() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        className="input1"
      />
      <Welcome name={name} />
    </>
  );
}

export default InteractiveWelcome;
