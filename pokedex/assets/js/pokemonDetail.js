const aPokemon = document.getElementById('aPokemon')

const limit = 1;
let offset = 0;

function pokemonDetail(pokemon){
    return `
                     <img src="${pokemon.photo}">
                     <div class"cardPokemon">
                         <h2>${pokemon.name}</h2>
                         <h3>${pokemon.number}</h3>
                         <p>
                             <span>teste</span>
                         </p>
                         <p>
                             <span>teste</span>
                         </p>
                         <p>
                             <span>teste</span>
                         </p>
                         <p>
                             <span>teste</span>
                         </p>
                         <p>
                             <span>teste</span>
                         </p>
                         <p>
                             <span>teste</span>
                         </p>
                         <a href="index.html">Back</a>
                     </div>

    `
}

function loadAPokemon(offset, limit){
    pokeApi.getAPokemon(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(pokemonDetail).join('')
        aPokemon.innerHTML += newHtml
    })
}

loadAPokemon(offset, limit)



