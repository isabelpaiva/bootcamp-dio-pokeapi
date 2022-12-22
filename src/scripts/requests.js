
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
    // loading.classList.add('hidden')

    // Retorna esse valor convertido
    return pokemonsDaAPI
}


const carregando = document.querySelector('#loading')
const searchInput = document.querySelector('input')
 const searchBtn = document.querySelector('#searchBtn')

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
   return res
  })
  carregando.style.display = "none";

  return pokemon
}

  function renderSearch(pokemonName){
  const searchInput = document.querySelector('input')
  const searchBtn = document.querySelector('#searchBtn')
  const pokemon = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

    searchBtn.addEventListener('click', async () =>{

      if (searchInput.value == 0){
        searchInput.innerHTML = ''
         renderizaPokemons() 
         
         
      } else{
        renderizaPesquisa(await getPokemonByName(searchInput.value.toLowerCase().trim()))
      } 

      if (searchInput.value != pokemonName){
       console.log('não existe')
      }
  })
}

async function renderizaPesquisa(pokemon){

  const ulTag =  document.querySelector('ul')
  ulTag.innerHTML = ''
  ulTag.insertAdjacentHTML( 'beforeend', `
  <li>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt=${pokemon.name}>
      <h3 class="nomePokemon">${pokemon.name}</h3>
  </li>
 `)
}


// Chama a função para rodá-la ao carregar a página

consomePokeAPI()
renderSearch()
