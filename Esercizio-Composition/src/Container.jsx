import { useState } from "react";

function Container({ title, children }) {
  const [hidden, setHidden] = useState(false);

  function handleHiddenToggle() {
    setHidden((prev) => !prev);
  }

  const divStyle = {
    backgroundColor: "white",
    border: "2px solid red",
  };

  return (
    <div className="container" style={divStyle}>
      <h2 className="title">{title}</h2>
      <button onClick={handleHiddenToggle}>
        {!hidden ? "Nascondi" : "Visualizza"}
      </button>
      <div className={!hidden ? "children" : "children-hidden"}>{children}</div>
    </div>
  );
}

export default Container;
