var numbers = [10, 20, 30, 40, 50];
var average = calculateAverage(numbers);

function calculateAverage(array) {
    
    if (array.length === 0) {
        return undefined; 
    }
    
    var sum = 0;
    var count = array.length;
    
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    
    var average = sum / count;
    

    return average;
}

console.log("The average of the numbers is: " + average);
