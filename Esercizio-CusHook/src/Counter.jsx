import useCounter from "./useCounter"

function Counter() {
    const { counter, handleIncrease, handleDecrement, handleReset } = useCounter(0)

    return (
        <>
            <h2>{counter}</h2>
            <button onClick={handleIncrease}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default Counter
