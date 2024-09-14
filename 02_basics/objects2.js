//++++++++++++++++++  singleton object  ++++++++++++++++++++++++=

// const newUser = new Object() //singleton objects are defined like this
const newUser = {}  //this not a singleton object
newUser.id = "123abc"
newUser.name = "BadassOP"
newUser.isLoggedIn = false

// console.log(newUser);


const regularUser = {
    email: "person@gmail.com",
    fullName: {
        userFullName:{
            firstName: "shantanu",
            lastName: "jayant",
        }
    }
}
console.log(regularUser.fullName.userFullName.lastName);  //using ? after object name (regularUser.fullName?) is called optional chaining used if the object's value is present or not


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}  //adds value like array i.e., objects inside object


// const obj3 = Object.assign({}, obj1, obj2, obj4)  
//{} this is optional as it is used as target object means all the source objs are stored in that empty obj otherwise the first obj which is given without using empty obj will be considered as target object

const obj3 = {...obj1, ...obj2, ...obj4}  //spread operator
console.log(obj3);



//array of objects
const users = [
    {
        id: 1,
        email: "user@gmail.com"
    },
    {
        id: 1,
        email: "user@gmail.com"
    },
    {
        id: 1,
        email: "user@gmail.com"
    },
]

// to access values from array of obj 
users[1].email  //[] parameter, from which value you want to access

console.log(newUser);

//all these functions gives output as array
console.log(Object.keys(newUser));  //all the keys 
console.log(Object.values(newUser));  //all the values
console.log(Object.entries(newUser));  //all the entries as key value pair in array

console.log(newUser.hasOwnProperty('isLoggedIn'));  //to check if the given property is present or not (boolean output)



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const valorant = {
    character: "Phoenix",
    rank: "Immortal",
    favouriteMap: "Heaven",
}

// console.log(valorant.character);  //1 way to print obj value

//destructuring the object

// const {favouriteMap} = valorant
const {favouriteMap: map} = valorant //if you want to use small name/parameter

console.log(map);


//++++++++++++++++++++++++++++++  react concept  +++++++++++++++++++++++++++++++++++++

//destructuring of object in react
const navbar = ({company}) => {

}

navbar(company = "Riot games")


//+++++++++++++++++++++++++++++++++++++ JSON  +++++++++++++++++++++++++++++++++++++

//JOSN as object - syntax
// both key and values are enclosed within ""
/*
        {
            "character": "Phoenix",
            "rank": "Immortal",
            "favouriteMap": "Heaven",
        }
*/

// JSON as Array

[
    {},
    {},
    {},
]