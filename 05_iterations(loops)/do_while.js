let index = 0

while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index = index + 2
}



//++++++++++++++++++++++++++++  While loop in Array  ++++++++++++++++++++++++++++++++

let myArray = ["Phoenix", "Yoru", "Iso"]
let arr = 0

while (arr < myArray.length) {
    console.log(`the value of array is ${myArray[arr]}`);  //arr is index of myArray
    arr = arr + 1
}


//++++++++++++++++++++++++++++++++  Do While Loop  +++++++++++++++++++++++++++++++++++

// first works then checks the condition
let score = 1
// let score = 11  //gives output 11 and then stops executing

do {
    console.log(`Score is ${score}`);
    score++    
} while (score <= 10);