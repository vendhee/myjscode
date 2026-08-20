// Uninitialized variables in JavaScript are variables that have been declared but not assigned a value. 
// When you declare a variable without assigning a value, it is automatically initialized to `undefined`.

let userName;
console.log(userName); // Output: undefined

// Array Destructuring Over-allocation
const numbers = [10, 20];
const [first, second, third] = numbers;

console.log(third); // Output: undefined
console.log(first); // Output: 10

// Missing Object Destructuring Properties
const user = { name: "Alice" };
const { name, age } = user;

console.log(age); // Output: undefined

// Preventing undefined with Default Values
const [a, b = 5] = [1]; 
console.log(b); // Output: 5 (instead of undefined)


// Function Parameters with Default Values
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!

// Uninitialized Variables in Loops
for (let i = 0; i < 3; i++) {
  let uninitializedVar;
  console.log(uninitializedVar); // Output: undefined
}

// Uninitialized Variables in Conditional Statements
let condition = true;
let result; 
if (condition) {
  result = "Condition is true";
}

console.log(result); // Output: Condition is true
