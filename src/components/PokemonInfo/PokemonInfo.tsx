import { getGifUrl } from 'services/GetGifUrl/getGifUrl';
import { useGetPokemonByNameQuery } from 'services/pokemon/pokemon';
import { useAppSelector } from 'store/hooks';

const PokemonInfo = () => {
  const currentPokemon = useAppSelector((state) => state.pokeBase.currentPokemon);
  const { data } = useGetPokemonByNameQuery(currentPokemon);
  const gif = getGifUrl(data?.id as number);

  return (
    <div className="flex justify-center">
      <div>
        <img src={gif} alt="" />
      </div>
      <div>
        <h1>{data?.name}</h1>
      </div>
    </div>
  );
};

export default PokemonInfo;
