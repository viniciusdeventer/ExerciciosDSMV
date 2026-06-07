export interface Pokemon {
  id: number;
  name: string;
  description: string;
  artwork: string;
  height: string;
  weight: string;
  category: string;
  abilities: string[];
  stats: {
    name: string;
    value: number;
  }[];
  types: string[];
}

const format = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

export const fetchPokemon = async (nameOrId: string): Promise<Pokemon> => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${nameOrId.toLowerCase()}`
  );

  if (!res.ok) {
    throw new Error(`Pokémon ${nameOrId} não encontrado`);
  }

  const pokemon = await res.json();

  const species = await fetch(pokemon.species.url).then(r => r.json());

  const description =
    species.flavor_text_entries
      .find((e: any) => e.language.name === "en")
      ?.flavor_text
      .replace(/\s+/g, " ")
      .trim() || "";

  const category =
    species.genera.find((g: any) => g.language.name === "en")?.genus || "-";

  const types = pokemon.types.map((t: any) => format(t.type.name));

  return {
    id: pokemon.id,
    name: format(pokemon.name),
    description,
    artwork: pokemon.sprites.other["official-artwork"].front_default,
    height: `${pokemon.height / 10}m`,
    weight: pokemon.weight / 10 < 1
      ? `${pokemon.weight * 100}g`
      : `${pokemon.weight / 10}kg`,
    category,
    abilities: pokemon.abilities.map((a: any) =>
      format(a.ability.name)
    ),
    stats: pokemon.stats.map((s: any) => ({
      name: format(s.stat.name.replace("-", " ")),
      value: s.base_stat
    })),
    types,
  };
};