//npm install skal installeres ved ny mappe (node_modules vil stå til venstre)
//require gør at vi kan benytte express

//Another way to import in a single line
//const app = require("express")();
const express = require("express"); //importere express
//Her laves en variabel hvor vi gemmer metoden ekspress i da vi gerne vil
//benytte den i vores endpoint
const app = express();
//gør at bodyparser virker som vi bruger i et post request
app.use(express.json());
//Endpoint
//Her benytter vi app med en GET for at få response på message vi gerne vil have 
//Eksikveret
//Route       //Callback function = funtion der bliver sendt videre som et argument. 
app.get("/", (request, response) => {
    response.send({ message: "Created my first route. Check."});
});

app.get("/deers", (req, res) => {
    res.send({size: "BIG"});
});
//Path varibles er brugt for at få et request på et id.
app.get("/deers/:id", (req, res) => {
    if (Number(req.params.id) === 1){
        res.send({name: "Bambi", theBestAndOGDeer: true });
    } else {
        res.send({errorMessage: "I dont know that deer"});
    }
});

app.get("/actors", (req, res) => {
    console.log(req.query.name);
    res.send({
        message: "Information about the actor",
        ...req.query
    });
});

//Task make a cups route
app.get("/cups", (req, res) => {
    res.send({size: "Cups are small"});
});

app.post("/actors", (req, res) => {
    console.log(req.body)
    res.send({data: req.body})
});

//Set port 
//Her sætter vi på hvilken port vi gerne vil have skrevet ud på fx. localhost8080
app.listen(8080, () => {
    console.log("Server is running on port", 8080);
}); 

// Ways to send data with GET
// 1.
// path variables
// /deers/{id}

// 2. 
// Query parameters (query string)
// /deers?key&value&key2=value2

