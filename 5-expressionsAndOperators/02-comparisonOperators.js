/*
Comparison Operators
*/

//equality
console.log('3'== 3);//true
console.log('three' == 3);// false
console.log(3 == 3); //true
console.log(0 == false);

//strict equality--value and types are the same
console.log(3 === 3); //true
console.log('3' === 3);//fasle

//not equal
console.log('4'!= 4);//false

//strict not equal
console.log('3' !== 3);//true (==) care about type

//greater than 
console.log(3 < 2); //false

//less than
console.log(2 < 3);// trues

//greater than or equal to
console.log(3 >= 3); //true

//less than or equal to
console.log(4 <= 4); //true

//And: return true if the left and the right are both true
Console.log(true && true);
let x=5;
console.log(x < 10 && x > -5);//true
console.log(x < 10 && x > 15); //false

//tangent
let str = 'a';
console.log(str < 'p');//true

//Or: return true if the left or right are true(if on side is true whole expression is true)
console.log(true || fasle); //true
let x = 5;
console.log(x < 10 || x > 15); //true