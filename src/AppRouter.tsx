import React from 'react';

import { Route, Routes } from 'react-router-dom';

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
        <Route path={PathName.home} element={<Home />} />
        <Route path={PathName.pokemon} element={<Pokemon />} />
      </Route>
      <Route element={<PublicRoutes />}>
        <Route path={PathName.login} element={<Login />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
