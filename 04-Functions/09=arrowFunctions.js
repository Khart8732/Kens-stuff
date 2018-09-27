//Arrow Function

function coffee() {
    console.log("coffe rules.")
}

let tea = () => {
    console.log("Tea is awesome.")
}

coffee();
tea();

var cats = (kitten, puppy) =>{
    console.log(`I have ${kitten} cats, and ${puppy} dogs.`)
}
cats(2,3);
//Arrow function body styles
//Concise
let apples = x=>console.log(`there are ${x} apples.`)
apples(5);

//Block
let peaches = (x) => {console.log(`There are ${x} peaches.`)}
peaches(10);