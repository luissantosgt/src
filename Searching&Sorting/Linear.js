/* Algorithm for Linear Search Algorithm:
The algorithm for linear search can be broken down into the following steps:

Start: Begin at the first element of the collection of elements.

Compare: Compare the current element with the desired element.

Found: If the current element is equal to the desired element, return true or index to the current element.

Move: Otherwise, move to the next element in the collection.

Repeat: Repeat steps 2-4 until we have reached the end of collection.

Not found: If the end of the collection is reached without finding the desired element, 
return that the desired element is not in the array. */

const array = [10, 9, 8, 7, 6, 1, 2, 3, 4, 5];
let key = 11;

 for(let i = 0; i < array.length; i++ )
    if(array[i] == key){
        console.log("element found at index: " + i)
    }else{
        console.log("element not found"); 
    }





/*  index = array.indexOf(key);
     console.log("element found at index: " + index);
    console.log("element not found in the array"); */

//------------
/* To loop through an object and use an if statement in JavaScript, 
you can use a for...in loop. To make sure the else statement is 
not executed until all objects have been looped through, you can use a boolean flag. */

let flag = false;
for (let i in array){
    if(array[i] == key){
        console.log("element found at index: " + array[i]);
        flag = true;
    }
}

if(!flag){
    console.log("element not found");
} 