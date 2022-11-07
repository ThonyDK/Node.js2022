// Henter ekspress fra bibliotek 
import express  from "express";
// instatirere express
const app = express(); 

import helmet from "helmet";
app.use(helmet()); 

import session from "express-session"
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // HTTPS så må ikke være true 
}))

import rateLimit from 'express-rate-limit'; 

const generalLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 80
}) 
app.use(generalLimiter); 

const frontdoorLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
app.use("/frontdoor", frontdoorLimiter); 

/* midlleware functions 
function ipLogger(req, res, next) {
    console.log(req.ip)
    next();
}*/

// Route til popcorn endpoints
import popcornRouter from "./routers/popcornRouter.js"
app.use(popcornRouter); 

// Midlleware function 
// Funktionen er middleware pga. den bliver brugt nede i app.get 
function guidingButler(req, res, next) {
    console.log("This way, sir"); 
    next(); 
}
// Gør den middleware funktionen global så den kan bruges på alle routes endpoints i stedet for det skal implementeres efter endpointet som guardMiddleware.  
// app.use gør at vi kan køre middlewaren på alle vores endpoints i stedet for at skulle ligge dem seperat efter et evt. endpointet. 
//app.use(ipLogger);

// next() betyder prøv at match med den der passer til endpointet hvor middlewaren ligger i. 
function guardMiddleware(req, res, next) {
    if (req.query.name !== "Anders") {
        res.send({message: "You are not Anders! Go away. "})
    } 
    
    req.fullname = "Anders Latif";
    next();
}

// guidingButler function er fungere som middleware. middleware køre på serveren
app.get("/room", guidingButler, (req, res, next) => {
    console.log("Room 1")
    next()
    //res.send({ message: "Your are in room 1"});
}) 

//req, res er positions bestemt så de skal altid stå req, res, next. 
app.get("/room", guidingButler, (req, res, next) => {
    console.log("room 2"); 
    res.send({ message: "Your are in room 2" });
})

app.get("/frontdoor", guardMiddleware, (req, res) => {
    res.send({message: "Please enter "})
})


// en måde at lave fejlside manuelt. alt der bliver skrevet bagefter /room/ fefasfdsafda (Der vil der komme 404 fejlside)
app.get("*", (req, res) => {
    res.send(`<h1>404</h1><br><h3>could not find the page</h3>`)
})


const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT))


