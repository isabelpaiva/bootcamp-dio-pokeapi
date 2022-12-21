
async function consomePokeAPI() {
    // Seleciona o elemento que representa o loading da requisição
    const loading = document.querySelector('#loading')

    // Faz a requisição na API
    const pokemonsDaAPI = await fetch('https://pokeapi.co/api/v2/pokemon')
      .then(
        /*  Converte o retorno para um objeto Javascript válido */
        response => response.json()
      )
      .catch(
        /* Caso haja algum erro, retornamos ele no console */
        error => console.log(error)
      )

    // Independente da requisição ser um sucesso, ou um erro, removeremos o loading da tela
    loading.classList.add('hidden')

    // Retorna esse valor convertido
    return pokemonsDaAPI
}

//PESQUISA
async function getPokemonByName(pokemonName){
  const pokemon =  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json'
    }
  })

  .then(res => res.json())
  .then(res =>{
  //  renderizaPokemons(res)
   console.log(res)
   return res
 
  })
  // console.log(pokemon)
  return pokemon
}

function renderSearch(){
  const searchInput = document.querySelector('input')
  const searchBtn = document.querySelector('#searchBtn')

   searchBtn.addEventListener('click', async () =>{
      renderizaPesquisa(await getPokemonByName(searchInput.value))
  })
}

 async function renderizaPesquisa(resposta){

  const ulTag =  document.querySelector('ul')

  ulTag.innerHTML = ''

  

  ulTag.insertAdjacentHTML( 'beforeend', `
  <li>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${resposta.id}.png" alt=${resposta.name}>
      <h3 class="nomePokemon">${resposta.name}</h3>
  </li>
 `)


//  console.log(resposta)

}


// Chama a função para rodá-la ao carregar a página

consomePokeAPI()
renderSearch()