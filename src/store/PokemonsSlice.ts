import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Pokemon } from 'services/pokemon/pokemon.types';

export interface PokemonsState {
  pokemons: Pokemon[];
}

const initialState: PokemonsState = {
  pokemons: [],
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemons = action.payload;
    },
  },
});

export const { setPokemons } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
