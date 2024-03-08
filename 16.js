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

// Example usage:
const str = "Hello, World!";
console.log("Number of vowels:", countVowels(str)); // Output: 3


 
















