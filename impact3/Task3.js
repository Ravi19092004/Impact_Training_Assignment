// Pattern 3: Increasing Numbers

// Function to print Increasing Numbers Pattern
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

printNumberPattern(10);