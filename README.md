# JavaScript Patterns and Multiplication Tables

## Overview
This project contains JavaScript functions to print various patterns using `*`, numbers, and multiplication tables. The patterns include:
- Diamond pattern
- Number 8 pattern
- Letter X pattern
- Repeated '1' pattern
- Increasing numbers pattern
- Multiplication table for numbers (1 to 5)
- Odd multiplication tables (1 to 20)

## Patterns and Functions

### 1. Diamond Pattern
This function prints a diamond-shaped pattern using `*`.
js
function printDiamond(n) {
    let pattern = "";
    for (let i = 1; i <= n; i += 2) {
        pattern += " ".repeat((n - i) / 2) + "* ".repeat(i) + "\n";
    }
    for (let i = n - 2; i >= 1; i -= 2) {
        pattern += " ".repeat((n - i) / 2) + "* ".repeat(i) + "\n";
    }
    console.log(pattern);
}


### 2. Number 8 Pattern
Prints a number 8-like structure using `*`.
js
function printEight(n) {
    let pattern = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === n - 1 || i === Math.floor(n / 2) || j === 0 || j === n - 1) {
                pattern += "* ";
            } else {
                pattern += "  ";
            }
        }
        pattern += "\n";
    }
    console.log(pattern);
}


### 3. Letter X Pattern
Prints an X shape using `*`.
js
function printX(n) {
    let pattern = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j || i + j === n - 1) {
                pattern += "* ";
            } else {
                pattern += "  ";
            }
        }
        pattern += "\n";
    }
    console.log(pattern);
}


### 4. Repeated '1' Pattern
Prints rows of repeated `1`s.
js
function printOnesPattern(n) {
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        pattern += "1 ".repeat(i) + "\n";
    }
    console.log(pattern);
}


### 5. Increasing Numbers Pattern
Prints an increasing numbers pattern.
js
function printNumberPattern(n) {
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += j + " ";
        }
        pattern += "\n";
    }
    console.log(pattern);
}


### 6. Multiplication Table (1 to 5)
Prints the multiplication table for numbers 1 to 5.
js
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        row += (i * j) + "\t";
    }
    console.log(row);
}


### 7. Odd Multiplication Tables (1 to 20)
Prints multiplication tables for odd numbers from 1 to 20.
js
function printOddMultiplicationTables() {
    for (let num = 1; num <= 20; num += 2) {
        console.log(`\nMultiplication Table for ${num}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${num} x ${i} = ${num * i}`);
        }
    }
}

printOddMultiplicationTables();


## How to Run the Code
1. Copy the JavaScript code snippets into a file (e.g., `patterns.js`).
2. Open a terminal or command prompt and navigate to the file location.
3. Run the file using Node.js:
   sh
   node patterns.js
   
4. Alternatively, open the browser console (`F12` > `Console` tab) and paste the code.

## Conclusion
This project demonstrates various ways to print patterns and multiplication tables using JavaScript loops and conditional statements. You can modify the sizes (`n` values) to generate different outputs.

Feel free to enhance these functions further! 🚀

