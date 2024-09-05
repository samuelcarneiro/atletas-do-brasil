function pesquisar() {
    /**
     * Função responsável por realizar a pesquisa e exibir os resultados na página.
     * 
     * **Pré-condições:**
     *  - A variável `dados` deve ser um array de objetos, onde cada objeto possui as propriedades `titulo`, `descricao` e `link`.
     *  - Deve existir um elemento HTML com o ID "resultados-pesquisa" na página.
     *
     * **Pós-condições:**
     *  - O conteúdo HTML da seção "resultados-pesquisa" será substituído pela lista de resultados formatada.
     */
  
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string para armazenar os resultados formatados
    let resultados = "";
  
    // Itera sobre cada dado da pesquisa
    for (let dado of dados) {
      // Cria o HTML para cada resultado
      resultados += `
        <div class="item-resultado">
          <div>
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}">Mais informações...</a>
          </div>
        </div>
      `;
    }
  
    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultados;
  }