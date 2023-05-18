import React, { useEffect } from 'react';

import { toast, ToastContainer } from 'react-toastify';

import Loading from 'components/Loading/Loading';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setError } from 'store/SettingSlice';

import AppRouter from './AppRouter';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImage from './assets/pokeball-icon.png';

const App: React.FC = () => {
  const isLoading = useAppSelector((state) => state.setting.isLoading);
  const errorMessage = useAppSelector((state) => state.setting.error);
  const notify = (massage: string) => toast.error(`${massage}`);
  const dispatch = useAppDispatch();

  useEffect(() => {
    notify(errorMessage);
    setTimeout(() => {
      dispatch(setError(''));
    }, 4000);
  }, [errorMessage]);

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="main h-[100vh] bg-[#f6f8fc] bg-left-top bg-no-repeat"
    >
      {isLoading && <Loading />}
      <AppRouter />
      {!!errorMessage && <ToastContainer />}
    </div>
  );
};

export default App;
