import React from 'react';

import { Route, Routes } from 'react-router-dom';

import PrivateRoutes from 'utils/PrivateRoutes';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Pokemon from './pages/Pokemon/Pokemon';

function AppRouter() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/home" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRouter;
