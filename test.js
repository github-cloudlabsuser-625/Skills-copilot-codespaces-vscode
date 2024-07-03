// JavaScript Program: Simple Calculator

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero is not allowed.");
        return 0;
    }
    return a / b;
}

// Main function to drive the calculator
function calculator() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Enter the first number: ', (num1) => {
        readline.question('Enter the second number: ', (num2) => {
            readline.question('Choose an operation (+, -, *, /): ', (operation) => {
                let result;
                switch (operation) {
                    case '+':
                        result = add(parseFloat(num1), parseFloat(num2));
                        break;
                    case '-':
                        result = subtract(parseFloat(num1), parseFloat(num2));
                        break;
                    case '*':
                        result = multiply(parseFloat(num1), parseFloat(num2));
                        break;
                    case '/':
                        result = divide(parseFloat(num1), parseFloat(num2));
                        break;
                    default:
                        console.log('Invalid operation.');
                        readline.close();
                        return;
                }
                console.log(`The result is: ${result}`);
                readline.close();
            });
        });
    });
}

// Run the calculator
calculator();