import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Description, Pokemon, PokemonEvolution, Species } from 'models/Pokemon';

export interface PokemonsState {
  pokemonInfo: Pokemon | null;
  pokemonEvolution: Description[];
}

const initialState: PokemonsState = {
  pokemonInfo: null,
  pokemonEvolution: [],
};

const pokemonsInfo = createSlice({
  name: 'pokemonInfoState',
  initialState,
  reducers: {
    setPokemonInfo: (state, action: PayloadAction<Pokemon>) => {
      state.pokemonInfo = action.payload;
    },
    setPokemonEvolution: (state, action: PayloadAction<PokemonEvolution>) => {
      state.pokemonEvolution = [];

      const recursingSearch = (node: Species | undefined) => {
        if (node?.species) {
          state.pokemonEvolution = [...state.pokemonEvolution, node?.species];
        }

        if (node?.evolves_to?.length) {
          recursingSearch(node.evolves_to[0]);
        }
      };

      if (action?.payload?.chain?.species) {
        state.pokemonEvolution = [...state.pokemonEvolution, action?.payload?.chain.species];
      }

      recursingSearch(action.payload?.chain.evolves_to[0]);
    },
    resetPokemonInfoState: (state) => {
      state.pokemonEvolution = [];
      state.pokemonInfo = null;
    },
  },
});

export const { setPokemonInfo, setPokemonEvolution, resetPokemonInfoState } = pokemonsInfo.actions;
export default pokemonsInfo.reducer;
