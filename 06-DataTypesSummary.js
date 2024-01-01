//  Primitive datatypes
//  7 Types : String, Number, boolean, null, undefined, Symbol (uniqueness), BigInt

const score = 100 
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null 
// reminder: add API Key here 
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123') 
console.log(id === anotherId); // not same it is unique 

const bigNumber = 4753987593759375983475934985739595737534789573n  //bigint


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name:"abc",
    age : 21
}

const myFunc = function() {
    console.log("hello world!");
}