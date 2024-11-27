function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 5

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);  //returns '{}' which is 'this' of that method, here it returns 'this' of multiplyBy5. Means properties of that method for example below is a function named as createuser where this.username is used

function createUser(username, price){
    this.username = username  //(this sets the current context) (jis ka matlab this)
    this.price = price
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`);  //jisne bhi price pucha use price btado (jis means this)
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

tea.printMe()

// Constructor functions act as blueprints for creating objects. They define the properties and methods that objects of a particular type will have


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/