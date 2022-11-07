//import { json } from "express";

//const pathVariables = location.pathname.split("/");
//const pokemonName = pathVariables.pop(); 

//console.log(pokemonName); 

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`) 
.then(response => response.json()) // .then = med et promise som vil sige at der afventes på et svar fra en server på netværket. Kommer som et response, og response kan være JSON eller text osv.
.then(pokemon => {
    console.log(pokemon)


    const battlingPokemonImage = document.getElementById("battling-pokemon-sprite");
    battlingPokemonImage.src = pokemon.sprites.other.dream_world.front_default;

    const iWon = Math.random() >= 0.5;
    const whoWonHeader = document.getElementById("who-won")
    if (whoWon) {
        whoWonHeader.innerText = "You won";
    } else {
        whoWonHeader.innerText = "You lost";
    }

    const body = {
        pokemonBattle: pokemon.name,
        iWon
    }; 
    
    fetch("/api/battles", {
        method: "POST",
        body: json.stringify(body),
        Headers: { "content-type": "application/json"}
    });

});  
