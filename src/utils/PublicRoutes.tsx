import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from 'store/hooks';

const PublicRoutes = () => {
  const auth = useAppSelector((state) => state.user.isAuth);

  return !auth ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoutes;
