
// Definimos essa função como assíncrona pois precisamos aguardar a resposta da função consomePokeAPI


// Definimos essa função como assíncrona pois precisamos aguardar a resposta da função consomePokeAPI
async function renderizaPokemons() {
    const ulTag = document.querySelector('ul')
    

    // Aqui utilizaremos o await para aguardar a resposta da função
    const listaDePokemons = await consomePokeAPI()
    

    // Agora é só iterar sob o array e renderizar cada pokemon
    listaDePokemons.results.forEach(pokemon => {
        
        // "Fatia" o número do pokemon na pokedex a partir da URL de cada pokemon
        const numeroNaPokedex = pokemon.url.slice(34, -1)

        ulTag.insertAdjacentHTML('beforeend', `
            <li>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
                <h3 class="nomePokemon">${pokemon.name}</h3>
            </li>

        `)
    })
}

// Chama a função para rodá-la ao carregar a página

renderizaPokemons()
