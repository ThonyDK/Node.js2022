// Router
import { Router } from "express";
const router = Router();

router.get("/popcorn/fill", (req, res) => {
    req.session.popcornamount = 100;
    res.send({ popcornamount: req.session.popcornamount });
})

router.get("/popcorn/eat/:amount", (req, res) => {
    const amount = Number(req.params.amount);
    if (!amount) return res.send( { message: "Amount is not a number"})
    
    req.session.popcornamount -= amount; 
    if (req.session.popcornamount <= 0) {
        return res.redirect("/popcorn/fill")
    }
    res.send({ popcornamount: req.session.popcornamount }); 
}); 

export default router; 

