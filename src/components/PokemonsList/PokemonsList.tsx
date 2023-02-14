import PokemonCard from 'components/PokemonCard/PokemonCard';
import { useGetAllPokemonQuery } from 'services/pokemon/pokemon';
import { useAppSelector } from 'store/hooks';

const PokemonsList = () => {
  const {} = useGetAllPokemonQuery();
  const pokemonsList = useAppSelector((state) => state.pokeBase.pokemons);

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {pokemonsList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonsList;
