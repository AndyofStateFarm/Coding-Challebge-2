// Inital setup up of a ternary operator to calculate tip
let bill = 20;
let tip = (bill <= 50 || bill >= 300) ? bill*.15 : bill*.20;
let total = tip + bill;


// Output to console
console.log("The bill was $" + bill+ ", tip was $" + tip + ", the total value $" + total);