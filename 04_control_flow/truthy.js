// when we assume the string has true value then it is known as truthy value

const uesrEmail = "badass@gmail.com"  //truthy
// const uesrEmail = ""  //falsy
// const uesrEmail = " "  //truthy

if (uesrEmail) {
    console.log("Got user email");
    
}
else{
    console.log("Don't have user email");
    
}


// falsy vlues 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " "(space between string), [], {}, function(){}
// anything b/w the double quotes ("") will be considered as  truthy value 


//++++++++++++++++++++++  To check if array is empty or not  ++++++++++++++++++++++
const agent = []
if (agent.length === 0) {
    console.log("array is empty");
}



//++++++++++++++++++++++  To check if object is empty or not  ++++++++++++++++++++++
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");  
}
// Object.keys()  gives array of keys as output
// (Object.keys(emptyObj).length === 0)  array of keys of emptyObj which is checked by the condition


//+++++++++++++++++++++++++++++  Equality comparison  ++++++++++++++++++++++++++++++
false == 0 //true
false == '' //true
0 =='' //true


if (false == 1) {
    console.log("true");    
}
else {
    console.log("false");
    
}


// ++++++++++++++++++++++++  Nullish Coalescing Operator (??)  +++++++++++++++++++++++

// focused only on : null & undefined

let num1;
// num1 = 5 ?? 10
// num1 = null ?? 10
// num1 = undefined ?? 15
num1 = null ?? 10 ?? 20
num1 = null ?? undefined ?? 20


console.log(num1);


//+++++++++++++++++++++++++++++++  Ternary operator  +++++++++++++++++++++++++++++

// condition ? true : false
const productPrice = 100
productPrice <= 80 ? console.log("yes") : console.log("no");
