import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Pokemon } from 'models/Pokemon';
import { getGifUrl } from 'services/GetGifUrl/getGifUrl';
import { useAppSelector } from 'store/hooks';

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({
  pokemon: {
    id,
    name,
    types,
    sprites: { front_default: img },
  },
}: Props) => {
  const allPokemonsTypes = useAppSelector((state) => state.pokeBase.pokemonsTypes);
  const [isHover, setIsHover] = useState<boolean>(false);
  const gif = getGifUrl(id);

  return (
    <Link to={`/pokemon/:${name}`}>
      <div
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        className="m-10 flex w-64 flex-col items-center rounded-lg bg-white px-16 py-8 shadow-md delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:shadow-blue-500/50"
      >
        <img
          src={isHover ? gif : img}
          alt="pokemonImg"
          className="w-28 max-w-md pb-10"
          style={{ imageRendering: 'pixelated' }}
        />
        <h3 className="flex justify-center text-2xl font-bold capitalize">{name}</h3>
        <span className="flex justify-center pt-3 font-mono">
          {types.map((type) => (
            <p
              key={type.type.name}
              className="m-1 rounded-lg px-2 py-1 text-sm font-semibold	"
              style={{ backgroundColor: allPokemonsTypes[type.type.name] }}
            >
              {type.type.name}
            </p>
          ))}
        </span>
      </div>
    </Link>
  );
};

export default PokemonCard;
