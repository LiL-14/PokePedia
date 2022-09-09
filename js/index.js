const fetchPokemon = () => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemonPromisses = []

    for(let i = 1; i <= 649; i++){
        pokemonPromisses.push(fetch(getPokemonUrl(i)).then(response => response.json()));
    }

    Promise.all(pokemonPromisses)
    .then(pokemons =>{
        console.log(pokemons);
        const lisPokemons = pokemons.reduce((accumulator, pokemon) =>{
            accumulator += ` 
            <div class="container">
                <div class="card" style="width: 18rem;">
                <img src="../Images/bgCard.jfif" class="card-img-top" alt="...">
                <img src="#" alt="pokemon" class="pokemonImage">

                <div class="card-body">
                    <h5 class="card-title pokemonName">${pokemon.name}</h5>
                    <p class="card-text pokemonNumber">${pokemon.id}</p>
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Type:</li>
                        <li class="list-group-item">A second item</li>
                    </ul>
                </div>
            </div>
            `

            return accumulator
        }, "")
        console.log(lisPokemons);
    })
}

fetchPokemon()