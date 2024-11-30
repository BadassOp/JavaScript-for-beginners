// ES6

// syntax of creating CLASS in javascript

class user{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return`${this.username.toUpperCase()}`
    }
}

const hello = new user("hello", "hello@gmail.com", "123")

console.log(hello.encryptPassword());
console.log(hello.changeUserName());

// Behind the scene working 

function user(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

user.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const badass = new user("badass", "badass@gmail.com", "123")

console.log(badass.encryptPassword());
console.log(badass.changeUserName());