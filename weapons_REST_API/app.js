//Using express framework
const express = require("express"); //Vi vil bruge express fra deres bibliotek.
const app = express(); //for at man kan bruge express i appen gemmes den i app variable. 
app.use(express.json());// adding middleware to handle req.body.name function. 
app.use(express.urlencoded()); // Parses URL-encoded bodies
// List of weapons
const weapons = [{name: "Desert eagle", id: 1}, {name: "AK47", id: 2},{name: "M4A1-S", id: 3},{name: "M60", id: 4},{name: "KNIFE", id: 5}];

//Getting the list of weapons
app.get("/weapons", (req, res) => {
    res.send(weapons); //sender responset til browseren
});

//Getting a weapon by its id
app.get("/weapons/:id", (req, res) => {
    //const startIndex = req.params.id - 1;
    const weapon = weapons.find(w => w.id === parseInt(req.params.id));
    if (!weapon) res.status(404).send('The weapon is not found with that id')
    res.send(weapon); //sender responset til browseren
});

//Create weapon
app.post("/weapons", (req, res) => {
    //Object to put in weapons
    const weapon = {
        id: weapons.length + 1, // manuelt laves der et id, men normalt vil dette blive lavet af databasen. 
        name: req.body.name // Her skal tilføjes middleware da body ikke er en del af express.
    };
    weapons.push(weapon); //pusher det ind i arrayet der indeholder weapons. 
    res.send(weapon); //sender responset til browseren

});
    
app.put("/weapons/:id", (req, res) => {
    // If not existing, return 404
    const weapon = weapons.find(w => w.id === parseInt(req.params.id));
    if (!weapon) 
    return res.status(404).send('The weapon is not found with that id');

    //Update weapon
    weapon.name = req.body.name;
    //Return the updated weapon
    res.send(weapon);
    
});

// Delete a weapon
app.delete("/weapons/:id", (req, res) => {
    // If not existing, return 404
    const weapon = weapons.find(w => w.id === parseInt(req.params.id));
    
    if (!weapon) 
    return res.status(404).send('The weapon is not found with that id');

    // Deleting 
    const index = weapons.indexOf(weapon);
    weapons.splice(index, 1);

    // Returning deleted weapon
    res.send(weapon); 
})

//Listener on port
app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});