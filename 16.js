// Define the array
let numbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];

// Function to sort array in ascending order
function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}

// Function to display first n numbers of array
function displayFirstN(arr, n) {
  return arr.slice(0, n);
}

// a: Sort the array in ascending order
let sortedNumbers = sortAscending(numbers.slice());

// b: Modify the array to include first 3 and last 3 numbers in front of the sorted array
let firstThree = numbers.slice(0, 3);
let lastThree = numbers.slice(-3);
let modifiedArray = firstThree.concat(sortedNumbers, lastThree);

console.log("Modified Array:", modifiedArray);

// Part c: Display the first 3 numbers of the sorted array
let firstThreeSorted = displayFirstN(sortedNumbers, 3);
console.log("First three numbers from sorted array:", firstThreeSorted);

//17

function determineAgeClassification(age) {
  if (age >= 0 && age <= 12) {
    return "MIMICRY";
  } else if (age >= 13 && age <= 19) {
    return "SELF-DISCOVERY";
  } else if (age >= 20 && age <= 45) {
    return "COMMITMENT";
  } else {
    return "LEGACY";
  }
}

// Test the function with different ages
console.log(determineAgeClassification(5));
console.log(determineAgeClassification(16));
console.log(determineAgeClassification(30));
console.log(determineAgeClassification(60));

//18
function calculateBMI(weight, height) {
  // Convert height from centimeters to meters
  height = height / 100;

  // Calculate BMI
  let bmi = weight / (height * height);

  // Determine BMI classification
  let classification;
  if (bmi < 18.5) {
    classification = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    classification = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    classification = "Overweight";
  } else {
    classification = "Obese";
  }

  return {
    bmi: bmi,
    classification: classification,
  };
}

// Example usage:
let weight = 70; // in kilograms
let height = 170; // in centimeters

let result = calculateBMI(weight, height);
console.log("BMI:", result.bmi);
console.log("Classification:", result.classification);

//19

function countCharactersWithoutSpaces(str) {
  // Remove spaces from the string using regex
  let stringWithoutSpaces = str.replace(/\s/g, "");

  // Count the number of characters in the string without spaces
  let charCount = stringWithoutSpaces.length;

  return charCount;
}

let inputString = "Miah_Mamie";
let characterCount = countCharactersWithoutSpaces(inputString);
console.log("Number of characters; spaces excluded):", characterCount);

//20
function displayEvenNumbers() {
  for (var i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
displayEvenNumbers();

//21
let nom = 5;
function calculateSquare(nombre) {
    return nombre * nombre;
}
console.log("Square of", nom, "is", calculateSquare(nom));

//22

function checkEven(number) {
    if (number % 2 === 0) {
        return "Even";
    }
}
console.log(checkEven(6));

//23
function checkOdd(number) {
    if (number % 2 === 0) {
        return "Odd";
    }
}
console.log(checkOdd(3));

//24

function getMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

let num1 = 40;
let num2 = 20;
console.log("The maximum number of", num1, "and", num2, "is:", getMax(num1, num2));

//25
function getMax(nom1, nom2) {
    return nom1 < nom2 ? nom1 : nom2;
}

let nom1 = 5;
let nom2 = 6;
console.log("The maximum number of", nom1, "and", nom2, "is:", getMax(nom1, nom2));

//26
function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result *= i;
        }
        return result;
    }
}

console.log(factorial(3)); 
console.log(factorial(1)); 
console.log(factorial(5));

//27

function reverseString(str) {
   
    return str.split('').reverse().join('');
}

const originalString = "About";
const reversedString = reverseString(originalString);
console.log(reversedString);

//28
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Compare the original string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

const string1 = "trace";
console.log(isPalindrome(string1));

const string2 = "level";
console.log(isPalindrome(string2)); 

//29
function displayMultiplesOf5(limit) {
    
    for (let i = 1; i <= limit; i++) {
       
        if (i % 5 === 0) {
            console.log(i); 
        }
    }
}
displayMultiplesOf5(10);

//30
function displayOddNumbers() {
    for (var i = 0; i <= 100; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  displayOddNumbers();

  //31
  function squareRoot(number) {
    return Math.sqrt(number);
}

console.log(squareRoot(49));
console.log(squareRoot(16));
console.log(squareRoot(9));  

//32
function findBiggerNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(findBiggerNumber(5, 10));   
console.log(findBiggerNumber(20, +15));
console.log(findBiggerNumber(-3, -8));

//33

function inCapitalLetters(str){
    return str.toUpperCase()
 }
 console.log(inCapitalLetters('Samie'));

 //34
 function stringModifier(str, position, replacement) {
    // Check if the position is valid
    if (position < 0 || position >= str.length) {
        return "Invalid position provided";
    }

    // Convert the string into an array to modify the character at the specified position
    let strArray = str.split('');
    
    // Replace the character at the specified position with the replacement character
    strArray[position] = replacement;

    // Join the array back into a string and return the modified string
    return strArray.join('');
}

let originalString = "Hello, world!";
let modifiedString = stringModifier(originalString, 7, 'y');
console.log(modifiedString); 

//35

function countVowels(str) {
    // Convert the string to lowercase to make the matching case-insensitive
    str = str.toLowerCase();

    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Initialize a variable to store the count of vowels
    let count = 0;

    // Loop through each character in the string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            // If it is a vowel, increment the count
            count++;
        }
    }

    // Return the total count of vowels in the string
    return count;
}

const str = "Complicated";
console.log("Number of vowels:", countVowels(str)); // Output: 3

//36

function countConsonants(str) {
    // Convert the string to lowercase to make the matching case-insensitive
    str = str.toLowerCase();

    // Define an array of vowels
    const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];

    // Initialize a variable to store the count of vowels
    let count = 0;

    // Loop through each character in the string
    for (let char of str) {
        // Check if the character is a vowel
        if (consonants.includes(char)) {
            // If it is a consonat, increment the count
            count++;
        }
    }

    // Return the total count of vowels in the string
    return count;
}

const str = "yaay";
console.log("The Number of consonants is:", countConsonants(str));

//38
function findIndexOfChar(str, char) {
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Check if the current character matches the given character
        if (str[i] === char) {
            // If a match is found, return the index
            return i;
        }
    }

    // If the character is not found in the string, return -1
    return "c'est introuvable yoo!";
}

// Example usage:
const str = "Hypocondriaque";
const char = "m";
console.log("Index of", char, ":", findIndexOfChar(str, char));

//39

function removeDuplicates(array) {
    // Create an empty object to store unique elements
    let uniqueObject = {};

    // Store unique elements from the array as keys in the object
    for (let i = 0; i < array.length; i++) {
        uniqueObject[array[i]] = true;
    }

    // Extract keys (unique elements) from the object and convert them back to an array
    let uniqueArray = Object.keys(uniqueObject);

    return uniqueArray;
}

let array = [1, 2, 3, 84, 2, 3, 5];
let uniqueArray = removeDuplicates(array);
console.log(uniqueArray); 

//40

function isInArray(value, array) {
    return array.includes(value);
}

const array = [1, 2, 3, 4, 5];
const valueToCheck = 6;

if (isInArray(valueToCheck, array)) {
    console.log(`${valueToCheck} is present in the array.`);
} else {
    console.log(`${valueToCheck} is not present in the array.`);
}

//41

function squareArrayElements(arr) {
    
    if (!Array.isArray(arr)) {
        return "Input is not an array.";
    }

    // Map through the array and square each element
    var squaredArray = arr.map(function(element) {
        return element * element;
    });

    return squaredArray;
}

var originalArray = [1, 2, 3, 8, 5];
var squaredArray = squareArrayElements(originalArray);
console.log(squaredArray); 

//42

function getFirstNElements(arr, n) {
    // Check if the input is an array
    if (!Array.isArray(arr)) {
        return "Input is not an array.";
    }

    // Return the first n elements of the array using slice
    return arr.slice(0, n);
}

var originalArray = [1, 2, 3, 4, 5];
var n = 4;
var firstNElements = getFirstNElements(originalArray, n);
console.log(firstNElements); 

//43
function removeLastElement(arr) {
    // Check if the input is an array
    if (!Array.isArray(arr)) {
        return "Input is not an array.";
    }

    // Remove the last element from the array using pop()
    arr.pop();

    // Return the modified array
    return arr;
}

var originalArray = [1, 2, 3, 4, 5,6,7];
var newArray = removeLastElement(originalArray);
console.log(newArray);

//44

function areAllPositive(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            return false;
        }
    }
    return true;
}

const array1 = [1, 2, 3, 4, 5,-6];
const array2 = [-1, 2, 3, 4, 5];

console.log(areAllPositive(array1)); 
console.log(areAllPositive(array2));

//45

function sumOfEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,4];
console.log("Sum of even numbers:", sumOfEvenNumbers(numbers));

//46

function convertToUpperCase(arr) {
    let uppercaseArray = [];
    for (let i = 0; i < arr.length; i++) {
        uppercaseArray.push(arr[i].toUpperCase());
    }
    return uppercaseArray;
}

const stringsArray = ["hello", "mamie", "Miah"];
const uppercaseStrings = convertToUpperCase(stringsArray);
console.log(uppercaseStrings);

//47

function getRandomNumber(min, max) {
    // Ensure that the provided min and max are valid numbers
    if (typeof min !== 'number' || typeof max !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
  
    // Ensure that min is less than max
    if (min >= max) {
      throw new Error('The minimum value must be less than the maximum value');
    }
  
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  var min = 2;
  var max = 100;
  var randomNumber = getRandomNumber(min, max);
  console.log('Random number between ' + min + ' and ' + max + ': ' + randomNumber);

  //48

  function reverseArray(array) {
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

let originalArray = [1, 2, 3, 4, 5];
let reversed = reverseArray(originalArray);
console.log(reversed);

//49

function fibonacci(n) {
    var fibSequence = [0, 1]; 
    if (n <= 2) {
        return fibSequence.slice(0, n); 
    }

    for (var i = 2; i < n; i++) {
        var nextFib = fibSequence[i - 1] + fibSequence[i - 2]; 
        fibSequence.push(nextFib);
    }

    return fibSequence;
}

var n = 10; 
var result = fibonacci(n);
console.log(result); 

//50

function isSortedAscending(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // If any element is greater than the next one, array is not sorted
        }
    }
    return true; // If no elements violate the order, array is sorted
}

var array1 = [1, 2, 3, 4, 5];
console.log(isSortedAscending(array1)); 

var array2 = [5, 3, 2, 1];
console.log(isSortedAscending(array2)); 

//51

function filterOutNegativeNumbers(array) {
    // Use the filter method to create a new array with only positive numbers
    let positiveNumbers = array.filter(function(num) {
        return num >= 0; // Filter condition: keep numbers that are greater than or equal to 0
    });
    return positiveNumbers;
}

let numbers = [1, -2, 3, -4, 5, -6];
let positiveNumbers = filterOutNegativeNumbers(numbers);
console.log(positiveNumbers);

//52

function findMedian(array) {
    // First, let's sort the array in ascending order
    array.sort(function(a, b) {
        return a - b;
    });

    // Check if the array length is odd or even
    const isEven = array.length % 2 === 0;

    if (isEven) {
        // If the array length is even, return the average of the two middle numbers
        const midIndex = array.length / 2;
        const median = (array[midIndex - 1] + array[midIndex]) / 2;
        return median;
    } else {
        // If the array length is odd, return the middle number
        const midIndex = Math.floor(array.length / 2);
        return array[midIndex];
    }
}

let numbers = [5, 2, 9, 1, 7, 3, 8, 4, 6];
let median = findMedian(numbers);
console.log("Median:", median); // Output: Median: 5

//53

function capitalizeWords(sentence) {
    // Split the sentence into an array of words
    let words = sentence.split(" ");

    // Iterate over each word in the array
    for (let i = 0; i < words.length; i++) {
        // Capitalize the first letter of each word and concatenate it with the rest of the word
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join the words back into a sentence
    let capitalizedSentence = words.join(" ");

    return capitalizedSentence;
}

// Example usage:
let sentence = "il fait chaud ici, ne c'est pas?";
let capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence); 

//54

function isLeapYear(year) {

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true; 
    } else {
        return false;
    }
}

let year = 2048;
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

//55

function findIntersection(array1, array2) {
    // Create an empty array to store the intersection
    let intersection = [];

    // Iterate over each element in array1
    for (let i = 0; i < array1.length; i++) {
        // Check if the current element exists in array2
        if (array2.includes(array1[i])) {
            // If it does, add it to the intersection array
            intersection.push(array1[i]);
        }
    }

    return intersection;
}

let array1 = [1, 2, 3, 4, 5,9];
let array2 = [3, 4, 5, 6, 7,9];
let result = findIntersection(array1, array2);
console.log("Intersection:", result);

//56

function isPrime(number) {
    //A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
    
    // Check if the number is less than 2
    if (number < 2) {
        return false; // Numbers less than 2 are not prime
    }

    // Iterate from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        // If the number is divisible by any integer from 2 to the square root of the number, it's not prime
        if (number % i === 0) {
            return false;
        }
    }

    return true; // If the number is not divisible by any integer from 2 to the square root, it's prime
}

let number = 11;
if (isPrime(number)) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}

//57

function power(base, exponent) {
    // Check if the exponent is 0
    if (exponent === 0) {
        return 1; // Any number raised to the power of 0 is 1
    }

    let result = 1;

  
    if (exponent > 0) {
        for (let i = 0; i < exponent; i++) {
            result *= base; // Multiply the base by itself exponent times
        }
    }
    // Handle negative exponents
    else {
        for (let i = 0; i > exponent; i--) {
            result /= base; // Divide the base by itself exponent times (for negative exponents)
        }
    }

    return result;
}

let base = 4;
let exponent = 3;
let result = power(base, exponent);
console.log(`${base} raised to the power of ${exponent} is ${result}`); 

//58
function calculateRectangleArea(length, width) {
    // Calculate the area of the rectangle
    var area = length * width;
    return area;
}

var length = 5;
var width = 3;
var area = calculateRectangleArea(length, width);
console.log("Area of the rectangle:", area);

//59

function calculateRectanglePerimeter(length, width) {

    var perimeter = 2 * length * width;
    return perimeter;
}

var length = 5;
var width = 3;
var perimeter = calculateRectanglePerimeter(length, width);
console.log("Area of the rectangle:", perimeter);

//60
function containsOnlyDigits(str) {
    // Regular expression to match only digits
    var regex = /^[0-9]+$/;

    // Test the string against the regular expression
    return regex.test(str);
}

var string1 = "123a5";
var string2 = "123";
var string3 = "123xyz";

console.log(string1, "contains only digits:", containsOnlyDigits(string1)); 
console.log(string2, "contains only digits:", containsOnlyDigits(string2)); 
console.log(string3, "contains only digits:", containsOnlyDigits(string3));

//61






















