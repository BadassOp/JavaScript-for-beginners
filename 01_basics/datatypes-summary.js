// primitive datatypes

// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.5

const isLoggendIn = false
const outsideTemp = null
let userEmail;  // this means let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 474253465498318413516n  //adding n at last makes it as BigInt datatype



// Reference (non primitive) 

// Array, objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];  // array
let myObj = {
    name: "shantanu",
    age: 20,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof userEmail);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof heroes);
console.log(typeof id);
