import { useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';

import {
  Ability,
  Description,
  PockemonType,
  PokemonStats,
  statColors,
  statsTypes,
} from 'models/Pokemon';
import { getGifUrl } from 'services/GetGifUrl/getGifUrl';
import {
  useLazyGetPokemonByNameQuery,
  useLazyGetPokemonSpeciesByNameQuery,
} from 'services/pokemon/pokemon';
import { useAppSelector } from 'store/hooks';

import { typeColors } from '../../assets/mockColors';

const PokemonInfo = () => {
  const { name: id } = useParams();
  const [getPokemonByName] = useLazyGetPokemonByNameQuery();
  const [getPokemonEvolution] = useLazyGetPokemonSpeciesByNameQuery();
  const data = useAppSelector((state) => state.pokemonInfoState.pokemonInfo);
  const evolutions = useAppSelector((state) => state.pokemonInfoState.pokemonEvolution);

  const gif = (pokemonId: number | undefined) => {
    if (pokemonId === undefined) {
      return;
    }

    return getGifUrl(pokemonId);
  };

  const totalStats = (): number => {
    if (!data?.stats?.length) {
      return 0;
    }

    return data?.stats
      ?.map((a: PokemonStats) => a.base_stat)
      .reduce((a: number, b: number) => a + b, 0);
  };

  useEffect(() => {
    getPokemonByName(+id!);
    getPokemonEvolution(+id!);
  }, [id]);

  return (
    <>
      <div className="flex flex-1 items-center justify-between gap-5 p-5 md:mx-16 xl:mx-32">
        <div className="flex flex-1 items-center justify-center">
          <img src={gif(data?.id)} alt={data?.name} className="image-pixeled" width="250px" />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-5">
          <p># {data?.id}</p>
          <h2 className="m-0 text-4xl font-bold capitalize">{data?.name}</h2>

          <div className="flex gap-2">
            {data?.types?.map((type: PockemonType, index: number) => {
              return (
                <div
                  key={index}
                  className="rounded-lg px-3 py-1 font-semibold	capitalize text-gray-800"
                  style={{ backgroundColor: typeColors[type.type.name] }}
                >
                  {type.type.name}
                </div>
              );
            })}
          </div>

          <div className="flex w-full items-center justify-center gap-2">
            <div className="w-full">
              <h3 className="text-center font-bold capitalize">Height</h3>
              <div className="w-full rounded-lg bg-gray-200  py-2 px-4 text-center">
                {data?.height}m
              </div>
            </div>

            <div className="w-full">
              <h3 className="text-center font-bold capitalize">Weight</h3>
              <div className="w-full rounded-lg bg-gray-200  py-2 px-4 text-center">
                {data?.weight}kg
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-2">
            <h3 className="text-center text-xl font-bold capitalize">Abilities</h3>
            <div className=" flex w-full justify-between gap-2">
              {data?.abilities?.map((ability: Ability, index: number) => {
                return (
                  <div
                    key={index}
                    className="flex w-full items-center justify-center rounded-lg bg-gray-200 py-2  px-4 text-center capitalize"
                  >
                    {ability.ability.name}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex w-full justify-between gap-3 ">
            {data?.stats?.map((stat: PokemonStats, index: number) => {
              return (
                <div className="flex flex-col items-center justify-center gap-2" key={index}>
                  <label
                    title={stat?.stat?.name}
                    style={{ backgroundColor: statColors[index] }}
                    className="flex h-[30px] w-[30px] items-center justify-center rounded-full text-xs font-bold text-white"
                  >
                    {statsTypes[stat?.stat?.name]}
                  </label>
                  <span>{stat?.base_stat}</span>
                </div>
              );
            })}

            <div className="flex flex-col items-center justify-center gap-2">
              <label className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#88AAEA] align-middle text-xs font-bold text-white">
                TOT
              </label>
              <span>{totalStats()}</span>
            </div>
          </div>

          <div className="flex items-baseline gap-2">
            {evolutions?.map((ev: Description, index: number) => {
              const arr = ev.url.split('/');
              const giffId = +arr[arr.length - 2];
              const gifImage = getGifUrl(giffId);

              return (
                <Link to={`../pokemon/${giffId}`} key={index}>
                  <img src={gifImage} alt={data?.name} className="image-pixeled" width="200px" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonInfo;
