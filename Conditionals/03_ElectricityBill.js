// Q10: Electricity Bill
let unit = Number(prompt("Enter Electricity unit")); //700
let amount = 0;
if (unit > 400) {
  amount = (unit - 400) * 13; //3900
  unit = 400;
} //400
if (unit > 200 && unit <= 400) {
  amount = (unit - 200) * 8; //1600
  unit = 200;
} //200
if (unit > 100 && unit <= 200) {
  amount += (unit - 100) * 6; //600
  unit = 100;
}
amount += unit * 4;
console.log(amount);
// Q10: Electricity Bill
let unit = Number(prompt("Enter Electricity unit")); //700
let amount = 0;
if (unit > 400) {
  amount = (unit - 400) * 13; //3900
  unit = 400;
} //400
if (unit > 200 && unit <= 400) {
  amount = (unit - 200) * 8; //1600
  unit = 200;
} //200
if (unit > 100 && unit <= 200) {
  amount += (unit - 100) * 6; //600
  unit = 100;
}
amount += unit * 4;
console.log(amount);
