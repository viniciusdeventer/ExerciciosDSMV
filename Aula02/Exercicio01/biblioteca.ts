interface Livro {
  titulo: string;
  autor: string;
  ano: number;
  disponivel: boolean;
}

const biblioteca: Livro[] = [
  {
    titulo: "I'm Glad My Mom Died",
    autor: "Jennette McCurdy",
    ano: 2022,
    disponivel: true,
  },
  {
    titulo: "A Revolução dos Bichos",
    autor: "George Orwell",
    ano: 1945,
    disponivel: false,
  },
  {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    ano: 1943,
    disponivel: true,
  },
];

function listarTitulosDisponiveis(livros: Livro[]): string[] {
  return livros
    .filter((livro) => livro.disponivel)
    .map((livro) => livro.titulo);
}

console.log(listarTitulosDisponiveis(biblioteca));