// creating literal object
const user = {
    username: "Badass",  //these are properties
    loginCount: 8, 
    signedIn: true,

    // creating method 
    getUserDetails: function () {
        console.log("Got user details");
        console.log(`username: ${this.username}`); //talking about own object, concept of scope. If "this" keyword is not used then it will throw error
        console.log(this);

    }
}

// console.log(this);
// console.log(user.username);
// console.log(user.getUserDetails());


function client(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn  
    
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}


const userOne = new client("Badass", 12, true)

// const userTwo = client("Hello", 20, true) // userTwo will overwrite the values of userOne even if you print user one, so to avoid this use new keyword
const userTwo = new client("Hello", 20, true)

console.log(userOne);
console.log(userTwo.username);

/*  NOTES About NEW keyword
(1)- when new is used then a new object is created known as instance
(2)- a constructor function(main function) is called bcoz of this new keyword and packs the arguments in that new object
(3)- all the arguments are injected in this keyword
(4)- returns value
*/