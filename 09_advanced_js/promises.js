// A Promise is a special type of object with methods like .then(), .catch(), and .finally() that allow you to handle the outcome of the asynchronous operation.
// fetch('https://anything.com').then().catch().finally()

// creating promises one by one

// promise one (basic)
const promiseOne = new Promise(function(resolve, reject){   //resolve is part of promise function
    //do an async tast
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');    
        resolve() //used to connect promise with .then()
    }, 1000)
})

promiseOne.then(function(){  // .then takes a callback function
    console.log("Promise consumed");
})  //then is connected with resolve


//  promise second (without any variable)
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})


// promise third (passing data)
const promiseThree = new Promise(function(resolve, reject){
    //passing data coming from network
    setTimeout(function() {
        resolve({username: "Badass", email: "example@example.com"})  //we can pass data in parameters in resolve, mostly data is passed in an object but sometimes an array is used too
    }, 1000);
})
promiseThree.then(function(user){
    console.log(user);
})


// promise fourth (using reject and chaining .then to retrieve particular value)
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false  //if this is true then it throws error
        if(!error){
            resolve({username: "Badass", password: "123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username  
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


//pronmise fifth (using async await instead of .then and using trycatch to handles the error)
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true  //if this is true then it throws error
        if(!error){
            resolve({username: "Javascript", password: "123"})
        } else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})
// async await cannot handle errors directly
// async function consumePromiseFive() {
//     const response = await promiseFive  //promise is an object so we cannot use this promiseFive()
//     console.log(response);
// }
async function consumePromiseFive() {  //this code is for handling error when error is true
    try {
        const response = await promiseFive  
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// using FETCH function with async await
// getting data from network  takes time this code is perfectly fine 
/*
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // const data = response.json() 
        const data = await response.json() //using await because converting response into json takes time
        console.log(data);
    } catch (error) {
        console.log("E:", error);
    }
}
getAllUsers()
*/
//same thing but using .then
fetch('https://api.github.com/users/BadassOP').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})