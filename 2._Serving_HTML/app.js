import express from "express";
// express via module - den kigger i node modules om der er en mappe som hedder express
const app = express();

//Exposer client files (dartGames.js og plaDarts.js)
app.use(express.static("public"));//Denne mappe må clienten gerne få filerne fra

import path from "path";

/*
cant do this ever... must read file
import packageJSON from "./package.json"
console.log(require(packageJSON)); 
//require("./package.json")*/

import { incrementVisitorCounter} from "./geocitiesUtil.js";

app.get("/", (req, res) => {
    console.log("Visitors since the server started", incrementVisitorCounter());
    //Cant use __dirname as it only works on common js
    //res.sendFile(__dirname + "/public/frontpage/frontpage.html"); //remember the slash
    res.sendFile(path.resolve("./public/frontpage.html")); 
});



//Well know port 
app.listen(8080, () => console.log("Server is running on port 8080", 8080)); 