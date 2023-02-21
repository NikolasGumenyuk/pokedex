import { Pokemon } from 'models/Pokemon';

export interface Pokemons {
  count: number;
  next: string;
  results: PokeDetails[] & ColorTypes[];
}

export type PokeDetails = Pick<Pokemon, 'name' | 'url'>;

export interface PokemonsType {
  name: string;
}

export type ColorTypes = {
  [key: string]: string;
};

// export type ColorTypes = {
//   normal: string;
//   fighting: string;
//   flying: string;
//   poison: string;
//   ground: string;
//   rock: string;
//   bug: string;
//   ghost: string;
//   steel: string;
//   fire: string;
//   water: string;
//   grass: string;
//   electric: string;
//   psychic: string;
//   ice: string;
//   dragon: string;
//   dark: string;
//   fairy: string;
//   shadow: string;
// };
