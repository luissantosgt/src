//https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/

/* BubbleSort(array) {
    for i -> 0 to arrayLength 
        for j -> 0 to (arrayLength - i - 1)
            if arr[j] > arr[j + 1]
                swap(arr[j], arr[j + 1])
}
 */


//let arr = [1,4,2,5,-2,3]
//let arr = [];
//console.log(arr);


//console.log(arrLenght);
//let greater = arr[1];

function BubbleSort(arr){
let arrLenght = arr.length
for(let i = arrLenght; i > 0 ; i--){
    for(let j = 0; j <= i - 1; j++){
        if(arr[j] > arr[j + 1]){
            var temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }
}
return arr;
}
//return arr;

console.log(BubbleSort([1,4,2,5,-2,3]))