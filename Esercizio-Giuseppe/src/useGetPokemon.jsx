import useSWR from "swr";

function useGetPokemon(pokemon) {
  const { data, error, isLoading } = useSWR(
    pokemon ? `https://pokeapi.co/api/v2/pokemon/${pokemon}` : null
  );

  return {
    data,
    error,
    isLoading,
  };
}

export default useGetPokemon;
