//// Lesson 1 ////

console.log('Hello World');


//// Lesson 2 - Variables ////

let name = 'Mason';
console.log(name);


//// Lesson 3 - Constants ////
// use 'const' if you want to assign a static variable, otherwise use 'let'

const interestRate = 0.3;
console.log(interestRate);


//// Lesson 4 - Primitive Types ////

let firstName = 'Mason'; //String Literal
let age = 28; //Number Literal
let isApproved = true; //Boolean Literal
let lastName = undefined;
let selectedNum = null;


//// Lesson 5 - Dynamic Typing ////
// in console, use 'typeof' followed by a variable, to find the variable type


//// Lesson 6 - Objects ////

let person = {
    name: 'Mason',
    age: 30
}

// Dot Notation (most used)
person.name = 'Mark';

// Bracket Notation
person['name'] = 'Mary';

console.log(person.name);


//// Lesson 7 - Arrays ////

let selectedColours = ['red','blue']; // array
selectedColours[2] = 'green'; // array length can change
console.log(selectedColours[0]); // select index in array and display in console
console.log(selectedColours.length); // show array length


//// Lesson 8 - Functions ////

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

//call function
greet('Mason', 'Last');
greet('Mark', 'Last');


//// Lesson 9 - Type of functions ////

function square(num) {
    return num*num;
}

console.log(square(2));