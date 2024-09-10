const score = 300
console.log(score);  // auto defines the datatype

const balance = new Number(100)  //defining the datatype
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));  //gives the no of digits after the decimal eg 100.00 

const otherNumber = 26.5462

console.log(otherNumber.toPrecision(3)); //gives the precise value depending upon the vlaue u have given

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // gives ',' between the values. using this 'en-IN' gives commas as indian standards

//*************************MATHS********************************
console.log(Math);
console.log(Math.abs(-4));  //gives absolute value means gives -ve values as +ve
console.log(Math.round(4.6));  //roundoff value
console.log(Math.ceil(5.2));  //ceiling round off (chooses upper value)
console.log(Math.floor(4.9));  //floor round off (chooses lower value)
console.log(Math.min(4, 9, 6, 8, 45, 2, 5,));  //gives min value
console.log(Math.max(4, 9, 6, 8, 45, 2, 5,));  //gives max value

console.log(Math.random());  //gives value under 0-1
console.log(Math.random()*10);  //multiplying by 10
console.log(Math.random()*10 + 1);  //adding 1 to resolve the case of (0*10=0) so that it will not give 0 and we can get atleast 1 and so on

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1 )) + min); // random value multiplied by the value b/w 10-20 adding 1 to it to remove the case of 0 and adding min value so that it will give the value between 10-20 and used floor roundoff