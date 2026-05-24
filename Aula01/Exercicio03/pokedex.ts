const nameOuID = process.argv[2];

const formatString = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

const fetchPokemon = async (nameOuID: string) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOuID.toLowerCase()}`);

    if (!res.ok) {
      if (res.status === 404) {
        console.log("❌ Pokémon não encontrado!");
        return;
      }
      throw new Error();
    }

    const dex = await res.json();

    const name = formatString(dex.name);
    const height = (dex.height / 10) + "m";

    // Se for menor que 1 kg então vira g
    const weight = (() => {
        const value = dex.weight / 10;
        return value < 1 ? `${value * 1000}g` : `${value}kg`;
    })();

    // Aqui formata os tipos para estarem com a primeira letra maiúscula 
    // e leva em conta minha petição para mudar o tipo "Voador" para "Vento"
    const types = dex.types
    .map((t: any) =>
        t.type.name === "flying" ? "Wind" : formatString(t.type.name)
    )
    .join(" / ");

    console.log(`${name} – ${height} – ${weight} – ${types}`);
  } catch {
    console.log("⚠️ Erro de rede. Tente novamente.");
  }
};

if (!nameOuID) {
  console.log("Informe o nome ou ID de um Pokémon.");
} else {
  fetchPokemon(nameOuID);
}