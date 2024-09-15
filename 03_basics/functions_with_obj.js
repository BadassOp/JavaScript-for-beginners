// function calculatedCartPrice(num1){
// using rest operator aka spread operator to pass multiple values
function calculatedCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculatedCartPrice(200, 50, 100, 600))  //output as array


//passing obj in function
const product = {
    productName: "Phone Case",
    price: 399
}

function anything(object) {
    console.log(`Product is ${object.productName} and price is ${object.price}`); 
}
anything(product)


//another method to pass obj in function
anything({
    productName: "Phone case",
    price: 299 
})


// passing array in function
const newArray = [20, 42, 56, 47, 96]

function secondValue(getArray) {
    return getArray[2]
}
console.log(secondValue(newArray));
console.log(secondValue([61,52,63,44,23]));