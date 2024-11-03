// window.document refers to the Document Object Model (DOM) of the current HTML document loaded in the browser window
console.log(window);
console.log(window.document);  //returns an Object
console.log(document); // (window.document) both r same
console.log(document.baseURI); 
console.log(document.links); //HTML collection not array but can be converted into arrays, so by default they dont have properties like for each, map etc.
document.getElementById('id name')
document.getElementById('id name').innerHTML="<h1> changed value </h1>"  // changes the id paraeter in dom.