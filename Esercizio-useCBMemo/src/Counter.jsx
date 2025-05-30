import useCounter from "./useCounter";

function Counter() {
    const { counter, increment, decrement, reset } = useCounter(0)

  return (
    <>
      <h3>Counter is: {counter}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Counter;
