// Task 1: Write Code to Print the Following Pattern

for (let i = 1; i <= 5; i++) {  // Rows
    let row = "";
    for (let j = 1; j <= 5; j++) {  // Columns
        row += (i * j) + "\t";  // Multiply row and column index
    }
    console.log(row);
}