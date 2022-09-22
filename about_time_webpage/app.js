// instans af express
import express from "express"; // vi bruger import i stedet for const express = require("express");
//const express = require("express"); // kig i noten ovenfor hvorfor vi ikke bruger denne mere

// Instantiere serveren (instanse af express)
const app = express();

//
app.use(express.static("public"));

//
import path from "path";  

// Route
app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontpage.html"));
})

// Hvilken port programmet lytter til
app.listen(8080, (error) => {
    console.log("Server is running on port", 8080);
})