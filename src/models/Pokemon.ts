export interface Pokemon {
  id: number;
  name: string;
  sprites: Sprites;
  url: string;
}

type Sprites = {
  front_default: string;
};
