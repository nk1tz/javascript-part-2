// #1
// Array.prototype.sort method. 

var randomWords = ["potato","apple","hamilton","ham","banana","burp","milestone","extraordinary","he"];

console.log( 
    randomWords.sort(compareStrings) 
);

function compareStrings(a, b) {
  if (a.length < b.length) {
    return -1;
  }
  if (a.length > b.length) {
    return 1;
  }
  // if a equal to b
  return 0;
}


// #2
// sorting by longuest name and alphabetically.

var contacts = [
    {name:"Mathew", email:"Mat@gmail.com"},
    {name:"Kyle", email:"Kyle@gmail.com"},
    {name:"Nathaniel", email:"Nat@gmail.com"},
    {name:"Pillip", email:"Phil@hotmail.com"},
    {name:"Iza", email:"Zimbab@sympatico.ca"}
]

var sortedByNameLength = contacts.sort(function (a,b) {
    if (a.name.length < b.name.length) {
        return -1;
    }
    if (a.name.length > b.name.length) {
        return 1;
    }
    // if a equal to b
    return 0;
});

console.log(sortedByNameLength);

var sortedByEmailAlphabetically = contacts.sort(function(a, b){
    var nameA = a.email.toLowerCase();
    var nameB = b.email.toLowerCase();
    if (nameA < nameB){ //sort string ascending
        return -1 
    }
    if (nameA > nameB){
        return 1
    }
    return 0 //default return value (no sorting)
});

console.log(sortedByEmailAlphabetically);