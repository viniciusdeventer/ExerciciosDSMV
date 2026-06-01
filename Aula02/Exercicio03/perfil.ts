interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

type UsuarioSemSenha = Omit<Usuario, "senha">;
type UsuarioAtualizacao = Partial<Usuario>;

function exibirPerfil(u: UsuarioSemSenha) {
  console.log(`ID: ${u.id}`);
  console.log(`Nome: ${u.nome}`);
  console.log(`E-mail: ${u.email}`);
}

function atualizarUsuario(id: number, dados: UsuarioAtualizacao) {
  console.log(`Atualizando usuário com ID ${id}...`);
  if (dados.nome) {
    console.log(`Nome: ${dados.nome}`);
  }
  if (dados.email) {
    console.log(`E-mail: ${dados.email}`);
  }
}