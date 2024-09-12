const duelists = ["jett", "raze", "neon", "phoenix", "reyna", "yoru"]
const sentinels = ["sage", "cypher", "kill joy", "vyse", "chamber", "deadlock"]

// duelists.push(sentinels)    //adds 1 array into another array as array example:- 
// console.log(duelists);      // [array1[array2]]
// console.log(duelists[6][2]);    //access elements like this as the other array will be treated as value(but it is array) in first array 


const agents = duelists.concat(sentinels)  // concat returns new array, combines the values of the arrays. Only sufficient for 2 arrays
console.log(agents);

const valo = [...duelists, ...sentinels]   //spread operator same as concat but works for 2 or more arrays
console.log(valo);


const array = [1, 2, 3, 4, [2, 5, 6, 9], 8, 4, [8, 2, [1, 9, 5]]]
const solved_array = array.flat(Infinity)  //gives new array concatinated with all sub-arrays & requires parameters in the flat function ++++flat(depth)++++
console.log(solved_array);



console.log(Array.isArray("shantanu"));  //checks if this is an array or not
console.log(Array.from("shantanu"));  //creates array from the given values
console.log(Array.from({name: "shantanu"}));  // gives empty array [INTERESTING]



// creating array with multiple variables
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
