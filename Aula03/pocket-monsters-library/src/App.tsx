import { useState } from "react";
import { PokemonCard } from "./components/PokemonCard";
import { usePokedex } from "./hooks/usePokedex";
import { FiSearch } from "react-icons/fi";
import "./App.css";

export default function App() {
  const [search, setSearch] = useState("");

  const { pokemon, loading, error, searchPokemon } = usePokedex();

  const handleSearch = () => {
    const value = search.trim().toLowerCase();
    if (!value) return;
    searchPokemon(value);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="redBar" />
        <div className="darkBar" />
      </header>

      <section className="searchSection">
        <div className="searchContainer">
          <div className="searchLeft">
            <h2 className="searchTitle">Nome ou número</h2>

            <div className="search">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />

              <button
                onClick={handleSearch}
                disabled={!search.trim() || loading}
              >
                <FiSearch size={18} />
              </button>
            </div>
          </div>

          <div className="searchRight">
            <p>
              Realize a busca por Pokémon pelo nome ou usando o número do
              Pokédex Nacional.
            </p>
          </div>
        </div>
      </section>
      <main className="content">
        {error && !loading && (
          <p className="status error">{error}</p>
        )}

          <div className="rotomdex">
            <img src="/rotom.png" alt="Rotomdex" className="rotomdex-frame"/>
            {!loading && pokemon && (
              <PokemonCard pokemon={pokemon} />
            )}
          </div>

      </main>
    </div>
  );
}