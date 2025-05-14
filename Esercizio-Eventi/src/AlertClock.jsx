import Button from "./Button"

function AlertClock() {
    function mostraOrario() {
        const orario = new Date()

        alert(`L'orario attuale è ${orario.toLocaleTimeString()}`)
    }
    
    return (
        <div>
            {/* <button onClick={mostraOrario}>Cliccami!</button> */}
            <Button onClick={mostraOrario} testo="Cliccami!" />
        </div>
    )
}

export default AlertClock
