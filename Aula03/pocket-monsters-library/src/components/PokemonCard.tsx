import { useRef, useState } from "react";
import type { Pokemon } from "../api/pokedex.api";

interface Props {
  pokemon: Pokemon;
}

function statColor(value: number): string {
  if (value >= 120) return "linear-gradient(90deg, #22c55e, #16a34a)";
  if (value >= 80) return "linear-gradient(90deg, #38bdf8, #0ea5e9)";
  if (value >= 50) return "linear-gradient(90deg, #f97316, #ea580c)";
  return "linear-gradient(90deg, #ef4444, #dc2626)";
}

export const PokemonCard = ({ pokemon }: Props) => {
  const [page, setPage] = useState(0);

  const startX = useRef(0);

  return (
    <div className="rotomdex-screen">
      <div
        className="pokemon-card"
        onTouchStart={(e) => {
          startX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          const delta =
            e.changedTouches[0].clientX - startX.current;

          if (delta > 50 && page > 0) {
            setPage(page - 1);
          }

          if (delta < -50 && page < 2) {
            setPage(page + 1);
          }
        }}
      >
        <div className="pokemon-page">
          {page === 0 && (
            <div className="page-content">
              <div className="pokemon-header">
                <div className="pokemon-artwork-wrap">
                  <div className="artworkHalo" />
                  <img
                    src={pokemon.artwork}
                    alt={pokemon.name}
                  />
                </div>

                <div className="pokemon-title">
                  <p className="pokemon-number">
                    #{String(pokemon.id).padStart(4, "0")}
                  </p>

                  <h2>{pokemon.name}</h2>

                  <p className="category">
                    {pokemon.category}
                  </p>

                  <div className="type-badges">
                    {pokemon.types.map((type) => (
                      <span
                        key={type}
                        className={`type-badge type-${type.toLowerCase()}`}
                      >
                        {type}
                      </span>
                    ))}
                  </div>

                  <p>{pokemon.description}</p>
                </div>
              </div>
            </div>
          )}

          {page === 1 && (
            <div className="page-content">
              <div className="pokemon-grid">
                <div>
                  <strong>Altura</strong>
                  <span>{pokemon.height}</span>
                </div>

                <div>
                  <strong>Peso</strong>
                  <span>{pokemon.weight}</span>
                </div>

                <div>
                  <strong>Categoria</strong>
                  <span>{pokemon.category}</span>
                </div>

                <div>
                  <strong>Habilidades</strong>
                  <span>
                    {pokemon.abilities.join(", ")}
                  </span>
                </div>
              </div>
            </div>
          )}

          {page === 2 && (
            <div className="page-content">
              <div className="stats">
                <h3>Status</h3>

                {pokemon.stats.map((stat) => (
                  <div
                    key={stat.name}
                    className="stat-row"
                  >
                    <span>{stat.name}</span>

                    <div className="bar">
                      <div
                        className="fill"
                        style={{
                          width: `${
                            (Math.min(stat.value, 255) / 255) *
                            100
                          }%`,
                          background: statColor(stat.value),
                        }}
                      />
                    </div>

                    <span>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="tab-dots">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              className={`dot ${
                page === i ? "active" : ""
              }`}
              onClick={() => setPage(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};