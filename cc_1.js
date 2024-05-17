//U08282838
  
// Function that inputs any bill and returns the tip
function calcTip(bill) {
    // Inital setup up of a ternary operator to calculate tip
   let tip = (bill <= 50 || bill >= 300) ? bill*.15 : bill*.20;
      return tip
}

// set arrays
let bills = [275,40,430,125,555,44];
let tips = []
let totals = []

// loop test bills to generate tips and totals
for (const bill of bills) {
  
    let Tip = calcTip(bill)
    let total = Tip + bill;

tips.push(Tip)
totals.push(total)

    // Output to console
    console.log("The bill was $" + bill + ", tip was $" + Tip + ", the total value $" + total);

}

// Output arrays to console
console.log(bills, tips, totals)
