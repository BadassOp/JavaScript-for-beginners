let value = 4
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);

let str1 = "Hello"
let str2 = " Shantanu"
let str3 = str1 + str2
console.log(str3);


console.log("1" + 2);
console.log(1 + "2");
console.log(1 + 2);
console.log("1" + 2 + 2);    // no addition only string joining because string dt is before numerical value
console.log(1 + 2 + "2");    //operators precedence here 1st add then string joining


console.log( 4 + 4 * 7 % 3);  // this is wrong there is no readability 
console.log( (4 + 4) * 7 % 3);  //this is right there is a readability


console.log(true);
console.log(+true);
console.log(+"");
// console.log(true+); //error

let gameCounter = 100
gameCounter++  //postfix
// ++gameCounter  //prefix
console.log(gameCounter);
