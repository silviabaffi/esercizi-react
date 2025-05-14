import Button from "./Button"

function AlertClock() {
    function mostraOrario() {
        const orario = new Date()

        alert(`L'orario attuale è ${orario.toLocaleTimeString()}`)
    }
    
    return (
        <div>
            <button onClick={mostraOrario}>Cliccami!</button>
        </div>
    )
}

export default AlertClock
