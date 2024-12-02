// Question is can we change the value of math.pi in javascript or not and if we cannot change the value of math.pi then why we can't change it.

// Object.getOwnPropertyDescriptor() method returns an object describing the configuration of a specific property on a given object
// using this we can check if the property is writable, enumerable etc. 

const value = (Object.getOwnPropertyDescriptor(Math, "PI")) // checking the configurations of pi property from math object and storing it in a variable
console.log(Math.PI);  // value of PI
console.log(value);  // invoking the valriable


// creating own object to check the configurations of specific property

const gadgets = {
    name: "Laptop",
    price: 89999,
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(gadgets));  // returns undefined coz gadgets is an object not a property
console.log(Object.getOwnPropertyDescriptor(gadgets, "name"));  // checking the configurations of name property

// changing/defining the configurations of the property

Object.defineProperty(gadgets, 'name', {
    writable: false,
    enumerable: false  // used to iterate an object. if it is false then object cannot be iterated 
})
console.log(Object.getOwnPropertyDescriptor(gadgets, "name"));


// Iterating the OBJECT 

// Plain objects in JavaScript are not iterable by default.This means you cannot directly use them in a for...of loop or other constructs that expect iterables.

// for (let [key, value] of gadgets) {   // returns error 
for (let [key, value] of Object.entries(gadgets)) {  // iterating entries of object
    console.log(`${key}: ${value}`);
}