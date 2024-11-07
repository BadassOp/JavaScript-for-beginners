// window.document refers to the Document Object Model (DOM) of the current HTML document loaded in the browser window
console.log(window);
console.log(window.document);  //returns an Object
console.log(document); // (window.document) both r same
console.log(document.baseURI); 
console.log(document.links); //HTML collection not array but can be converted into arrays, so by default they dont have properties like for each, map etc.
document.getElementById('id name')
document.getElementById('id name').innerHTML="<h1> changed value </h1>"  // changes the id paraeter in dom.
document.getElementById('title').setAttribute('class', 'test') //always overwrite the class name

++++++++++++++++++++++++++++++++++++++++++++++++++

document.getElementById('title')//selecting element
const title = document.getElementById('title')//storing element in a variable

// accessing things using the variable name 

title.style.backgroundColor = 'green' //style is used same as normal code
title.textContent //to get the content of the element
document.querySelector('h2') //selects only the given query
document.querySelector('#title') // (#) used to select the id 
document.querySelector('.heading') // (.) used to select the class

// all CSS selectors works in dom 

document.querySelector('input[type="password"]')// to select input type
document.querySelector('ul')// used to select unordered list

//node list is not an array but can be treated as an array. some array functions are present in node list

//html collection can be converted into array. For ex=  Array.from(html collection name which you have to convert into array)