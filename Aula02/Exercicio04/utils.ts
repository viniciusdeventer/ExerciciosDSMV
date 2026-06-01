function obterPrimeiro<T>(lista: T[]) {
  return lista[0];
}

interface Produto {
  nome: string;
  preco: number;
}

const nome = ["Clara", "Jim", "Bob"];

const preco = [1, 2, 3];

const produto: Produto[] = [
  { nome: "Camiseta Troll", preco: 19.99 },
  { nome: "Calça Arcadia", preco: 29.99 },
  { nome: "Tênis Tênis", preco: 9.99 },
];

console.log(obterPrimeiro(nome)); 
console.log(obterPrimeiro(preco)); 
console.log(obterPrimeiro(produto)); 