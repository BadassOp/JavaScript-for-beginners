// Immediately invoked function expression (IIFE)

//Normal funcion 
function db(){
    console.log(`DB CONNECTED`);
}


// IIFE 
// ()()
// first pair of parenthesis is used to define function and second is used to execute the function

// it is used so that function doesn't get polluted by the global scope and will execute immediately 


// named iife
(function db(){
    console.log(`DB CONNECTED`);
})();
// use semicolons ; after ending the first code 

// using arrow function
// unnamed iife
( () => {
    console.log(`DB CONNECTED 2`);
})();


// to pass the values
// passing parameters in an iife function
( (name) => {
    console.log(`DB CONNECTED to ${name}`);
})("badass")
// works same as normal function and arguments are passed like normal function 