import { useAppDispatch, useAppSelector } from 'store/hooks';
import { initialState, setUser } from 'store/UserSlice';

import logo from '../../assets/logo.png';

const Header = () => {
  const dispatch = useAppDispatch();
  const { firstName, lastName } = useAppSelector((state) => state.user);
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const user = `${firstName[0]}${lastName[0]}`;

  const handleLogOut = () => {
    dispatch(setUser(initialState));
  };

  return (
    <nav className="sticky top-0 z-10 flex w-full items-center justify-between bg-white px-5 shadow-md">
      <div className="flex items-center py-2">
        <img className="h-10 px-4" src={logo} alt="logo" />
        <p className="text-2xl">Pokedex</p>
      </div>
      <div className="flex items-center">
        <div style={{ backgroundColor: `#${randomColor}` }} className="flex h-9 w-9 rounded-full">
          <div className="m-auto">
            <span>{user}</span>
          </div>
        </div>
        <button
          className="mx-5 inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
          onClick={handleLogOut}
        >
          log out
        </button>
      </div>
    </nav>
  );
};

export default Header;
