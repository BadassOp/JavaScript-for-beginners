// to access variables inside a scope use "this" keyword - refers to current context (context = values)
const user = {
    username: "badass",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username},  welcome to website`);    
        console.log(this);  //prints the full context 
        
    }

}

// user.welcomeMessage()  //default context (value)
// user.username = "Shantanu"  //shantanu is context  
// user.welcomeMessage()  //here the context is changed 


//global objects are window objects in browsers   (IMPORTANT)
console.log(this); //prints empty object{} as there is no context in the global scope


/*
function context(){
    let username = "hello"
    console.log(this); //print lot of values
    console.log(this.username); // prints undefined as works only when function is in object
}
context()
*/


/*
//works the same as the previous function gives undefined
const context = function (){
    let username = "hello"
    console.log(this); 
    console.log(this.username); 
}
context()
*/


//ARROW function
const context =  () => {
    let username = "hello"
    console.log(this); 
}
// context() //prints empty object {}

//basic syntax of ARROW function

// return is used while wrapping in curly braces {}, explicit return method
const addTwo = (num1, num2) => {
    return num1 + num2
}


// no return keyword is used in implicit return method 
// const addTwo = (num1, num2) => num1 + num2  // implicit return method
// const addTwo = (num1, num2) => (num1 + num2)  // implicit return method

// const addTwo = (num1, num2) => ({username: "badass"}) //syntax to return object in implicit method


console.log(addTwo(5, 2));
