const name = "Rahul"
const surname = " Srivastav"

// console.log(name + surname + " value");  // old way 

console.log(`Hello my name is ${name} any my surname is ${surname}`);  //new way and easily readable use `` this method


const gameName = new String('BadAssOP');  //new way for declaring string this method also gives index access 

console.log(gameName[3]);

//using javascript methods
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));  // to check which character is present at given index
console.log(gameName.indexOf('a')); //tells the index no. of the given character 


// String slicing
console.log(gameName.substring(0, 6));  //cannot use negative indexes

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-7, 7)   //in slice function negative indexing can be used
console.log(anotherString);


const tString = "    space     "
console.log(tString);
console.log(tString.trim()); // trims the negative spaces in the string (works on white spaces and line terminators)


const url = "https://new.com/new%20website"
console.log(url.replace ('%20', '-'));  //replace value, string 
console.log(url.includes('new')) //to check if value is present gives boolean output


const aString = "hello-how-are-you"
console.log(aString.split('-')); //splits value by separator and gives output as an array
