import { Link, useParams } from "react-router-dom";

import { Ability, Description, PockemonType, PokemonStats, Species, statColors, statsTypes } from "models/Pokemon";
import { getGifUrl } from "services/GetGifUrl/getGifUrl";
import { useGetPokemonByNameQuery, useGetPokemonSpeciesByNameQuery, useLazyGetPokemonSpeciesByNameQuery } from "services/pokemon/pokemon";
import { typeColors } from "../../assets/mockColors";
import { useEffect, useState } from "react";

const PokemonInfo = () => {
  const { name } = useParams();
  const { data, isLoading } = useGetPokemonByNameQuery(name as string);
  const { data: species } = useGetPokemonSpeciesByNameQuery(Math.ceil(+name! / 3));
  const gif = getGifUrl(data?.id as number);
  const [evolution, setEvolution] = useState<Description[]>([]);

  const totalStats = (): number => {
    if (!data?.stats?.length) {
      return 0;
    }

    return data?.stats?.map((a: PokemonStats) => a.base_stat)
      .reduce((a: number, b: number) => a + b, 0)
  }

  const recursingSearch = (node: Species | undefined) => {
    if (node?.species) {
      setEvolution((prev) => [...prev, node?.species]);
    }

    if (node?.evolves_to?.length) {
      recursingSearch(node.evolves_to[0])
    }
  }

  useEffect(() => {
    if (species?.chain.species) {
      setEvolution([species?.chain.species])
    }
 
    recursingSearch(species?.chain?.evolves_to[0]);
  }, []);

  return (
    <>
      {isLoading && <p>Loading...</p>}

      <div className="flex flex-1 justify-between items-center gap-5 p-5 md:mx-16 xl:mx-32">
        <div className="flex flex-1 items-center justify-center">
          <img src={gif} alt={data?.name} className="image-pixeled" width="250px" />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-5">
          <p># {data?.id}</p>
          <h2 className="m-0 text-4xl font-bold capitalize">{data?.name}</h2>

          <div className="flex gap-2">
            {data?.types?.map((type: PockemonType, index: number) => {
              return (<div key={index}
                className="rounded-lg px-3 py-1 text-md font-semibold	capitalize text-gray-800"
                style={{ backgroundColor: typeColors[type.type.name] }}>
                {type.type.name}
              </div>)
            })}
          </div>

          <div className="flex w-full items-center justify-center gap-2">
            <div className="w-full">
              <h3 className="text-center text-md font-bold capitalize">Height</h3>
              <div className="text-center w-full rounded-lg  bg-gray-200 py-2 px-4">
                {data?.height}m
              </div>
            </div>

            <div className="w-full">
              <h3 className="text-center text-md font-bold capitalize">Weight</h3>
              <div className="text-center w-full rounded-lg  bg-gray-200 py-2 px-4">
                {data?.weight}kg
              </div>
            </div>
          </div>

          <div className="flex flex-col gap- w-full">
            <h3 className="text-center text-xl font-bold capitalize">Abilities</h3>
            <div className=" flex w-full justify-between gap-2">
              {data?.abilities?.map((ability: Ability, index: number) => {
                return (
                  <div key={index}
                    className="flex items-center justify-center text-center capitalize w-full rounded-lg  bg-gray-200 py-2 px-4">
                    {ability.ability.name}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-3 w-full justify-between ">
            {data?.stats?.map((stat: PokemonStats, index: number) => {
              return (<div className="flex flex-col gap-2 items-center justify-center" key={index}>
                <label title={stat?.stat?.name}

                  style={{ backgroundColor: statColors[index] }}
                  className="flex items-center font-bold justify-center rounded-full text-xs text-white h-[30px] w-[30px]">
                  {statsTypes[stat?.stat?.name]}
                </label>
                <span>{stat?.base_stat}</span>
              </div>)
            })
            }

            <div className="flex flex-col gap-2 items-center justify-center">
              <label className="bg-[#88AAEA] flex items-center font-bold justify-center rounded-full text-xs text-white h-[30px] w-[30px] align-middle">
                TOT
              </label>
              <span>{totalStats()}</span>
            </div>
          </div>

          <div className="flex gap-2">
            {evolution?.map((ev: Description, index: number) => {
              const arr = ev.url.split('/');
              const id = +arr[arr.length - 2];
              const gifImage = getGifUrl(id)
              return (
                <Link to={`./pokemon/${id}`}>
                  <img src={gifImage} alt={data?.name} className="image-pixeled" width="200px" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonInfo;
