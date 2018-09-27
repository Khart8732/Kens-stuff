/*
Hoisting
*/
console.log(scissors);//undefined since var was not set until after 
var scissors = 'blue';

console.log(scissors);

hello();
function hello(){
    console.log('Hoisting is... interesting')
}
