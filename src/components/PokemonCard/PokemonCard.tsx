import { Pokemon } from 'models/Pokemon';

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
    <div className="m-10 rounded-lg bg-white p-20 shadow-md hover:shadow-blue-500/50">
      <img src={img} alt="pokemonImg" />
      <p className="flex justify-center">{name}</p>
    </div>
  );
};

export default PokemonCard;
