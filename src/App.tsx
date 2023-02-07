import React, { useEffect } from 'react';

import { toast, ToastContainer } from 'react-toastify';

import Loading from 'components/Loading/Loading';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setError } from 'store/SettingSlice';

import AppRouter from './AppRouter';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  const isLoading = useAppSelector((state) => state.persistedReducer.setting.isLoading);
  const errorMessage = useAppSelector((state) => state.persistedReducer.setting.error);
  const notify = (massage: string) => toast.error(`${massage}`);
  const dispatch = useAppDispatch();

  useEffect(() => {
    notify(errorMessage);
    dispatch(setError(''));
  }, [errorMessage]);

  return (
    <div>
      {isLoading && <Loading />}
      <AppRouter />
      {!!errorMessage && <ToastContainer />}
    </div>
  );
};

export default App;
