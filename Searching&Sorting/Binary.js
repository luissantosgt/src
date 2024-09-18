/*   divide-and-conquer 
Find the middle element of the given array.
Compare the middle element with the value we are looking for (called key).
    If the key is less than the middle element, search in the left half.
    If the key is more than the middle element, search in the right half.
    If the key is equal to the middle element, return the index of the middle element.
Continue with steps 1, 2 until we are left with a single element.
If the key is still not found, return -1. */


let array = [1, 2, 3, 4, 5];

//value
let key = 2;

//indexes
let left = 0; 
let right = array.length - 1; 

/* let middle = Math.floor(((
 - 3)/2));  
console.log(middle);   */ 

while(left <= right){
    //index
    let middle = Math.floor((right + left)/2);  
    if(key == array[middle]){
        console.log("element found");  
       // console.log(middle);   
        return array[key];
}   else if(key < array[middle]){
    right = middle - 1;
    } 
    else if(key > array[middle]){
        left = middle + 1;
        //console.log(left);   
            }
     
   else {
    console.log("element not found " ); 
 }
}







//FIRST VERSION

/* while(left <= right){

    //index
    let middle = Math.floor((right - left)/2); // first iteration is index 5 and element 6
    console.log(middle); 
    if(key == array[middle]){
        console.log("element found"); 
      break  
}   else if(key < array[middle]){
    right = middle;
    array = array.slice(left, right)
    length = array.length - 1; */
 /*    console.log("array " + array ); 
    console.log("left " + left ); 
    console.log("right " + right );  */
    //break
/*         if(key == array[length]){
        console.log("element found " ); 
                                }
    break
    } 
    else if(key > array[middle]){
        left = middle + 1;
        array = array.slice(left, right + array.length);
         console.log("array " + array ); 
          console.log("left " + left ); 
         console.log("right " + right ); 
       

        length = array.length - 1;
            if(key == array[length]){
            console.log("element found " ); 
            }
     break
 }  else{
    console.log("element not found " ); 
 }

} */

