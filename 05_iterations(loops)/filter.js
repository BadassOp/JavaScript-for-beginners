const languages = ["java", "ruby", "python", "cpp", "js"]

// foreach never returns value 
const values = languages.forEach( (item) => {
    // console.log(item);
    return item
} )
// console.log(values);


//+++++++++++++++++++++++++++++++++++++  Filter  +++++++++++++++++++++++++++++++++++++
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const num = numbers.filter( (item) => item > 5 )  //implicit return method 

//explicit return method
// const num = numbers.filter( (item) =>{
//     return item > 4
// } )


//++++++++++++++++++++++++++++++++  Using for each  ++++++++++++++++++++++++++++++++++

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const num = []
numbers.forEach( (value) => {
    if (value > 4) {
        num.push(value)
    }
} )

// console.log(num);



