let car:string = 'subaru';
let ages:number = 25;
let isSunny:boolean = true;
let fruit:string = 'apple';
let num:number = 7;

// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

// Test 2
console.log("Is age >= 18? I predict True.");
console.log(ages >= 18); // True

// Test 3
console.log("Is isSunny && age < 30? I predict False.");
console.log(isSunny && ages > 30); // False

// Test 4
console.log("Is fruit == 'orange'? I predict False.");
console.log(fruit == 'orange'); // False

// Test 5
console.log("Is number !== 5? I predict True.");
console.log(num !== 5); // True

// Test 6
console.log("Is age < 21 || isSunny? I predict False.");
console.log(ages < 21 || isSunny); // False

// Test 7
console.log("Is fruit == 'banana' && age > 30? I predict False.");
console.log(fruit == 'banana' && ages > 30); // False

// Test 8
console.log("Is number > 10? I predict False.");
console.log(num < 6); // False

// Test 9
console.log("Is isSunny || number == 7? I predict True.");
console.log(isSunny || num == 7); // True

// Test 10
console.log("Is age <= 25 && fruit == 'apple'? I predict False.");
console.log(ages > 25 && fruit == 'apple'); // False
