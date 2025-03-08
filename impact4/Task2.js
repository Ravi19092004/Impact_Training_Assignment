// Function to print odd multiplication tables from 1 to 20
function printOddMultiplicationTables() {
    for (let num = 1; num <= 20; num += 2) {  // Loop for odd numbers
        console.log(`\nMultiplication Table for ${num}:`);
        for (let i = 1; i <= 10; i++) {  // Multiples from 1 to 10
            console.log(`${num} x ${i} = ${num * i}`);
        }
    }
}

// Call the function
printOddMultiplicationTables();
