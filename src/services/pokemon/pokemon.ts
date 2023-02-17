import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Pokemon } from 'models/Pokemon';
import { setNextPokemons, setPokemons, setPokemonsCount } from 'store/PokemonsSlice';

import { Pokemons } from './pokemon.types';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, void>({
      query: (name) => `pokemon/${name}`,
    }),
    getAllPokemon: builder.query<Pokemons, string>({
      query: (next) => `pokemon/${next}`,

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data) {
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
  }),
});

export const { useGetPokemonByNameQuery, useGetAllPokemonQuery, useLazyGetAllPokemonQuery } =
  pokemonApi;
