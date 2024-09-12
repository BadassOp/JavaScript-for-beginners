//  array
const array = [1, 2, 3, 4, 5, 6, 7, 8 ]  //can contain any(mix) datatype
console.log(array[1]);  //accessed by indexing

const heroes = new Array ("iron man", "captain america", "thor", "hulk")
console.log(heroes[0]);

//++++++++++++++++++++++++++++  array methods  ++++++++++++++++++++++++++++++++

// array.push(6)  //adds value in the array in last position
array.pop(5)  //removes value from the array, bydefaul removes from last position
console.log(array);


// heroes.unshift("black widow")       // adds value in first posi
// heroes.shift()     //removes value from first posi
console.log(heroes);


console.log(heroes.includes("thor"));      //boolean
console.log(heroes.indexOf("thor"));      //if not present gives -1 as output

const newArray = heroes.join()      //adds elements of array into a string
console.log(heroes);
console.log(newArray);


 //+++++++++++++++++++++++++++++++  slice, splice  ++++++++++++++++++++++++++++++++

console.log("A", array);
const myArray = array.slice(1, 3)  //gives copy of array using indexing, not gives value of last index which is given as parameter

console.log(myArray);
console.log("B", array);

const myArray2 = array.splice(1, 4) //removes elements from an array from start indes to last index given as parameter
console.log(myArray2);   //gives value which are removed from the arrray using splice
console.log("C", array);

