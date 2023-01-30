import React from 'react';

import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import PokemonPage from './pages/PokemonPage/PokemonPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/pokemon" element={<PokemonPage />} />
    </Routes>
  );
}
