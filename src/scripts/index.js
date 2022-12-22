let loading = document.querySelector("#loading");
async function renderizaPokemons() {
  const ulTag = document.querySelector("ul");

  const listaDePokemons = await consomePokeAPI();

  listaDePokemons.results.forEach((pokemon) => {
    const numeroNaPokedex = pokemon.url.slice(34, -1);

    setTimeout(() => {
      loading.innerText = "";
      ulTag.insertAdjacentHTML(
        "beforeend",
        `
            <li>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
                <h3 class="nomePokemon">${pokemon.name}</h3>
            </li>

        `
      );
    }, 2000);
  });
}

renderizaPokemons();
