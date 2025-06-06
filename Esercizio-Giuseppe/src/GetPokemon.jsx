import { useNavigate, useParams } from "react-router-dom";
import useGetPokemon from "./useGetPokemon";

function GetPokemon() {
  const { pokemon } = useParams();
  const { data, error, isLoading } = useGetPokemon(pokemon);
  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p style={{ color: "red" }}>Error: No Pokémon Found</p>;
  }
  if (!data) {
    return null;
  }

  return (
    <div className="poke-container">
      <h2>Yay! You catched {data.name}!</h2>
      <div className="img-container">
        <img src={data.sprites.front_default} />
        <img src={data.sprites.back_default} />
      </div>
      <strong>Type/s:</strong> {data.types.map((t) => t.type.name).join(", ")}
      <button onClick={() => navigate("/")} className="btn-back">Go back</button>
    </div>
  );
}

export default GetPokemon;
