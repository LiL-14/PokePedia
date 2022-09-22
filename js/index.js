const fetchPokemon = () => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemonPromisses = []

    for(let i = 1; i <= 649; i++){
        pokemonPromisses.push(fetch(getPokemonUrl(i)).then(response => response.json()));
    }

    Promise.all(pokemonPromisses)
    .then(pokemons =>{
        const lisPokemons = pokemons.reduce((accumulator, pokemon) =>{
            accumulator += ` 
            
                <div class="card" style="width: 18rem;">
                <img src="../Images/bgCard.jfif" class="card-img-top" alt="...">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="pokemon" class="pokemonImage">
                <div class="card-body">
                    <h5 class="card-title pokemonName">${pokemon.name}</h5>
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item pokemonNumber">Numero da pokedex: ${pokemon.id}</li>
                        <li class="list-group-item">Type: ${pokemon.stats}</li>
                        <li class="list-group-item">A second item</li>
                    </ul>
                </div>
        
            `

            return accumulator
        }, "")

        const div = document.querySelector('[data-js="pokedex"]')

        div.innerHTML = lisPokemons
    })
}

fetchPokemon()