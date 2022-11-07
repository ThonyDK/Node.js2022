import { Router } from "express";
import battleRouter from "./battleRouter.js";

// Kalder Router / Instantiere 
const router = Router();
/*
const numbers = [1,2,4,5]
const sum = numbers.reduce((acc, element) => acc + element 
, 0)*/

router.get("api/battleresults/winandlosses", (req, res) => {
    const winsAndlosses = battleRouter.battleResults.reduce((acc, battleResults) => {
        battleResults.iWon? acc.wins++ : acc.losses++;
        return acc;
    }, { win: 0, losses: 0});

    res.send(winsAndlosses);
});

router.get("api/battleresults/pokemonbattled", (req, res) => {

})    


export default router; 