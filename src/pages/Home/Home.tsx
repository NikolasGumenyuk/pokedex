import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'store/hooks';
import { setUser } from 'store/UserSlice';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(setUser({ firstName: '', lastName: '', isAuth: false }));
  };

  return (
    <div>
      <div>HomePage</div>
      <button onClick={() => navigate('/login')}>go to login</button>
      <button onClick={() => handleLogOut()}>log out</button>
    </div>
  );
};

export default Home;
