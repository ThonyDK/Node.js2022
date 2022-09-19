import express from "express";
const app = express();

app.use(express.json());

let currentId = 2; 

const weapons = [
    {id: 1, name: "AK-47"},
    {id: 2, name: "knife"}
];

console.log(++currentId);
console.log(currentId);

app.get("/weapons", (req, res) => {
    res.send({data: weapons });
});

app.get("/weapons/:id", (req, res) => {
    const foundWeapon = weapons.find(weapon => weapon.id === Number(req.params.id));
    res.send({data: foundWeapon})
});

app.post("/weapons", (req, res) => {
    const weapon = req.body;
    weapon.id = ++currentId;
    weapons.push(weapon);
    res.send(({data: weapon}));
})
//splice sletter det på index 1 
//console.log(weapons.splice(1, 1));
//console.log("***********");
//console.log(weapons);

//Put ændre man hele objektet fx navn og pris eller hvad man nu har af attributter
//Patch kan man ændre dele i et weapon

//

app.patch("/weapons/:id", (req, res) => {
    const foundIndex = weapons.findIndex(weapon => weapon.id === Number(req.params.id));
    if (foundIndex !== -1) {
        const foundWeapon = weapons [foundIndex]; 
        const weaponToUpdate = { ...foundWeapon, ...req.body, id: Number(req.params.id) };
        weapons[foundIndex] = weaponToUpdate;
        res.send( { data: weaponToUpdate}); 
    } else {
        res.status(404).send( { data: undefined, message: `No weapon found by id: 
        ${req.params.id}` }); 
    }
})

// Delete
app.delete("/weapons/:id", (req, res) => {
    const foundIndex = weapons.findIndex(weapon => weapon.id === Number(req.params.id));
    if (foundIndex !== -1) {
        const deletedWeapon = weapons.splice(foundIndex, 1)[0]; 
        res.send({ data: deletedWeapon });

    } else {
        res.status(404).send( { data: undefined, message: `No weapon found by id: 
        ${req.params.id}` }); 
    }
});

app.listen(8080, () => console.log("Server is running on port", 8080)); 