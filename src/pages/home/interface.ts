export interface IPokedex {
  next: string;
  count: number;
  previous: null;
  results: IPokemon[];
}

export interface IPokemon {
  id: number;
  name: string;
  imgSrc: string;
  types: string[];
}
