import React, { useEffect } from 'react';

import { toast, ToastContainer } from 'react-toastify';

import Loading from 'components/Loading/Loading';
import { useAppSelector } from 'store/hooks';

import AppRouter from './AppRouter';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  const isLoading = useAppSelector((state) => state.setting.isLoading);
  const errorMessage = useAppSelector((state) => state.setting.error);
  const notify = (massage: string) => toast.error(`${massage}`);

  useEffect(() => {
    notify(errorMessage);
  }, [errorMessage]);

  return (
    <div>
      {isLoading && <Loading />}
      <AppRouter />
      <ToastContainer />
    </div>
  );
};

export default App;
