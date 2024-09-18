const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNumbers.map( (num) => num + 10 )  implicit return 
// const newNums = myNumbers.map( (num) => { return num + 10} )  //explicit return

//++++++++++++++++++++++++++++++++  chaining  +++++++++++++++++++++++++++++++++++++++ 

const newNums = myNumbers.map( (num) => num * 10 )  //passes the output to 2nd chain
    .map( (num) => num + 1)
    .filter( (num) => num >= 40 )

console.log(newNums);
