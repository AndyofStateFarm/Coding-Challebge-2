// Function that inputs any bill and returns the tip
let bill = 100;
function calcTip(bill) {
    // Inital setup up of a ternary operator to calculate tip
    let tip = (bill <= 50 || bill >= 300) ? bill*.15 : bill*.20;
    return tip
}

let TIP = calcTip(bill)
let total = TIP + bill;

// Output to console
console.log("The bill was $" + bill + ", tip was $" + TIP + ", the total value $" + total);
