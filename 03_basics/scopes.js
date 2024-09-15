let a = 100
const b = 20
var c = 30

// global scope {}
// {block scope}
// {} curly braces are scopes in if else, function etc
if (true) {
    let a = 10
    const b = 20
    var c = 400
    console.log("inner value of A is:", a);
}

console.log(a);
console.log(b);
console.log(c); //value changed coz of using var 



//++++++++++++++++++++++++  NESTED SCOPE  ++++++++++++++++++++++++
// with function

function big() {
    const username = "shantanu"
    // console.log(username);
    
    function small() {
        const website = "youtube"
        console.log(username);
        console.log(website);  
    }
    // console.log(website); produce error as name is in the block scope
    
    small()

}
big()


//   EXAMPLE  with if else

if (true){
    const product = "Smartphone"
    if (product === "Smartphone"){
        const gift = "watch"
        console.log(`Your product is ${product} and your gift is ${gift}`);
        
    }
    // console.log(gift);   //out of block scope (2nd loop)
    
}
// console.log(product);   //out of block scope (1st loop)

// +++++++++++++++++++++++++++++  INTERESTING  +++++++++++++++++++++++++++++++++


//no error (basic function)
console.log(addOne(4));

function addOne(num) {
    return num + 1
}

console.log(addOne(6));


//declaring function and holding it in a variable 

//it will give an error as the variable is declared after calling the function 
// known as expression
// addTwo()
const addTwo = function(num){
    return num + 1
}

console.log(addTwo(7));