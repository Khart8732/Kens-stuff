/*
For Of Loops
Better for arrays
*/

let student = {name:'Emily',awsome: true, degree: 'JavaScript',week: 1};
for (let key of student)
{
    consol.log(key);
}// Willnever work

let catArray = ['tabby','british shorthair','burmese','maine coon'];
for (cat of catArray){// of grabs items "in" counts them
    console.log(cat, 'says meow');
}