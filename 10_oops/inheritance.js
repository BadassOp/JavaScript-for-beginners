class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// EXTENDS is used to create a class that inherits from another class
// allows you to create new classes that reuse the properties and methods of existing classes
class Teacher extends user{
    constructor(username, email, password){
        super(username)  //used to call the constructor of its parent class to access the parent's properties and methods
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const hello = new Teacher("hello", "hello@gmail.com", "123")
hello.addCourse()
hello.logMe()  // hello have the access to the logme 

const badass = new user("badass")
// badass.addCourse()  //badass dont have the access to the addcourse
badass.logMe()

console.log(hello === badass)   // False
console.log(hello === Teacher)   // False
console.log(hello instanceof Teacher)   // True
console.log(hello instanceof user)   // True