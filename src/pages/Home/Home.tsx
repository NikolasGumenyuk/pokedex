import { useGetAllPokemonQuery } from 'services/pokemon/pokemon';
import { useAppSelector } from 'store/hooks';

const Home: React.FC = () => {
  const { data } = useGetAllPokemonQuery();
  const pokemons = useAppSelector((state) => state.pokemons);

  console.log(pokemons);

  console.log(data);

  return (
    <div>
      <div>HomePage</div>
    </div>
  );
};

export default Home;
