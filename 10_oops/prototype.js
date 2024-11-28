/*  DIAGRAM FOR PROTOTYPE
function =>
array    =>  Object  => Null
string   =>

- Every object is a different instance so they have their default properties but we can add properties into them
*/


// let myname = "badass     "
// console.log(myname.length);  // i want to create a method which will tell the true length of the string without blank spaces and it will directly apply right after declaring the string


let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// injecting function in object
Object.prototype.badass = function(){
    console.log(`Badass is present in all objects`);
}

// injecting function in arrays
Array.prototype.hello = function(){
    console.log("Badass says hello");
}

// heroPower.badass()
myHeroes.badass()
myHeroes.hello()
// heroPower.hello() //it will throw error bcoz hello is for array not for object


const user = {
    name: "New",
    email: "new@google.com"
}

const Teacher = {
    makeVider: true
}

const teachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    // old method of prototypal inheritance
    __proto__: teachingSupport  //inheriting properties of teaching support known as PROTOTYPAL INHERITANCE
}

Teacher.__proto__ = user  //inheriting properties of user (old method)

// Modern syntax
Object.setPrototypeOf(teachingSupport, Teacher)  //techingSupport is inheriting the properties of teacher

// answer to the 1st question which is at the top of the code

let anotherUserName = "HelloCoders"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length of the string is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"Badass      ".trueLength()
"Heyyy".trueLength()