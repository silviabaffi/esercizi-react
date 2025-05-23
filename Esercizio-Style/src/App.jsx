import "./App.css";
import Counter from "./Counter";
import Login from "./Login";
import Welcome from "./Welcome";

function App() {
  function handleLogin(data) {
    console.log(data);
  }

  return (
    <div>
      <Login onLogin={handleLogin} />
      <Welcome name="Silvia" />
      <Counter initialValue={0} changingValue={1} />
    </div>
  );
}

export default App;
