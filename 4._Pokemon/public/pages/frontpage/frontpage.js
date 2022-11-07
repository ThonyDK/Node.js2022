
//const pokemonDiv = document.querySelector("#pokemon"); brug altid get elementById
const pokemonDiv = document.getElementById("pokemon");

    /*
    //
     setTimeout(() => {
    // window.location.href = "/battle";
    window.location.replace("battle");
}, 3000); 

/*
fetch("/pokemon") // Fetcher en url over fra app.js
    .then(response => response.json())
    .then(result => {
        console.log(result)
    }); */


    
fetch("/api/pokemon") // 
  .then(response => response.json()) // .then = med et promise som vil sige at der afventes på et svar fra en server på netværket. 
  .then(result => {
    result.data.results.forEach(pokemon => {
        const pokemonIndividualDiv = document.createElement("div");        
        const pokemonNameP = document.createElement("p");
        pokemonNameP.innerText = pokemon.name;

        const battleLink = document.createElement("a");
        battleLink.setAttribute("href", `/battle/${pokemon.name}`);
        const battleButton = document.createElement("button");
        battleButton.textContent = `Battle ${pokemon.name}!`;
        battleLink.appendChild(battleButton);

        pokemonIndividualDiv.appendChild(pokemonNameP);
        pokemonDiv.appendChild(pokemonIndividualDiv);
        pokemonDiv.appendChild(battleLink);
    });
    
}); 
    