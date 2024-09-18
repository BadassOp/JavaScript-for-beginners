const myNums = [1, 2, 3, ]


// acc = accumulator , curval = current value 

// in acc the initial value is given by the user/programmer after the function using ",".         FOR EXAMPLE  
// .reduce( (acc, curval) => (acc + curval), anyvalue which you want to be initiated by accumulator) 

// after initiation the acc value the next value which is going to be stored in acc would be the sum of the acc + curval

const total = myNums.reduce( function (acc, curval) {
    console.log(`Accumulator: ${acc} and current value: ${curval}`);
    return acc + curval
}, 2 )

// const total = myNums.reduce( (acc, curval) => acc + curval, 0)

console.log(total);


const shoppingCart = [
    {
        itemName: "monitor",
        price: 11999
    },
    {
        itemName: "GPU",
        price: 108999
    },
    {
        itemName: "mother board",
        price: 25999
    },
    {
        itemName: "RAM",
        price: 5999
    },
]

const price = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(`The total price of the components are ${price}`);
