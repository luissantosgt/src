const scores = [1, 2, 4, 3];

//Basic Operations on Arrays
//Insert — Inserts an element at a given index
scores[0] = 5;

//Get — Returns the element at a given index
let scores2 = scores[1];

//Delete — Deletes an element at a given index
let index = scores.indexOf(5);
if(index > -1){
    scores.splice(index, 1);
} 

//Size — Gets the total number of elements in an array

let length = scores.length;
let numberofIndexes = scores.length - 1;

console.log(scores);
console.log(length);
console.log(numberofIndexes);