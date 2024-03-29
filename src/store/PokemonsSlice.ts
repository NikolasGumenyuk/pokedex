import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { colors } from 'assets/mockColors';
import { Pokemon } from 'models/Pokemon';
import { ColorTypes } from 'services/pokemon/pokemon.types';

export interface PokemonsState {
  count: number;
  nextPokemons: string;
  pokemonsTypes: ColorTypes;
  pokemons: Pokemon[];
  currentPokemon: string;
}

const initialState: PokemonsState = {
  count: 0,
  nextPokemons: '',
  pokemonsTypes: {},
  pokemons: [],
  currentPokemon: '',
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
    setPokemonsTypes: (state, action: PayloadAction<ColorTypes[]>) => {
      state.pokemonsTypes = action.payload.reduce((accumulator, key, index) => {
        return { ...accumulator, [key.name]: colors[index] };
      }, {});
    },
    setCurrentPokemon: (state, action: PayloadAction<string>) => {
      state.currentPokemon = action.payload;
    },
  },
});

export const {
  setPokemons,
  setPokemonsCount,
  setNextPokemons,
  setPokemonsTypes,
  setCurrentPokemon,
} = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
