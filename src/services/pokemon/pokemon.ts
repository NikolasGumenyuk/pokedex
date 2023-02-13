import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { setPokemons } from 'store/PokemonsSlice';

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

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data) {
          const promises = data.results.map((result) =>
            fetch(result.url).then((res) => res.json())
          );
          const responses = await Promise.all(promises);
          dispatch(setPokemons(responses));
        }
      },
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetAllPokemonQuery } = pokemonApi;
