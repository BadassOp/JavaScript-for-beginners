// singleton  (made by constructor)
// Object.create // through constructor method & singleton is made inside this


// object literals
// object is defined by curly braces{} 

// in object we can define keys

const sym = Symbol("key1")

const JsUser = {
    //sym:"mykey1"    wrong method as this is string datatype we have to enclose them in square brackets so that it will behave like symbol

    [sym]:"mykey1",   // correct syntax for symbols
    name: "shantanu",
    "full name": "shantanu jayant",
    age: 19,
    location: "delhi",
    email: "sj@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturdat"]
}

//ways to access object
console.log(JsUser.email);   //used mostly 
console.log(JsUser["email"]);  //use [] to access objects in exceptional cases like accessing full name where full name is in string format ("full name") and to access symbol
console.log(JsUser["full name"]); //cannot be accessed using '.' 
console.log(JsUser[sym]);


JsUser.email = "shan@yahoo.com"  //to change object's value
// Object.freeze(JsUser)  //freeze the ojbect i.e., no one can change the values of the object now

// JsUser.email = "hanu@protonmail.com"
console.log(JsUser);


//+++++++++++++++++++++  FUNCITONS  ++++++++++++++++++++++++++
// In js functions can be treated as variables


JsUser.greeting = function(){
    console.log("Hello JS user");
}


//string interpolation using``
//to reference same object use "this" eg:- ${this.name}
JsUser.greetingTwo = function(){   
    console.log(`Hello JS user, ${this.name}`);   
}

// console.log(JsUser.greeting);    //function doesn't executed but function returned back (referenced back) 

console.log(JsUser.greeting());  //function executed
console.log(JsUser.greetingTwo());