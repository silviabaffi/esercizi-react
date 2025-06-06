import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import GetPokemon from "./GetPokemon";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:pokemon" element={<GetPokemon />} />
    </Routes>
  );
}

export default App;
