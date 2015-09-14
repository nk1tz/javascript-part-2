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

//_______________________________________________
// #2
// sorting by longuest name and alphabetically.

var contacts = [
    {name:"Mathew", email:"Mat@gmail.com"},
    {name:"Kyle", email:"Kyle@gmail.com"},
    {name:"Nathaniel", email:"Nat@gmail.com"},
    {name:"Pillip", email:"Phil@hotmail.com"},
    {name:"Iza", email:"Zimbab@sympatico.ca"}
];

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
        return -1;
    }
    if (nameA > nameB){
        return 1;
    }
    return 0; //default return value (no sorting)
});

console.log(sortedByEmailAlphabetically);

//_______________________________________________
// #3
// Map an array giving the squares of the original.

var arrayToSquare = [3,5,7,11,2,1,9,22];

var squaredArray = arrayToSquare.map(function (x) {
        return Math.pow(x, 2);
  });
  
console.log(squaredArray);

//_______________________________________________
// #4
// array prototype map on object.

var contactsWithNums = [
    {name:"Mathew", email:"Mat@gmail.com", num:8},
    {name:"Kyle", email:"Kyle@gmail.com", num:19},
    {name:"Nathaniel", email:"Nat@gmail.com", num:3},
    {name:"Pillip", email:"Phil@hotmail.com", num:12},
    {name:"Iza", email:"Zimbab@sympatico.ca", num:11}
];

function squareNumInObj(obj){
    var obj2 = Object.create;
    obj2.num = obj.num*obj.num;
    return obj2;
}

var newContactsList = contactsWithNums.map(squareNumInObj);

console.log(newContactsList);
console.log(contactsWithNums);

//_________________________________________________
// #5
// Operation Make Function

function operationMaker(str){
    switch (str) {
        case 'add':
            return function add(num1,num2){return num1+num2};
        case 'sub':
            return function sub(num1,num2){return num1-num2};
        case 'mult':
            return function mult(num1,num2){return num1*num2};
        case 'div':
            return function div(num1,num2){return num1/num2};
        default:
            return "please use either add, sub, mult, or div";
    }
}

console.log(
    operationMaker("sub")(8,5)    
)