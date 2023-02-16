import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Pokemon } from 'models/Pokemon';

export interface PokemonsState {
  count: number;
  nextPokemons: string;
  pokemons: Pokemon[];
}

const initialState: PokemonsState = {
  count: 0,
  nextPokemons: '',
  pokemons: [],
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemons = [...state.pokemons, ...action.payload];
    },
    setPokemonsCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    setNextPokemons: (state, action: PayloadAction<string>) => {
      state.nextPokemons = action.payload.slice(action.payload.indexOf('?'));
    },
  },
});

export const { setPokemons, setPokemonsCount, setNextPokemons } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
