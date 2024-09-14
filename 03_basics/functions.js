//function syntax

function myName(){
    console.log("N");
    console.log("a");
    console.log("m");
    console.log("e"); 
}

// myName   //(myName)function reference
// myName()  //(myName()) function execution


// input given in function definition is known as parameter, while the values which are given while function calling known as arguments


//+++++++++++++  method 1 (without return value)++++++++++++++++

/*
function adding(num1, num2){
    console.log(num1 + num2);
}
*/


// +++++++++++++++  method 2 (with return function)  ++++++++++++

function adding(num1, num2){
    let result = num1 + num2
    console.log(result);
    return result
    // console.log(result);  nothing can be printed after return
}


//++++++++++++++++++  method 3 (return function)  +++++++++++++++

// can only be printed using console.log(adding(arguments));  OR it needed to be stored in variable first then print

/*
function adding(num1, num2){
    return num1 + num2 
}
*/



// adding()  //output is nan as no arguments are given
// adding(4, 6)
// adding(4, "4")
// adding(4, "a")
// adding("u", 5)


const result = adding(5, 5)
// console.log("result: ", result);


// if(!username) & if(username === undefined) both are same as "!" is a "not" operator
// function loginUserMessage(username = "sam") here sam is defined as bydefault value so that the value cannot be undefined but if user inputs value it will be overwrited

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just loggen in `
}
console.log(loginUserMessage("shantanu"));
console.log(loginUserMessage());  //undefined output
