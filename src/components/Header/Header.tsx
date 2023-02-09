import { useAppDispatch } from 'store/hooks';
import { initialState, setUser } from 'store/UserSlice';

const Header = () => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(setUser(initialState));
  };

  return (
    <div>
      <button onClick={handleLogOut}>log out</button>
    </div>
  );
};

export default Header;
