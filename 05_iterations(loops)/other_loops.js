//Array specific loops

//+++++++++++++++++++++++++++++++++++  For of loop  ++++++++++++++++++++++++++++++++++

// ["" ,"" ,""]  //Array with string values
// [{}, {}, {}]  //Array with objects

const arr = [ 1, 2, 3, 4, 5]


//element is like index of for loop
for (const num of arr) {
    console.log(num);
}


const greetings = "Hello World!"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

//++++++++++++++++++++++++++++++++++++  Map  +++++++++++++++++++++++++++++++++++++++++
//map is a object in js which holds key value pairs
//no duplicate values only unique values

const country = new Map
country.set('IN', "India")
country.set('USA', "United States of America")
country.set('FR', "France")
country.set('IN', "India")
//no duplicacy

// console.log(country);

// gives output as array 
// for (const code of country) {
//     console.log(code);
// }


// this is ideal to get key value pairs 
// code = key & value = value 
for (const [code, value] of country) {
    console.log(code, '=>', value);
}

// using on objects


//object is not iterable using this syntax we have another syntax for this which is in next file
const myObject = {
    'game1': 'NFS',
    'game2': 'Contra'
}
for (const [key, value] of myObject) {
    console.log(key, '=>', value);
}