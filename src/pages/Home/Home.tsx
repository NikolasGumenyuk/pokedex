import { useNavigate } from 'react-router-dom';

import { PathName } from 'models/PathName';
import { useAppDispatch } from 'store/hooks';
import { initialState, setUser } from 'store/UserSlice';

const Home: React.FC = () => {
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
    </div>
  );
};

export default Home;
