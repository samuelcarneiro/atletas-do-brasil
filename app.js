function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
      section.innerHTML = "<p class='aviso-pesquisa'>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
      return 
  };

  // Transforma o conteúdo pesquisado em letras mínusculas
  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = ""

  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // cria um novo elemento
      resultados += `
        <div class="item-resultado">
          <div> 
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
        </div>
      `;
    }
  }
  //
  if (!resultados) {
    resultados = "<p class='aviso-pesquisa'> '" + campoPesquisa + "' não foi encontrado! </p>"
  }

  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
}