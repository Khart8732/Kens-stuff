//Iterating
let food = ['Peacon Pie','Shrimp','Qusadilla','Cheese cake','Hotdog'];

food.forEach(f => {console.log(f)})

food.forEach((food, number)=>{
    console.log(food);
    console.log(number);
})


let movies=['300','Troy','Gladiator'];

movies.forEach(m => {console.log(m)
}) 
movies.push('Rise of an Empire')
console.log(movies);

let long =[ 1,2,3,4,5,6,7,8,9,10]
console.log(long.length);

let newArray = new Array(73);
console.log(newArray.length);
