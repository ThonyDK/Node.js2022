import {Router} from "express"; // henter Router fra express
const router = Router(); // instantiere

router.get("/api/pokemon", (req, res) => {
    fetch("https://pokeapi.co/api/v2/pokemon") // Fetcher en url over fra app.js
  .then(response => response.json()) // .then = med et promise som vil sige at der afventes på et svar fra en server på netværket. 
  .then(result => res.send({ data: result }));

    //res.send({data: ["Slowpoke"] });
});

export default router;   