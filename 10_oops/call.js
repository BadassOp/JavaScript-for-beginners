/*
if you have window object then 'this' refers to the window object but if you are in node environment then there you dont have window object so it returns empty object 
window = {this = window}
node = {}
*/

function setUsername(username){
    // complex db calls 
    this.username = username
}

function createUser(username, email, password){
    // setUsername(username)  // it will execute but not hold the value of the executed function

    // With call(), an object can use a method belonging to another object.
    setUsername.call(this, username)  // .call is used to hold the reference of the executed function. Here 'this' is used as first parameter and it passes the context of the function
    this.email = email
    this.password = password
}

const hello = new createUser("hello", "hello@gmail.com", "123")
console.log(hello);


// Example of CALL
let Name = {
    firstname: "Badass",
    lastname: "OP",
    printfullname: function(age, country, state){
        return `${this.firstname} ${this.lastname} your age is ${age} from ${country} living in ${state}`
    }
}

let name2 = {
    firstname: "Hello",
    lastname: "Coder"
}

console.log(Name.printfullname.call(name2, "20", "India", "Delhi"))  // call
console.log(Name.printfullname.apply(name2, ["20", "India", "Delhi"]))  // apply


// Difference between call and apply is that:- 
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.
