import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [pokemon, setPokemon] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (pokemon) {
      navigate(`/${pokemon}`);
    }
  }

  return (
    <div className="search-poke">
      <h2>Catch your Pokémon!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Pokémon"
          value={pokemon}
          onChange={(e) => setPokemon(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default HomePage;
