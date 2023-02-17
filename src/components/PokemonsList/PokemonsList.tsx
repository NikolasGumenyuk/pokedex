import { useEffect, useRef, useState } from 'react';

import { useIntersection } from 'react-use';

import PokemonCard from 'components/PokemonCard/PokemonCard';
import { useLazyGetAllPokemonQuery } from 'services/pokemon/pokemon';
import { useAppSelector } from 'store/hooks';

const PokemonsList = () => {
  const [getPokemons] = useLazyGetAllPokemonQuery();
  const pokemonsList = useAppSelector((state) => state.pokeBase.pokemons);
  const nextPokemons = useAppSelector((state) => state.pokeBase.nextPokemons);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });

  useEffect(() => {
    getPokemons('');
    const interval = setInterval(() => {
      setScrollPosition((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (intersection && intersection.intersectionRatio < 1) {
      return;
    }
    getPokemons(nextPokemons).unwrap();
  }, [scrollPosition]);

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {pokemonsList.map((pokemon) => {
        if (pokemonsList.indexOf(pokemon) === pokemonsList.length - 6) {
          return (
            <div key={pokemon.id}>
              <div ref={intersectionRef}></div>
              <PokemonCard pokemon={pokemon} />
            </div>
          );
        }
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default PokemonsList;
