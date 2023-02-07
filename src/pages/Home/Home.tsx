import { useNavigate } from 'react-router-dom';

import { PathName } from 'models/PathName';
import { useGetPokemonByNameQuery } from 'services/pokemon/pokemon';
import { useAppDispatch } from 'store/hooks';
import { initialState, setUser } from 'store/UserSlice';

const Home: React.FC = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(setUser(initialState));
  };

  return (
    <div>
      <div>HomePage</div>
      <button onClick={() => navigate(PathName.login)}>go to login</button>
      <button onClick={handleLogOut}>log out</button>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.name}</h3>
          <img src={data.sprites.front_default} alt={data.species.name} />
        </>
      ) : null}
    </div>
  );
};

export default Home;
