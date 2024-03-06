var array = [10, 5, 20, 15, 8, 44];
var greatestNumber = findGreatestNumber(array);

function findGreatestNumber(array) {
   
    if (array.length === 0) {
        return undefined; 
    }
    
    var greatestNumber = array[0];
    
    
    for (i = 1; i < array.length; i++) {
        if (array[i] > greatestNumber) {
            greatestNumber = array[i];
        }
    }
    
    return greatestNumber;
}

var array = [10, 5, 20, 15, 8, 44];
var greatestNumber = findGreatestNumber(array);
console.log("The greatest Number in the array is: " + greatestNumber);
