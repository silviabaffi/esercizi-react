import { useState } from "react"
import { useEffect } from "react"
import Clock from "./Clock";

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

    useEffect(() => {
            console.log("The current value is " + counter)
        }, [counter])

    return (
        <>
            <Clock />
            <h2>{counter}</h2>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>
            <button onClick={handleCounterReset}>Reset</button>
        </>
    )
}

export default Counter
