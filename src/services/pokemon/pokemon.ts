import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Pokemon, Pokemons } from './pokemon.types';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, void>({
      query: (name) => `pokemon/${name}`,
    }),
    getAllPokemon: builder.query<Pokemons, void>({
      query: () => 'pokemon/',
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetAllPokemonQuery } = pokemonApi;
