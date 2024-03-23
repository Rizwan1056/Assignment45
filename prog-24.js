var string1 = "apple";
var string2 = "orange";
var number1 = 10;
var number2 = 20;
var fruits = ["apple", "banana", "pear"];
var animal = ["cat", "dog", "elephant"];
// Tests for equality and inequality with strings
console.log("Is string1 equal to 'apple'? I predict True.");
console.log(string1 == 'apple'); // True
console.log("Is string1 not equal to string2? I predict True.");
console.log(string1 != string2); // True
// Tests using the lower case function
console.log("Is string1 lowercase equal to 'apple'? I predict True.");
console.log(string1.toLowerCase() == 'apple'); // True
console.log("Is string2 lowercase not equal to 'apple'? I predict True.");
console.log(string2.toLowerCase() != 'apple'); // True
// Numerical tests
console.log("Is number1 less than number2? I predict True.");
console.log(number1 < number2); // True
console.log("Is number2 greater than or equal to number1? I predict True.");
console.log(number2 >= number1); // True
// Tests using "and" and "or" operators
console.log("Is number1 greater than 5 and number2 less than 30? I predict True.");
console.log(number1 > 5 && number2 < 30); // True
console.log("Is string1 equal to 'apple' or string2 equal to 'banana'? I predict True.");
console.log(string1 == 'apple' || string2 == 'banana'); // True
// Test whether an item is in an array
console.log("Is 'banana' not in the fruits array? I predict False.");
console.log(!fruits.includes('banana')); // False
console.log("Is 'elephant' in not the animals array? I predict False.");
console.log(!animal.includes('elephant')); // False
// Test whether an item is not in an array
console.log("Is 'pear' not in the fruits array? I predict False.");
console.log(!fruits.includes('pear')); // False
console.log("Is 'cat' not in the animals array? I predict False.");
console.log(!animal.includes('cat')); // False
