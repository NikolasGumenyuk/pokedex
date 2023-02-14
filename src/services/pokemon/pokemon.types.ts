export interface Pokemons {
  count: number;
  results: PokeDetails[];
}

export interface PokeDetails {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: Sprites;
}

type Sprites = {
  front_default: string;
};
