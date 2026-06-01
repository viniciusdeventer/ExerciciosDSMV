type Sucesso = { tipo: "sucesso"; dados: string[] };
type Erro = { tipo: "erro"; mensagem: string };
type Resultado = Sucesso | Erro;

function exibirResultado(r: Resultado) {
    if (r.tipo === "sucesso") {
        console.log("Sucesso:", r.dados);
    } else {
        console.error("Erro:", r.mensagem);
    }
}