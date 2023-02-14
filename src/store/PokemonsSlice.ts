import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Pokemon } from 'services/pokemon/pokemon.types';

export interface PokemonsState {
  count: number;
  pokemons: Pokemon[];
}

const initialState: PokemonsState = {
  count: 0,
  pokemons: [],
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemons = action.payload;
    },
    setPokemonsCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { setPokemons, setPokemonsCount } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
