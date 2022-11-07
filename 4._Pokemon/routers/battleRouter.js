// Router er en methode/ Function i express
import { Router } from "express";

const router = Router();

const battleResults = []; 

router.get("/api/battles", (req, res) => {
    res.send({ data: battleResults }); 
})

router.post("/api/battles", (req,res) => {
    battleResults.push(req, res)
    res.send({ message: "Results received" });

})

export default {
    router,
    battleResults
};