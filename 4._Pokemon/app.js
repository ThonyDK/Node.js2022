// instans af express
import express from "express"; // vi bruger import i stedet for const express = require("express");
//const express = require("express"); kig i noten ovenfor hvorfor vi ikke bruger denne mere
const app = express();

//app.use(express.json); 
app.use(express.urlencoded({ extended : true }));
app.use(express.static("public"));

// Routers 
// Når den er importeret og sat ind i app.js så køre den som en form for middleware. 
// Router bruges så der er struktur over de forskellige features et program måtte have. 
// Det er en god måde så alle endpoints ikke ligger inde i app.js og fylder.  
import pokemonRouter from "./routers/pokemonRouter.js" 
app.use(pokemonRouter); 
import battleRouter from "./routers/battleRouter.js"
app.use(battleRouter.router); 
import battleResultsRouter from "./routers/battleResultsRouter.js"
app.use(battleResultsRouter);
// Router til at sende en besked via post til en mail  
import contactRouter from "./routers/contactRouter.js"
app.use(contactRouter); 

// importere renderPage og battle fra util/templateEngine. Så kan de bruges på app.js
import { renderPage, injectData } from "./util/templateEngine.js";

// renderPage indsættes den path hvor html dokumentet ligger, og options som ligger som et objekt.
// frontPages indsættes under endpointet / 
const frontpagePage = renderPage("/frontpage/frontpage.html",
{
    tabTitle: "Pokemon",
    cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});

// renderPage indsættes den path hvor html dokumentet ligger
// ContactPages indsættes nedenunder endpointet /contact
const contactPage = renderPage("/contact/contact.html");

const battlePage = renderPage("/battle/battle.html", {
    cssLink: `<link rel="stylesheet" href="/pages/battle/battle.css">` 
});

const battleResultsPage = renderPage("/battleResults/battleResults.html");


// Route to frontpage
app.get("/", (req, res) => {
    res.send(frontpagePage);
})

// Route to battle
const randomPokemon = ["Pikachu", "Slowpoke", "ditto"];
app.get("/battle", (req, res) => {
    res.redirect(`battle/${randomPokemon[Math.floor(Math.random() * randomPokemon.length)]}`);
})

// Route
app.get("/battle/:pokemonName", (req, res) => {
    const pokemonName = req.params.pokemonName; 
    const battlePageWithData = injectData(battlePage, { pokemonName });
    res.send(battlePageWithData.replace("%%TAB_TITLE%%", `Battle ${req.params.pokemonName}`));
});


app.get("/battleResults", (req, res) => {
    //const battleResultsWithData = injectData(battleResultsPage, {})
    res.send(battleResultsPage)
})

// Route to contact 
app.get("/contact", (req, res) => {
    res.send(contactPage); 
})

// Route to get the list of pokemons
app.get("/api/pokemon", (req, res) => {
    fetch("https://pokeapi.co/api/v2/pokemon") // Fetcher en url over fra app.js
  .then(response => response.json()) // .then = med et promise som vil sige at der afventes på et svar fra en server på netværket. 
  .then(result => res.send({ data: result }));

    //res.send({data: ["Slowpoke"] });
});


// Hvilken port programmet lytter til
// Hvis porten ikke kan findes så vil den altid starte port 8080. 
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
})
/*
app.listen(Number(PORT), (error) => {
    console.log("Server is running on port", 8080);
})*/
