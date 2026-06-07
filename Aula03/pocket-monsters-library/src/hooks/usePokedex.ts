import { useState } from "react";
import { fetchPokemon } from "../api/pokedex.api";
import type { Pokemon } from "../api/pokedex.api";

export const usePokedex = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchPokemon = async (value: string) => {
    try {
      setLoading(true);
      setError("");

      const data = await fetchPokemon(value);

      setPokemon(data);
    } catch {
      setPokemon(null);
      setError(`Pokémon com nome ou ID ${value} não encontrado!`);
    } finally {
      setLoading(false);
    }
  };

  return {
    pokemon,
    loading,
    error,
    searchPokemon
  };
};