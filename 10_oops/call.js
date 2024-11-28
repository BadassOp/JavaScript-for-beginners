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
    setUsername.call(this, username)  // .call is used to hold the reference of the executed function. Here 'this' is used as first parameter and it passes the context of the function
    this.email = email
    this.password = password
}

const hello = new createUser("hello", "hello@gmail.com", "123")
console.log(hello);
