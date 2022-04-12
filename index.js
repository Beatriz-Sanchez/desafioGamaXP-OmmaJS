const nomeEmpresa = "Sistema Omma";

console.log(nomeEmpresa);

const listaDeReceitas = [{
  id: 1,
  titulo: "Cachorro quente",
  dificuldade: "simples",
  ingredientes: ["1 pão de leite", "1 salsicha", "2 colheres de batata palha", "1 colher de ketchup", "3 colheres de purê de batata"],
  preparo: "lorem ipsum dolor sit amet, consectetur adipiscin elit",
  link: "http://youtube.com",
  vegano: false,
}];

const cadastrarReceita = (id, titulo, dificuldade, ingredientes, preparo, link, vegano) => {
  const novaReceita = {
    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano,
  }
  listaDeReceitas.push(novaReceita);
  console.log("o cadastro foi concluído");
}

const exibirReceitas = () => {
  listaDeReceitas.forEach((receita) => console.log(`\nTítulo: ${receita.titulo} \nIngredientes: ${receita.ingredientes.map((ingrediente) => "\n- "+ingrediente)}\nVegana? ${receita.vegano? "sim" : "não"}\n`));
}

const deletarReceita = (id) => {

  const indice = listaDeReceitas.findIndex((receita) => receita.id === id);

  if (indice === -1) {
    return console.log("Receita não encontrada");
  }

  listaDeReceitas.splice(indice);
  return console.log("Receita deletada com sucesso");

};

//aDIÇÃO DA SEGUNDA RECEITA
cadastrarReceita(2, "Ovo frito", "simples", ["1 ovo", "1/2 garrafa de óleo", "sal a gosto"], "esquente o óleo, quebre o ovo e coloque seu conteúdo cuidadosamente sobre o óleo. Retire com uma escumadeira quando estiver com a textura de sua preferência", "http://youtube.com", true);


const buscarReceita = (termo) => {
  const resultado = listaDeReceitas.filter((receita) => {
    return receita.titulo.toLowerCase().indexOf(termo) != -1;
  });

  console.log("\nEstes são os resultados da sua busca:");

  resultado.forEach((listaDeReceitas) => console.log(`\nTítulo: ${listaDeReceitas.titulo} \nIngredientes: ${listaDeReceitas.ingredientes.map((ingrediente) => "\n- "+ingrediente)}\nVegana? ${listaDeReceitas.vegano? "sim" : "não"}\n`));
}


const atualizarReceita = (id,prop,alteracao) => {
  const indice = listaDeReceitas.findIndex((receita) => receita.id === id);

  if (indice === -1) {
    return console.log(`Identificador ${id} não encontrado`);
  }

  if(listaDeReceitas[indice][prop]){
    listaDeReceitas[indice][prop] = alteracao;
    return console.log("Receita alterada com sucesso!");
  }
  return console.log(`categoria ${prop} não encontrada na receita de id ${id}`);
  
};