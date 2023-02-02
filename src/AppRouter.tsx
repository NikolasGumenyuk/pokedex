import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Pokemon from './pages/Pokemon/Pokemon';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pokemon" element={<Pokemon />} />
    </Routes>
  );
}
