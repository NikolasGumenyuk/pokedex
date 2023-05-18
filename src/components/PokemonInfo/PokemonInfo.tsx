import { useParams } from 'react-router-dom';

import { getGifUrl } from 'services/GetGifUrl/getGifUrl';
import { useGetPokemonByNameQuery } from 'services/pokemon/pokemon';

const PokemonInfo = () => {
  const { name } = useParams();
  const { data } = useGetPokemonByNameQuery(name?.replace(':', '') as string);
  const gif = getGifUrl(data?.id as number);

  return (
    <div className="flex h-[100vh] justify-center">
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
