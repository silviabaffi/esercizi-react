function AlertClock({ eventHandler, testo }) {
    return (
        <div>
            <button onClick={eventHandler} testo={testo}>Cliccami!</button>
        </div>
    )
}

export default AlertClock
