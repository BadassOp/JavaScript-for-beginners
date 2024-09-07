// let score="69"
// let score="69abc"
// let score=null
// let score=undefined
// let score=true
let score=5.6


console.log(typeof score);
// console.log(typeof (score));  //both are correct to print the variable

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


/*
"33" => 33
"33abc" => NaN (not a number)
true => 1; false => 0   
*/


let isLoggedIn=""
let booleanIsLoggenIn= Boolean(isLoggedIn)
console.log(booleanIsLoggenIn);

/*
1 => true; 0 => false
"" empty string => false
"shantanu" => true
*/

let aNumber=22
let stringNumber= String(aNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

