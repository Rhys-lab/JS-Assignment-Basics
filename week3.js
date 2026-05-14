// 1. Arithmetic Operators
let num1 = 5;
let num2 = 15;

console.log("Addition : ", num1 + num2);
console.log("Substraction : ", num2 - num1);
console.log("Multiplication : ", num1 * num2);
console.log("Division : ", num1 / num2);
console.log("MOdulus : ", num1 % num2);

// 2. Comparison Operators
console.log("-------------------------");
let a = 10;
let b = 5;

console.log("Greater than : ", a > b);
console.log("less than : ", a < b);
console.log("Equal to : ", (a = b));
console.log("Not equal to : ", a !== b);

console.log("--------------------------");

// 3. Cinema Entry

let age = 20;
let hasTicket = true;

if (age >= 18 && hasTicket) {
  console.log("Allowed to enter the cinema entrance.");
} else {
  console.log("Not allowed");
}

console.log("----------------------------");

// 4. Increment & decrement

let count = 5;

console.log("Post Increment : ", count++);
console.log("Pre Increment : ", ++count);
console.log("Post Decrement : ", count--);
console.log("Pre Decrement : ", --count);

console.log("-----------------------------");

// 5. Free Delivery

totalAmount = 120;

let message = totalAmount >= 100 ? "Free Delivery" : "Delivery Charges Apply";

console.log(message); //make sure to remember anything inside quotes is treated as a string.

console.log("-----------------------------");

// 6. Weather Check

let temperature = 35;

if (temperature > 30) {
  console.log("Hot weather condition.");
}

let marks = 75;
if (marks >= 80) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else if (marks >= 40) {
  console.log("Grade C");
} else if (marks <= 40) {
  console.log("Failed");
}

console.log("-----------------------------");

// 7. Traffic light System

let light = "green";

switch (light) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Ready");
    break;
  case "green":
    console.log("Free feel to go");
    break;
  default:
    console.log("Invalid light");
}

console.log("--------------------------------");

// 8. Food Menu

let food = "Pizza";

switch (food) {
  case "Pizza":
    console.log("Pizza Price is $10.");
    break;
  case "Burger":
    console.log("Burger Price is $5.");
    break;
  case "Coffee":
    console.log("Coffee Price is $3.");
  default:
    console.log("Items are not available.");
}

console.log("------------------------------------");

// 9. looping pattern

for (let row = 5; row >= 3; row--) {
  let line = " ";

  for (let s = 0; s < 5; s++) {
    line += " ";
  }

  for (let star = 0; star < row; star++) {
    line += "* ";
  }

  console.log(line);
}
console.log("--------------------------------------");

// 10. Student Details

let students = [
  { name: "Aung", age: 20, city: "Yangon" },
  { name: "Su", age: 19, city: "Mandalay" },
  { name: "Min", age: 19, city: "Bango" },
];

for (let i = 0; i < students.length; i++) {
  console.log(
    "Name:",
    students[i].name,
    "Age:",
    students[1].age,
    "City:",
    students[i].city,
  );
}
console.log("------------------------");

// 11. print only passing students

let unistudents = [
  { name: "Aung", marks: 80 },
  { name: "Su", marks: 45 },
  { name: "Min", marks: 60 },
];

for (let i = 0; i < unistudents.length; i++) {
  if (unistudents[i].marks >= 50) {
    console.log(unistudents[i].name, "is Pass");
  }
}
console.log("------------------");

// 12. Product list with Grand list

let orderedProduct = [
  { name: "Laptop", price: 1000, qty: 2 },
  { name: "Phone", price: 500, qty: 5 },
  { name: "Headphones", price: 100, qty: 10 },
];

let grandTotal = 0;

for (let i = 0; i < orderedProduct.length; i++) {
  let total = orderedProduct[i].price * orderedProduct[1].qty;
  grandTotal += total;

  console.log(
    "Product:",
    orderedProduct[i].name,
    "Price:",
    orderedProduct[i].qty,
    "Total:",
    total,
  );
}
console.log("GrandTotal:", grandTotal);

console.log("------------------------");
