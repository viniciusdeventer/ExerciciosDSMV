interface PropsBotao {
    titulo: string;
    ativo?: boolean;
}

function renderizarBotao({ titulo, ativo = true }: PropsBotao): string {
  return ativo ? `[ ${titulo} ]` : `( ${titulo} )`;
}

renderizarBotao({ titulo: "Enviar" });
renderizarBotao({ titulo: "Cancelar", ativo: false });