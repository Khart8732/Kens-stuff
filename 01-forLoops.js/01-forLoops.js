/*
Classic For Loops
 */

 //Loop Variations
 // For statments
 //Do while statement
 //while statement
 //Labled statement
 //Break statement
 //Continue statement
 //For in ststement 
 //For of statement

 //counted from 0-9 by 1s
 for (let i = 0; i < 10; i++){
     console.log(i);
 }
 //counted from 0-20 by 2's
 for (let i=0; i <= 20; i=i+2){
console.log(i);
 }

 for (let i = 10; i >= 0; i--){
     console.log(i);
 }
 for (i=0; i>=-24; i=i-2){
     console.log(i);
 }
 name = 'Ken'
 for (let i = 0; i < name.length; i++){
   console.log(name[i]);}

  sum=0; number =50;

   for (i = 1; i <= number; i++){
    sum=sum +1;   
    console.log(sum);
   }
   
   /*
Challenge:
Write a for loop running between the numbers 0 - 100
For multiples of 3, instead of the number, console.log "Fizz"
For multiples of 5 console.log "Buzz";
For numbers which are multiples of BOTH 3 and 5, console.log "FizzBuzz".
For any other number, console.log the value
*/

for (let i = 0; i < 101; i++){
    if (i%3 == 0 && i % 5 == 0){
      console.log('Fizz Buzz');
    } else if (i%3 == 0) {
      console.log('Fizz');
    } else if (i%5 == 0){
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }