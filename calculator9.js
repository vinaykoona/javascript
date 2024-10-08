// function add(a,b){
//     return a+b;
// }
// function substract(a,b){
//     return a-b;
// }
// function multiply(a,b){
//     return a*b;
// }
// function divide(a,b){
//     return a/b;
// }
// function modulus(a,b){
//     return a%b;
// }
// console.log("Addition:", add(a, b));
// console.log("Subtraction:", subtract(a,b));
// console.log("Multiplication:", multiply(a,b));
// console.log("Division:", divide(a,b));
// console.log("Modulus:", modulus(a, b));




function add(a, b) {
    // Return the sum of a and b
    return a + b;
}

function subtract(a, b) {
    // Return the difference of a and b
    return a - b;
}

function multiply(a, b) {
    // Return the product of a and b
    return a * b;
}

function divide(a, b) {
    // Return the quotient of a and b
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    
    return a / b;
}

function modulus(a, b) {
    // Return the modulus of a and b
    if (b === 0) {
        throw new Error("Cannot perform modulus by zero.");
    }
    return a % b;
}

// Example usage
const x = 10;
const y = 3;

console.log("Addition:", add(x, y));         // Addition: 13
console.log("Subtraction:", subtract(x, y)); // Subtraction: 7
console.log("Multiplication:", multiply(x, y)); // Multiplication: 30
console.log("Division:", divide(x, y));       // Division: 3.3333...
console.log("Modulus:", modulus(x, y));       // Modulus: 1



