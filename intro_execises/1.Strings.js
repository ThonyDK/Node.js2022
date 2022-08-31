// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2
console.log(Number(numberOne)); 
console.log(Number(numberTwo));

// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const number1 = Number(anotherNumberOne);
const number2 = Number(anotherNumberTwo);

const result1 = Number(number1 + number2).toFixed(2);

console.log(result1);

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const calculate = Number(one + two + three)

const divede = Number(calculate / 3).toFixed(5);

console.log(divede);


// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

const letter = letters.charAt(2);

console.log(letter);


// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript


const replaceLetter = fact.replace("j","J");

console.log(replaceLetter);

// --------------------------------------