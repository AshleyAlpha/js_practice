var array = [1, 2, 3, 4, 5,6,7,8,9,10];
var result = sumArrayElements(array);

function sumArrayElements(array) {
    
    var sum = 0;
    
   
    for ( i = 0; i < array.length; i++) {
        sum += array[i];
    }
    
    return sum;
}
console.log("The sum of elements in the array is: " + result);
