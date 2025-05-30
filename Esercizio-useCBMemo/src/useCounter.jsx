import { useCallback, useState } from "react";

function useCounter() {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter((prev) => prev + 1);
  }

  function handleDecrement() {
    setCounter((prev) => prev - 1);
  }

  function handleReset() {
    setCounter(0);
  }

  const increment = useCallback(handleIncrement, []);
  const decrement = useCallback(handleDecrement, []);
  const reset = useCallback(handleReset, []);

  return { counter, increment, decrement, reset };
}

export default useCounter;
