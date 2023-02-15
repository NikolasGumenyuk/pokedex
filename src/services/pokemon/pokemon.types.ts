export interface Pokemons {
  count: number;
  results: PokeDetails[];
}

export type PokeDetails = Pick<Pokemon, 'name' | 'url'>;

export interface Pokemon {
  id: number;
  name: string;
  sprites: Sprites;
  url: string;
}

type Sprites = {
  front_default: string;
};
