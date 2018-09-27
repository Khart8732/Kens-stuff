/*
Recap
*/

let stringExample = 'string';
let numberExample = 0;
let boolExample = true;
let conditionExample = 0;

//if else

if (typeof conditionExample === 'string'){
console.log('yep, its a number');
}else if (typeof conditionExample === 'number'){
    console.log('yep its a number');
}else if (typeof conditionExample === 'boolean');{
console.log("yep its a  boolean");
}



switch (typeof conditionExample) {
    case 'string':
    console.log('this is a string');
    break;
    case 'number':
    console.log('this is a number');
    break;
    default:
    console.log('this variable is not a string o a number');
}

//ternary

(typeof conditionExample === 'string') ? console.log('our variable is a string') 
:(typeof conditionExample === 'number') ? console.log('our var is a number')
: (typeof conditionExample === 'undefinded') ?console.log('our var is undefined'):
console.log('this is our default case');

let fb = 15;

if (fb % 3 === 0 && fb % 5 === 0){
    console.log('fizz buzz');
}else if (fb % 5 === 0){
    console.log('buzz')
}else if (fb % 3=== 0){
    console.log('fizz')
}

switch (true){
case (fb % 5 === 0):console.log('Fizz Buzz');
break;
case (fb % 5 === 0):console.log('buzz')
break;
case (fb % 3 === 0):console.log('fizz');
break;
}


//tarnarie 
fb = 15;
(fb % 15 === 0) ? console.log('fizz buzz'):
(fb % 5 === 0) ? console.log('buzz'):
(fb% 3 === 0)? console.log('fizz') :
console.log('your num is not divisable by 3 or 5');
