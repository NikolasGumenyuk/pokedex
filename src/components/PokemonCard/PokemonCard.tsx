import { Pokemon } from 'services/pokemon/pokemon.types';

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({
  pokemon: {
    name,
    sprites: { front_default: img },
  },
}: Props) => {
  return (
    <div className="m-10 rounded-lg bg-white p-10 shadow-md">
      <img src={img} alt="pokemonImg" />
      <p className="flex justify-center">{name}</p>
    </div>
  );
};

export default PokemonCard;
