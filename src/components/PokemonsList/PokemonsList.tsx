import { useEffect, useRef } from 'react';

import { useIntersection } from 'react-use';

import PokemonCard from 'components/PokemonCard/PokemonCard';
import { useGetAllPokemonQuery, useLazyGetAllPokemonQuery } from 'services/pokemon/pokemon';
import { useAppSelector } from 'store/hooks';

const PokemonsList = () => {
  useGetAllPokemonQuery('');
  const [getNexPokemons] = useLazyGetAllPokemonQuery();
  const pokemonsList = useAppSelector((state) => state.pokeBase.pokemons);
  const nextPokemons = useAppSelector((state) => state.pokeBase.nextPokemons);

  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });

  useEffect(() => {
    console.log(intersection && intersection.intersectionRatio < 1);
    if (intersection && intersection.intersectionRatio < 1) {
      return;
    }

    getNexPokemons(nextPokemons).unwrap();
  }, [intersection]);

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {pokemonsList.map((pokemon) => {
        if (pokemonsList.indexOf(pokemon) === pokemonsList.length - 6) {
          return (
            <>
              <div key={0} ref={intersectionRef} className="w-1 bg-black"></div>
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            </>
          );
        }
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default PokemonsList;
