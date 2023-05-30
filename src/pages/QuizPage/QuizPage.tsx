import { useEffect, useState } from 'react';

import Quiz from 'components/Quiz/Quiz';
import { useLazyGetPokemonByNameQuery } from 'services/pokemon/pokemon';

function getRandomNumber(max: number): string {
  const a = Math.floor(Math.random() * (max - 1) + 1);
  return String(a);
}
const FALSY_ANSWERS_AMOUNT = 3;
const QuizPage = () => {
  const [answers, setAnswers] = useState<string[]>([]);

  const [getPokemon, { data: defaultPokemon, isFetching }] = useLazyGetPokemonByNameQuery();

  const getPokemonByName = async () => {
    const falsyAnswers: string[] = [];
    for (let index = 0; index < FALSY_ANSWERS_AMOUNT; index++) {
      const data = await getPokemon(getRandomNumber(20)).unwrap();
      falsyAnswers.push(data.name);
    }
    // @TODO: shuffle answers before setState, cuz now correct answers is always the last one
    setAnswers((prev) => [...prev, ...falsyAnswers]);
  };

  const handlePickAnswer = (name: string) => {
    // add logic on select answer goes here
    if (name) {
      // ...
    }
  };

  useEffect(() => {
    getPokemon(getRandomNumber(20))
      .unwrap()
      .then((res) => {
        setAnswers([res.name]);
        getPokemonByName();
      });
  }, []);

  return isFetching ? (
    <span>Loading</span>
  ) : !!defaultPokemon ? (
    <Quiz
      answers={answers}
      sprite={defaultPokemon.sprites.front_default}
      onSelect={handlePickAnswer}
    />
  ) : (
    <span>Oops, some error</span>
  );
};
export default QuizPage;
