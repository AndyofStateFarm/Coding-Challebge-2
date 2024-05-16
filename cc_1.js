// Inital setup up of a ternary operator to calculate tip
var bill = 20;
var tip = (bill <= 50 || bill >= 300) ? bill*.15 : bill*.20;
