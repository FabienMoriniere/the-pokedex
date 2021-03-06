export const baseUrl = "https://pokeapi.co/api/v2/pokemon";
export interface Pokemon {
  url: string;
  name: string;
}

export const getPokemonId = (pokemon: Pokemon): number => {
  return parseInt(pokemon.url.split("/").slice(-2).join(""), 10);
};

export const getPokemonSpriteSrc = (pokemon: Pokemon): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(
    pokemon
  )}.png`;
};
