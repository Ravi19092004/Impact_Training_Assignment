// Pattern 2: Repeated 1

// Function to print Repeated '1' Pattern
function printOnesPattern(n) {
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        pattern += "1 ".repeat(i) + "\n";
    }
    console.log(pattern);
}

printOnesPattern(5);