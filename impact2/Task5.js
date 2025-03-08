//Q5) JavaScript Code for Electricity Bill

function calculateElectricityBill(units) {
    let bill = 0;

    if (units <= 100) {
        bill = units * 5;
    } else if (units <= 200) {
        bill = (100 * 5) + ((units - 100) * 6);
    } else if (units <= 300) {
        bill = (100 * 5) + (100 * 6) + ((units - 200) * 7);
    } else {
        bill = (100 * 5) + (100 * 6) + (100 * 7) + ((units - 300) * 8);
    }

    return bill;
}

let unitsConsumed = 250;  
console.log("Electricity Bill: ₹" + calculateElectricityBill(unitsConsumed));