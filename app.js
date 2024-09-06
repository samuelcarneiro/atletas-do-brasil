function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  let resultados = ""

  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
      return 
  }

  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
      // se titulo includes campoPesquisa
      if (dado.titulo.includes(campoPesquisa)) {
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
  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
}