const Quiz: React.FC<{ sprite: string; answers: string[]; onSelect: (name: string) => void }> = ({
  sprite,
  answers,
}) => {
  return (
    <div className="flex h-screen w-screen flex-1 items-center justify-around">
      <div>
        <img src={sprite} alt="pokemon" />
      </div>
      <div>
        <div>
          <h1>Who's That Pokémon?</h1>
          {answers.map((answer) => (
            <button
              key={answer}
              className="mx-5 inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
