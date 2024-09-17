//+++++++++++++++++++++++++++++++  IF  +++++++++++++++++++++++++++++++++++++
// condition should be true if you want them to be executed

const isUserLoggedIn = true
const temperature = 35


if (temperature < 50) {
    console.log("less than 50");
}
else {
    console.log("temperature is greater than 50");
}

// conditional operators >, <, <=, >=, ==, !=, ===(strictly checks the equalization), !==


//++++++++++++++++++++++++++++++++  block scope  +++++++++++++++++++++++++++++++++
const score = 200
if (score > 100) {
    const power = "fly"   //var power = "fly"
    console.log(`user power: ${power}`);
}
//console.log(`user power: $(power)`);  //if using var variable then it will be executed


//+++++++++++++++++++++++++++  short hand notation  +++++++++++++++++++++++++++++

const balance = 600
// implicit scope 
if(balance > 500) console.log("Enough balance");
// if(balance > 500) console.log("Enough balance"), console.log("not good practice");  //don't use this type of code writing

//  +++++++++++++++++++++++++  NESTED IF ELSE  +++++++++++++++++++++++++++++++

if (balance < 500) {
    console.log("less than 500");
}
else if (balance < 750) {
    console.log("less than 750");
}
else if (balance < 1000) {
    console.log("less than 1000");
}
else {
    console.log("more than 1000 rupees");
    
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// && used to check if multiple conditions are true. Returns true if all conditions are true else false
if (userLoggedIn && debitCard && 2==2) {
    console.log("allow to buy product");
}

// "||" pipe operator is used to test multiple conditions
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in"); 
}