let score; 

let playerOne;
let playerTwo;
//Eksporte de her filer (export)
export function initializePlayers(playerOneInitialized, playerTwoInitialized) {
    playerOne = playerOneInitialized,
    playerTwo = playerTwoInitialized

}
//Eksporte de her filer (export)
export function initializeScore(scoreInitialized = 301) {
    score = scoreInitialized;
}
//Eksporte de her filer
export function initializeGame() {
    console.log(playerOne, playerTwo);
    console.log("Game starts with score...", score);
}