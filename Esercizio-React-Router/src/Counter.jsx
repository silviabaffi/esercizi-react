import { useState } from "react"

function Counter({initialValue, changingValue}) {
    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement() {
        setCounter((c) => c + changingValue);
    };

    function handleCounterDecrement() {
        setCounter((c) => c - changingValue);
    };

    function handleCounterReset() {
        setCounter(initialValue);
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
