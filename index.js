const nomeEmpresa = "Sistema Omma";

console.log(nomeEmpresa);

const receitas = [{
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
  receitas.push(novaReceita);
  console.log("o cadastro foi concluído");
}

const exibirReceitas = () => {
  receitas.map((receita) => console.log(`\nTítulo: ${receita.titulo} \nIngredientes: ${receita.ingredientes.map((ingrediente) => "\n- "+ingrediente)}\nVegana? ${receita.vegano}\n`));
}

const deletarReceita = (id) => {

  const testarID = receitas.find((receita) => receita.id === id);

  if(!testarID) return console.log("Receita não encontrada");

  receitas.forEach((receita,idx) => {
    if(receita.id == id) {
      receitas.splice(idx);
      return console.log("Receita deletada com sucesso");
    };
  });
}


cadastrarReceita(2,"Ovo frito","simples",["1 ovo","1/2 garrafa de óleo", "sal a gosto"],"esquente o óleo, quebre o ovo e coloque seu conteúdo cuidadosamente sobre o óleo. Retire com uma escumadeira quando estiver com a textura de sua preferência","http://youtube.com", true);

exibirReceitas();

deletarReceita(2);

exibirReceitas();

deletarReceita(3);