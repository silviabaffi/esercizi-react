import { useState } from "react"
import CounterDisplay from "./CounterDisplay"

function Counter({initialValue, value}) {
    const [counter, setCounter] = useState(0)

    function handleCounterIncrement() {
        setCounter((c) => c + value);
    };

    function handleCounterDecrement() {
        setCounter((c) => c - value);
    };

    function handleCounterReset() {
        setCounter(initialValue);
    };

    return (
        <>
            <CounterDisplay handleCount={counter} />
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>
            <button onClick={handleCounterReset}>Reset</button>
        </>
    )
}

export default Counter
