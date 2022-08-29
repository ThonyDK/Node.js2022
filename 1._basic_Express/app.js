//npm install skal installeres ved ny mappe (node_modules vil stå til venstre)
//require gør at vi kan benytte express
const express = require("express"); 
//Her laves en variabel hvor vi gemmer metoden ekspress i da vi gerne vil
//benytte den i vores endpoint
const app = express();
//Endpoint
//Her benytter vi app med en GET for at få response på message vi gerne vil have 
//Eksikveret
app.get("/", (request, response) => {
    response.send({ message: "Created my first route. Check."});
});
//Set port 
//Her sætter vi på hvilken port vi gerne vil have skrevet ud på fx. localhost8080
app.listen(8080); 