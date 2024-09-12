// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


//Months in js starts with 0 means 0 is january, 1 is february, 2 is march and so on.
let myCreatedDate = new Date(2024, 0, 01)
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());


let my2ndCreatedDate = new Date(2024, 09, 27)
console.log(my2ndCreatedDate);
console.log(my2ndCreatedDate.toDateString());


let anotherDate = new Date(2024, 08, 27, 12, 00) //after date parameter if u give more parameters than they are considered as time in hours, min, sec
console.log(anotherDate.toLocaleString());


let yymmdd = new Date("2024-01-01") //here month starts with 1 only as we are giving the date by ourself
console.log(yymmdd.toLocaleString());


let mmddyy = new Date("01-01-2024")
console.log(mmddyy.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(mmddyy.getTime());


console.log(Date.now()); //gives current time in miliseconds
// console.log(Date.now() / 1000 );    //gives time in decimals
console.log(Math.floor(Date.now() / 1000 ));


let newDate = new Date()
console.log(newDate.getMonth() + 1 ); //to get exact month so that end user doesn't get confused as month starts with 0 in js
console.log(newDate.getDate());

console.log(` the date is ${newDate.getDate()} and the time is ${newDate.getTime()}`)


newDate.toLocaleString('default', {
    weekday: "long"
})   // works same as tolocalestring 