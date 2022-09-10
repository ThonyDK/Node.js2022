//Using express
const app = require("express")();

const weapons = [{name: "Desert eagle", id: 1}, {name: "AK47", id: 2},{name: "M4A1-S", id: 3},{name: "M60", id: 4}];
//Getting the list of weapons
app.get("/weapons", (req, res) => {
    res.send({weapons});
});
//Getting a weapon by its id
app.get("/weapons/:id", (req, res) => {
    const startIndex = req.params.id - 1;

 if (weapons[startIndex] !== undefined) {
      res.send(weapons[startIndex])
 }else {
    res.send({
        message : "Weapon not found on the list"
    })
 }

});
    
//Listener on port
app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});