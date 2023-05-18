import { useEffect, useState } from 'react';

import { ChevronUpIcon } from '@heroicons/react/24/solid';
import InfiniteScroll from 'react-infinite-scroll-component';

import PokemonCard from 'components/PokemonCard/PokemonCard';
import { useLazyGetAllPokemonQuery, useLazyGetPokemonTypesQuery } from 'services/pokemon/pokemon';
import { useAppSelector } from 'store/hooks';

const PokemonsList = () => {
  const [getPokemons] = useLazyGetAllPokemonQuery();
  const [getPokemonsTypes] = useLazyGetPokemonTypesQuery();
  const pokemonsList = useAppSelector((state) => state.pokeBase.pokemons);
  const pokemonsCount = useAppSelector((state) => state.pokeBase.count);
  const nextPokemons = useAppSelector((state) => state.pokeBase.nextPokemons);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const shoudShowTopBtn = () => {
    if (window.scrollY > 400) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  };

  useEffect(() => {
    getPokemons('');
    getPokemonsTypes('');
    window.addEventListener('scroll', () => shoudShowTopBtn());

    return () => window.removeEventListener('scroll', shoudShowTopBtn);
  }, []);

  return (
    <InfiniteScroll
      className="flex flex-row flex-wrap justify-center"
      dataLength={pokemonsList.length}
      next={() => getPokemons(nextPokemons)}
      hasMore={pokemonsCount !== pokemonsList.length + 1}
      loader={<p>Loading ...</p>}
    >
      {pokemonsList.map((pokemon) => {
        if (pokemonsList.indexOf(pokemon) === pokemonsList.length - 6) {
          return (
            <div key={pokemon.name}>
              <PokemonCard pokemon={pokemon} />
            </div>
          );
        }
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
      {showTopBtn && (
        <button
          className="fixed bottom-5 right-5 w-12 rounded-xl p-1 shadow-sm ring-1 ring-inset ring-gray-300  drop-shadow-2xl hover:bg-gray-50"
          onClick={() => scrollToTop()}
        >
          <ChevronUpIcon />
        </button>
      )}
    </InfiniteScroll>
  );
};

export default PokemonsList;
