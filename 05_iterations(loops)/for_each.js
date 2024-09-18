const languages = ["java", "ruby", "python", "cpp", "js"]

// In forEach loop, we have to pass a callback function 
// In callback function, function doesn't have a name

//and the function is working inside an array it will take values as parameters itself
languages.forEach( function (item) {
    //console.log(item);
    
} )

//using arrow function
languages.forEach( (item) => {
    // console.log(item);
    
})

//using function referencing

function printMe(item){
    // console.log(item);
}
languages.forEach(printMe) //only reference to a function dont execute it 


//for each loop not only have access to its values or items but also their index and full array 
languages.forEach( (value, index, arr) => {
    // console.log(value, index, arr);
    
} )


//+++++++++++++++++++++++++++++++++  Array of Objects  ++++++++++++++++++++++++++++++

const coding = [
    {
        languageName: "java script",
        languageFileName: "js"
    },
    {
        languageName: "java ",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

coding.forEach( (item) => {
    // console.log(item);  //in each iteration the object is known as item 
    console.log(item.languageFileName);  //from item extracting language file name 
    
})