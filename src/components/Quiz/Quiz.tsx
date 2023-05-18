import { useEffect, useState } from 'react';

import { useGetPokemonByNameQuery, useLazyGetPokemonByIdQuery } from 'services/pokemon/pokemon';

function getRandomNumber(max: number) {
  const a = Math.floor(Math.random() * (max - 1) + 1);
  console.log(a);

  return String(a);
}

const Quiz = () => {
  const [getPokemon] = useLazyGetPokemonByIdQuery();
  const [answers, setAnswers] = useState<string[]>([]);

  const { data: defaultPokemon, isSuccess } = useGetPokemonByNameQuery(getRandomNumber(20), {
    refetchOnMountOrArgChange: false,
  });

  const getPokemonByName = async () => {
    for (let i = 1; i <= 3; i++) {
      const pokeName = await getPokemon(getRandomNumber(20));
      if (pokeName.isSuccess) {
        setAnswers((prev) => [...prev, pokeName.data.name]);
      }
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setAnswers([...answers, defaultPokemon?.name]);
      getPokemonByName();
    }
  }, []);

  return (
    <div className="flex h-screen w-screen flex-1 items-center justify-around">
      <div>
        <img src={defaultPokemon?.sprites.front_default} alt="pokemon" />
      </div>
      <div>
        <div>
          <h1>Who's That Pokémon?</h1>
          {answers.map((answer) => (
            <button className="mx-5 inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
