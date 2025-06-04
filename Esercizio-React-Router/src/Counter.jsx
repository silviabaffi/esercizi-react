import { useState } from "react"

function Counter() {
    const [counter, setCounter] = useState(0)

    function handleCounterIncrement() {
        setCounter((c) => c + 1);
    };

    function handleCounterDecrement() {
        setCounter((c) => c - 1);
    };

    function handleCounterReset() {
        setCounter(0);
    };

    return (
        <>
            <h2>Counter to {counter}</h2>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>
            <button onClick={handleCounterReset}>Reset</button>
        </>
    )
}

export default Counter
