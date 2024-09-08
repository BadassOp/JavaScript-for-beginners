// Stack (primitive), Heap (non-primitive)
// stack memory is used in all primitive value (datatypes) and heap is used for all non-primitive value (datatypes)



// Example of primitive value here the variable creates a copy of the value and then assign it & all the changes which are going to happen will be done in the copied value not original value 
let myYoutubeName = "BadassOP"

let anotherName = myYoutubeName  // assigning value
anotherName = "Noob Gamer"  // changes in the copy

console.log(myYoutubeName); // original value print
console.log(anotherName);  // changed value print


// example of non-primitive value here the reference of the original value is given means if any changes are made then it will affect the main value too.
let userOne = {
    email: "user@gmail.com"
    upi: "user@ybl"
}

let userTwo = userOne  //reference of original value
userTwo.email = "new@google.com"  // value changed in original value too
console.log(userOne.email);  //prints the changed value
console.log(userTwo.email);  //prints the changed value
