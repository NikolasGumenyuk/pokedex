import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from 'store/hooks';

const PrivateRoutes = () => {
  const auth = useAppSelector((state) => state.persistedReducer.user.isAuth);

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
