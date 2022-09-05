
//Javascript køre ikke kode oppefra og ned men koden bliver hoistet 
//console.log(add(5,28)); //Hoisting princippet

//Gets hoisted
//Normal funtion
function add(a,b){
    return a + b;
}
//annonym funktion           //Det at funktionen ikke har noget navn gør at det er en anonym funktion
const addAnonymousFunction = function (a, b) {
    return a + b;
};

//Arrow er uden function deklaration
const addArrowFunction = (a, b) => {
    return a + b;
};
//Brug enten de normale funktioner eller arrowfunctions. Arrowfunctions er mere nymoderne at bruge. 
//Bruger man arrowfunction så benyt kun arrowfunctions i koden. Det vil gøre koden mere konsistent. 
//this udtrykket er bundet til arrowfunctions.
const addArrowFunctionCompact =(a, b) => a + b;

// callback er en funktion some bliver sendt videre som et argument til en anden funktion. 
function genericActionsExecuter(anyCallbackFunction, name){
    // Execute some code ...
    return anyCallbackFunction(name);
}

const spitting = (name) => `${name} is spitting.`;

console.log(genericActionsExecuter(spitting, "Amanda"));


//task write a single line below without changing the above.

//task the output to the terminal should be: Amanda is spitting


//console.log(addAnotherFunction(3,6))

/*
//Skriver navnet ud i konsollen
const name = "Jens"
console.log(`${name}`)*/


//Task create a function that allows Malthe to shoot and call it.
//task result should be: Malthe is shooting.
function genericActionsExecuter(anyCallbackFunction, name){
    return anyCallbackFunction(name);
}

const shooting = (name) => `${name} is shooting.`;

console.log(genericActionsExecuter(shooting, "Malthe"));
 

//Create a Single statement below that console logs "Murat" is running away. 
function genericActionsExecuter(anyCallbackFunction, name){

}

console.log(genericActionsExecuter((name) => `${name} is running away.` , "Murat"));