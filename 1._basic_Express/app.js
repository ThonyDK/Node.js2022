const express = require("express"); 
const app = express();
    //Endpoint
app.get("/", (request, response) => {
    response.send({ message: "Created my first route. Check."});
});
//Set port 
app.listen(8080); 