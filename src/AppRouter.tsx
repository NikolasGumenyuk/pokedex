import { Navigate, Route, Routes } from 'react-router-dom';

import MainLayout from 'layouts/MainLayout/MainLayout';
import PrivateRoutes from 'utils/PrivateRoutes';
import PublicRoutes from 'utils/PublicRoutes';

import { PathName } from './models/PathName';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Pokemon from './pages/Pokemon/Pokemon';

function AppRouter() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path={PathName.home} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={PathName.pokemon} element={<Pokemon />} />
        </Route>
      </Route>
      <Route element={<PublicRoutes />}>
        <Route path={PathName.login} element={<Login />} />
      </Route>
      <Route path={PathName.notFoundRout} element={<Navigate to={PathName.home} />} />
    </Routes>
  );
}

export default AppRouter;
