/*
Intro to Arrays
good for listing things
have[]
can hold multiple data types

*/


//overview

let students = ['Tony','Marshall','ryan','Ray',23,true,['Ryan,Iesha']];
console.log(typeof students);


let students = ['Tony','Marshall','Ryan','Ray', 23 , true,['Ryan','Iesha']];
console.log(students[6][1]);

let food = ['Peacon Pie','Shrimp','Qusadilla','Cheese cake','Hotdog'];//for of statment is better for arrays 
for (let f of food){
    console.log(f);
}
for (let i = 0; i < food.length; i++){
    console.log(food[i])
}

food.push('Pizza')// add to the array list with push cmd
console.log(food);

food.splice(1,1, 'Bananas'); //firsr number is index to start at second number is number of things to remove 

food.pop( ) //removes the last value
