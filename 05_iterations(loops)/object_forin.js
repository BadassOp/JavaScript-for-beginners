//+++++++++++++++++++++++++++++  For in on objects  ++++++++++++++++++++++++++++++++++
// in object we can create our own key

const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by app"
}

for (const key in myObject) {
    // console.log(key);  //prints keys
    // console.log(myObject[key]);  //prints value of keys of myObject
    console.log(`${key} shortcut is for ${myObject[key]}`);  //both key value pairs
    
}


//+++++++++++++++++++++++++++++  For in on arrays  ++++++++++++++++++++++++++++++++++
// array constist of keys whose value bydefault starts from 0 and goes upto no. of elements (same as indexing)

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); //print the key of array starting from 0 
    console.log(programming[key]);
}


//we cannot use forin on map because map is not iterable 

const country = new Map
country.set('IN', "India")
country.set('USA', "United States of America")
country.set('FR', "France")

for (const key in country) {
    console.log(key);
    
}