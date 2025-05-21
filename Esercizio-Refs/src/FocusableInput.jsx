import { useEffect, useRef } from "react";

function FocusableInput() {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <h2>Focusable Input</h2>
      <input type="text" ref={inputRef} placeholder="Focus!" />
    </>
  );
}

export default FocusableInput;
