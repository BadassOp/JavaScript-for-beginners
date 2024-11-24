// creating literal object
const user = {
    username: "Badass",  //these are properties
    loginCount: 8, 
    signedIn: true,

    // creating method 
    getUserDetails: function () {
        console.log("Got user details");
        console.log(`username: ${this.username}`); //talking about own object, concept of scope. If "this" keyword is not used then it will throw error
    }
}

console.log(user.username);
console.log(user.getUserDetails());