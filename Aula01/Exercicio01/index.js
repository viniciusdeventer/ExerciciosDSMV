import { unique, groupBy, sumBy } from "./arrayUtils.js";

// Remove itens duplicados de um array
// Consoles da Nintendo que tiveram remakes de Pokémon
console.log(
  unique([
    "Game Boy Advance",
    "Nintendo DS",
    "Nintendo 3DS",
    "Nintendo Switch",
    "Nintendo DS",
  ])
);

// Jogos de Pokémon lançados na 3ª geração
console.log(
  unique([
    "Pokemon Ruby",
    "Pokemon Sapphire",
    "Pokemon Emerald",
    "Pokemon Fire Red",
    "Pokemon Leaf Green",
    "Pokemon Emerald",
  ])
);

// Agrupa por um parâmetro passado na função
// Agrupa Pokémon por geração
console.log(
  groupBy(
    [
      { generation: "III", name: "Skitty" },
      { generation: "VI", name: "Clawitzer" },
      { generation: "VI", name: "Pyroar" },
    ],
    "generation"
  )
);

// Agrupa Pokémon por tipo
console.log(
  groupBy(
    [
      { type: "Ice", name: "Glaceon" },
      { type: "Water", name: "Swanna" },
      { type: "Ice", name: "Glalie" },
    ],
    "type"
  )
);

// Soma o parâmetro passado na função
// Soma os status base de um Pokémon
console.log(
  sumBy(
    [
      { stats: 80 },
      { stats: 135 },
      { stats: 130 },
      { stats: 95 },
      { stats: 90 },
      { stats: 70 },
    ],
    "stats"
  )
);
