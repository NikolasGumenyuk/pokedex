export interface Pokemon {
  id: number;
  name: string;
  sprites: Sprites;
  url: string;
  types: Types[];
}

type Sprites = {
  front_default: string;
};

type Types = {
  type: { name: string };
};
