import bcrypt from "bcrypt"

const saltRounds = 12; 
const plaintextPassword = "henter12"; 
const loginPassword = "hunter12";
const encryptedPassword = 
"$2b$12$y8zHW2T36Kk/jL5G7OOYyeje/g7aUtpvxSVJGrCCpyWAjMmfYyLK2"

const encryptedPasswordResult = await bcrypt.hash(plaintextPassword, saltRounds); 
//console.log(encryptedPasswordResult); 

const passwordComparison = await bcrypt.compare(loginPassword, encryptedPassword); 
console.log(passwordComparison);   