/*
TYPES
*/

//Booleans
let on = true
console.log(on); //output ->true

let off = false
console.log(off); //output -> false

//Booleans can represent: true/false, on/off, yes/no 

//Null
/*
Null = empty value( not 0;not undefined)

is like an empty container; nothing is in it but it still exsist as a space to be filled 
*/

let empty = null
console.log(empty);

//Undefinded
/*
undefined = no value assigned (Not an empty container like null)

indefined is not an error
*/
let undef = undefined
console.log(undef);

let grass;
console.log(grass);

/* Think of Null and undefined as packages
Null-> packages sent out empty
undefined -> package that was forgotten or not yet used 
*/

//Numbers
let degrees = 65
console.log(degrees);

let precise = 9999999999999999
console.log(precise);

let round = 99999
console.log(round);

let notQuite = 0.2+0.1;
console.log(notQuite);

let anotherNum = 0.2 + 0.1;
console.log(anotherNum);

let num = 0.3
console.log(num);

let numbersArehard = (0.2*10 + 0.1 * 10) /10;
console.log(numbersArehard);

//Strings
//strings =any value within quotes; javascript will spit out values within the quotes
let stringOne = 'single quotes'
let stringTwo = "double quotes"
console.log(stringOne,stringTwo);
//Numbers vs strings

let first = 1050 + 100;
let second = '1050' + '100';

console.log(first); //number 
console.log(second); //string

console.log(typeof first);

let firstName = 'Kenny';
let lastName = 'Hart';
let houseNumer = '2310';
let street = 'kenwoodAvenue'; 
let city = 'Indpls';
let state = 'In';
let zip = 46208;
console.log(firstName, lastName + houseNumer, street, state, zip);

//Objects
/*
What is an object?

a container that can hold multiple data types 
denoted  by {}
has keys and values (color(key): 'blue' (value)) seperated with a colon
Each key seperated with a comma
*/
let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
}
console.log(burritosNow);


//Arrays
/*
Arrays are great for list

denoted by []
have values seperated by commas
*/

let burritos = ['large',4,true];

console.log(burritos);
console.log(typeof burritos);