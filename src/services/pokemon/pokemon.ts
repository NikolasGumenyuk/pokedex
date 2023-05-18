import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Pokemon, PokemonSpecies } from 'models/Pokemon';
import { resetPokemonInfoState, setPokemonEvolution, setPokemonInfo } from 'store/PokemonInfo';
import {
  setNextPokemons,
  setPokemons,
  setPokemonsCount,
  setPokemonsTypes,
} from 'store/PokemonsSlice';

import { Pokemons } from './pokemon.types';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, number | undefined>({
      query: (name) => `pokemon/${name}`,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data) {
          dispatch(setPokemonInfo(data));
        }
      },
    }),
    getPokemonSpeciesByName: builder.query<PokemonSpecies, number | undefined>({
      query: (id: number) => `pokemon-species/${id}`,

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const { data } = await queryFulfilled;

        if (data) {
          const url = data?.evolution_chain?.url;

          if (!url?.length) {
            return;
          }

          const evolution = await fetch(url).then((res) => res.json());
          dispatch(setPokemonEvolution(evolution));
        }
      },
    }),
    getAllPokemon: builder.query<Pokemons, string>({
      query: (next) => `pokemon/${next}`,

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data) {
          dispatch(resetPokemonInfoState());
          dispatch(setNextPokemons(data.next));
          dispatch(setPokemonsCount(data.count));
          const promises = data?.results.map((result) =>
            fetch(result.url).then((res) => res.json())
          );
          const responses = await Promise.all(promises);
          dispatch(setPokemons(responses));
        }
      },
    }),
    getPokemonTypes: builder.query<Pokemons, string>({
      query: () => 'type/',

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data) {
          dispatch(setPokemonsTypes(data.results));
        }
      },
    }),
  }),
});

export const {
  useGetPokemonByNameQuery,
  useGetAllPokemonQuery,
  useGetPokemonSpeciesByNameQuery,
  useLazyGetAllPokemonQuery,
  useLazyGetPokemonTypesQuery,
  useLazyGetPokemonSpeciesByNameQuery,
  useLazyGetPokemonByNameQuery,
} = pokemonApi;
