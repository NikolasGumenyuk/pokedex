export interface Pokemon {
  id: number;
  name: string;
  sprites: Sprites;
  url: string;
  types: PockemonType[];
  abilities: Ability[];
  height: number;
  weight: number;
  stats: PokemonStats[];
}

type Sprites = {
  front_default: string;
};

export type PockemonType = {
  type: { name: string };
};

export interface Ability {
  ability: Description;
  is_hidden: boolean;
  slot: number;
}

export interface Description {
  name: string;
  url: string;
}

export interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: Description;
}

export const statsTypes: {[key: string]: string} = {
  'hp': 'HP',
  'attack': 'ATK',
  'defense': 'DEF',
  'special-attack': 'SpA',
  'special-defense': 'SpD',
  'speed' : 'SPD',
}

export const statColors = ['#DF2140', '#FF994D', '#eecd3d', '#85DDFF', '#96da83', '#FB94A8'];

export interface PokemonEvolution {
  chain: Species;
}

export interface Species {
  species: Description;
  evolves_to: Species[]

}