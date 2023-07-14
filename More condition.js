// Equality and inequality tests with strings
console.log("Is 'apple' equal to 'apple'? I predict true.");
console.log('apple' === 'apple');

console.log("Is 'banana' not equal to 'orange'? I predict true.");
console.log('banana' !== 'orange');

console.log("Is 'apple' equal to 'Apple'? I predict false.");
console.log('apple' === 'Apple');

console.log("Is 'orange' not equal to 'orange'? I predict false.");
console.log('orange' !== 'orange');

// Tests using the lowercase function
console.log("Is 'HELLO' in lowercase equal to 'hello'? I predict true.");
console.log('HELLO'.toLowerCase() === 'hello');

console.log("Is 'WORLD' in lowercase not equal to 'world'? I predict true.");
console.log('WORLD'.toLowerCase() !== 'world');

// Numerical tests
console.log("Is 10 greater than 5? I predict true.");
console.log(10 > 5);

console.log("Is 7 less than or equal to 5? I predict false.");
console.log(7 <= 5);

console.log("Is 3 not equal to 3.5? I predict true.");
console.log(3 !== 3.5);

// Tests using "and" and "or" operators
console.log("Is 5 greater than 3 and less than 10? I predict true.");
console.log(5 > 3 && 5 < 10);

console.log("Is 7 less than 5 or 5 greater than 10? I predict false.");
console.log(7 < 5 || 5 > 10);

// Test whether an item is in an array
const fruits = ['apple', 'banana', 'orange'];
console.log("Is 'apple' in the fruits array? I predict true.");
console.log(fruits.includes('apple'));

console.log("Is 'grape' in the fruits array? I predict false.");
console.log(fruits.includes('grape'));

// Test whether an item is not in an array
console.log("Is 'banana' not in the fruits array? I predict false.");
console.log(!fruits.includes('banana'));

console.log("Is 'grape' not in the fruits array? I predict true.");
console.log(!fruits.includes('grape'));
