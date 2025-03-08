// Pattern 1: Letters "C", "B", and "X" using *

// Function to print Diamond pattern
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

// Function to print Number 8 pattern
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

// Function to print X pattern
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

// Call functions to display patterns
console.log("Diamond Pattern:");
printDiamond(7); // You can change the size

console.log("Eight Pattern:");
printEight(7); // Size should be odd for a better look

console.log("X Pattern:");
printX(7); // You can change the size