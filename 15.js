function reverseArray(array) {
  
    const midpoint = Math.floor(array.length / 2);

    
    for (let i = 0; i < midpoint; i++) {
        
        const temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }

    return array;
}

var array = [1, 3, 4, 3, 7, 8, 0, 12, 19];

var reversedArray = reverseArray(array);
console.log(reversedArray); 
