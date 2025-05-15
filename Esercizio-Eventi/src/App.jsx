import './App.css'
import AlertClock from './AlertClock'

function App() {
  function mostraOrario() {
        const orario = new Date()

        alert(`L'orario attuale è ${orario.toLocaleTimeString()}`)
    }
  
    return <AlertClock onClick={mostraOrario} />
}

export default App
