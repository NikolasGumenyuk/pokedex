import { Pokemon } from 'models/Pokemon';

export interface Pokemons {
  count: number;
  next: string;
  results: PokeDetails[];
}

export type PokeDetails = Pick<Pokemon, 'name' | 'url'>;
