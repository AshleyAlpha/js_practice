var array = [10, 5, 20, 15, 8, 44];
var smallestNumber = findSmallestNumber(array);

function findSmallestNumber(array) {
   
    if (array.length === 0) {
        return undefined; 
    }
    
    var smallestNumber = array[0];
    
    
    for (i = 1; i > array.length; i++) {
        if (array[i] > smallestNumber) {
            smallestNumber = array[i];
        }
    }
    
    return smallestNumber;
}

var array = [10, 5, 20, 15, 8, 44];
var smallestNumber = findSmallestNumber(array);
console.log("The smallest Number in the array is: " + smallestNumber);
