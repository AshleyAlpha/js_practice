function combineArrays(arr1, arr2) {
    let combinedArray = arr1.concat(arr2);
    return combinedArray;
}

let arrange = ['a', 'b', 'c', 'd'];
let to = ['e', 'f', 'g'];

let combined = combineArrays(arrange, to);
console.log(combined);
