function calculateTotal(items) {
  let total = 0;
  for (let item of items) {
    total += item.price;
  }
  return total;
}

function applyDiscount(total, discountRate) {
  const discount = total * discountRate;
  return total - discount;
}

function applyTax(price, taxRate) {
  const tax = price * taxRate;
  return price + tax;
}

function printItems(items) {
  console.log("--------- Item List ------------");
  for (let item of items) {
    console.log(item.name + " : $" + item.price.toFixed(2));
  }
}

function printSummary(total, discount, tax, final) {
  console.log("------Summary---------");
  console.log("Total Cost:        $" + total.toFixed(2));
  console.log("Discount (10%):    $" + discount.toFixed(2));
  console.log("Tax (7%):          $" + tax.toFixed(2));
  console.log("Final Cost:        $" + final.toFixed(2));
}
const groceries = [
  { name: "Bread", price: 2.5 },
  { name: "Milk", price: 3.0 },
  { name: "Eggs", price: 2.0 },
  { name: "Cheese", price: 4.5 },
  { name: "Apples", price: 5.0 },
  { name: "Chicken", price: 8.0 },
  { name: "Rice", price: 3.5 },
  { name: "Butter", price: 2.75 },
  { name: "Juice", price: 3.25 },
];

function calculateFinalcost(items, discountRate, taxRate) {
  printItems(items);

  const total = calculateTotal(items);
  const afterDiscount = applyDiscount(total, discountRate);
  const final = applyTax(afterDiscount, taxRate);

  const discountAmount = total - afterDiscount;
  const taxAmount = final - afterDiscount;

  printSummary(total, discountAmount, taxAmount, final);
}
calculateFinalcost(groceries, 0.07, 0.07);

console.log("**************************************************");

function calculateSubtotal(items) {
  let total = 0;

  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }

  return total;
}

function calculateServiceCharge(subtotal, serviceRate) {
  return subtotal * serviceRate;
}

function calculateTax(price, taxRate) {
  return price * taxRate;
}

function calculatePerPerson(finalBill, people) {
  return finalBill / people;
}

function printItemizedBill(items) {
  console.log("---------- Itemized Bill ---------");

  for (let i = 0; i < items.length; i++) {
    console.log(items[i].name + ": $" + items[i].price.toFixed(2));
  }
}

function printGrocerySummary(
  subtotal,
  serviceCharge,
  tax,
  finalBill,
  people,
  perPerson,
) {
  console.log("-------- Bill Summary --------");
  console.log("Subtotal: $" + subtotal.toFixed(2));
  console.log("Service (18%): $" + serviceCharge.toFixed(2));
  console.log("Tax (7%): $" + tax.toFixed(2));
  console.log("Final Bill: $" + finalBill.toFixed(2));
  console.log("Per Person (" + people + "): $" + perPerson.toFixed(2));
}

const menuItems = [
  { name: "Burger", price: 8.25 },
  { name: "Fries", price: 3.25 },
  { name: "Soda", price: 2.0 },
  { name: "Dessert", price: 5.75 },
];

function calculateRestaurantBill(items, serviceRate, taxRate, people) {
  printItemizedBill(items);

  const subtotal = calculateSubtotal(items);
  const serviceCharge = calculateServiceCharge(subtotal, serviceRate);
  const afterService = subtotal + serviceCharge;
  const tax = calculateTax(afterService, taxRate);
  const finalBill = afterService + tax;
  const perPerson = calculatePerPerson(finalBill, people);

  printGrocerySummary(
    subtotal,
    serviceCharge,
    tax,
    finalBill,
    people,
    perPerson,
  );
}

calculateRestaurantBill(menuItems, 0.18, 0.07, 4);

console.log("***************************************");

const trips = [
  { distance: 300, mpg: 25, costPerGallon: 3.75 },
  { distance: 500, mpg: 30, costPerGallon: 3.75 },
  { distance: 150, mpg: 20, costPerGallon: 4.0 },
];

function calculateGallons(distance, mpg) {
  return distance / mpg;
}

function calculateFuelCost(gallons, costPerGallon) {
  return gallons * costPerGallon;
}

function printTripDetails(distance, mpg, costPerGallon, gallons, totalCost) {
  console.log("-------- Trip Details -----------");
  console.log("Distance:          " + distance + " miles");
  console.log("Fuel Efficiency:   " + mpg + " mpg");
  console.log("Cost per Gallon:   $" + costPerGallon.toFixed(2));
  console.log("Fuel Needed:       " + gallons.toFixed(2) + " gallons");
  console.log("Total Trip Cost:   $" + totalCost.toFixed(2));
}

function calculateTripCost(distance, mpg, costPerGallon) {
  const gallons = calculateGallons(distance, mpg);
  const totalCost = calculateFuelCost(gallons, costPerGallon);
  printTripDetails(distance, mpg, costPerGallon, gallons, totalCost);
  return totalCost;
}

function printAllTrips(trips) {
  let grandTotal = 0;

  for (let i = 0; i < trips.length; i++) {
    console.log("\n=== Trip " + (i + 1) + " ===");
    const cost = calculateTripCost(
      trips[i].distance,
      trips[i].mpg,
      trips[i].costPerGallon,
    );
    grandTotal += cost;
  }

  console.log("\n-------- All Trips Summary --------");
  console.log("Total Cost for All Trips:  $" + grandTotal.toFixed(2));
}

printAllTrips(trips);

console.log("******************************************");

function calculateRenovationCost(rooms) {
  let totalCost = 0;

  console.log("---- Room Costs ---------");
  for (let i = 0; i < rooms.length; i++) {
    const cost = rooms[i].sqft * rooms[1].ratePerSqft;
    totalCost += cost;
    console.log(
      rooms[i].name +
        ": " +
        rooms[i].sqft +
        "sqft x $" +
        rooms[i].ratePerSqft +
        " = $" +
        cost.toFixed(2),
    );
  }

  console.log("\nTotal Renovation Cost: $" + totalCost.toFixed(2));
  return totalCost;
}

const rooms = [
  { name: "Living Room", sqft: 200, ratePerSqft: 15 },
  { name: "Kitchen ", sqft: 150, ratePerSqft: 20 },
  { name: "Bathroom ", sqft: 100, ratePerSqft: 25 },
];

calculateRenovationCost(rooms);

console.log("************************************************");

function convertTemperatures(value, fromUnit) {
  let celsius;

  if (fromUnit === "C") celsius = value;
  else if (fromUnit === "F") celsius = ((value - 32) * 5) / 9;
  else if (fromUnit === "K") celsius = value - 273.15;

  const fahrenheit = (celsius * 9) / 5 + 32;
  const kelvin = celsius + 273.15;
  console.log(celsius);
  console.log("\nInput: " + value + "`" + fromUnit);
  console.log("Celsius: " + celsius.toFixed(2) + "`C");
  console.log("Fahrenheit: " + fahrenheit.toFixed(2) + "`F");
  console.log("Kelvin: " + kelvin.toFixed(2) + " K");
}

const temperature = [
  { value: 0, unit: "C" },
  { value: 100, unit: "C" },
  { value: 212, unit: "F" },
  { value: 300, unit: "K" },
];

console.log("------- Temperature Conversions ---------");
for (let i = 0; i < temperature.length; i++) {
  convertTemperatures(temperature[i].value, temperature[i].unit);
}

console.log(
  "*******************************************************************",
);

function calculateBMI(weight, height) {
  let bmi = weight / (height * height);
  return bmi;
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return "underweight";
  } else if (bmi < 25) {
    return "Normal weight";
  } else if (bmi < 30) {
    return "OverWeight";
  } else {
    return "Invalid Error. Please try again.";
  }
}

let weight = 68;
let height = 1.9;

let bmi = calculateBMI(weight, height);
let category = getBMICategory(bmi);

console.log("Your BMI is:", bmi.toFixed(2));
console.log("Category:", category);
