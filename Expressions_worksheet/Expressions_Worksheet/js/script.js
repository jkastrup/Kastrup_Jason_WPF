/**
 * @author Jason Kastrup
 * 3/3/2013
 * Expressions Worksheet
 */

/**
 * Problem 1: Dogy years
 * Calculate how old Sparky the pit bull is in dog years based on his actual age.
 */

console.log("PROBLEM 1"); //Prints problem number to console

var numAge = 4; //Age of the dog in human years
var numDogAge = numAge * 7; //Calculates the age of the dog in "dog years" based on numAge

console.log("Sparky is " + numAge + " in human years which is " + numDogAge + " in dog years."); //Prints results to console

/**
 * Problem 2: Slice of Pie Part I
 * Create an expression that calculates how much pizza each partygoer will get at the party.
 * (Assume all pizzas have the same number of slices and that the person dividing the pizza is really precise, so this can be a decimal)
 */

console.log("PROBLEM 2");

var numSlices = 8; // sets the number of slices per pizza to 8
var numParty = 100; // sets the number of people at the party
var numPizzas = 20; // sets the number of pizzas ordered

var numEat = (numPizzas * numSlices) / numParty; // Calculates the number of slices each partygoer will eat.

console.log("Each person ate " + numEat + " slices of pizza at the party.");

/**
 * Problem 3:  Slice of Pie Party II
 * Assuming the guests only eat WHOLE slice, how many slices will Sparky get?
 * 
 */
console.log("PROBLEM 3");

var numSparky = (numPizzas * numSlices) - (Math.floor(numEat) * numParty); // Calculates the number of slices for sparky

console.log("Sparky got " + numSparky + " slices of pizza!");

/**
 * Problem 4: Average shopping bill
 * Create an expression that will use the items in the array to calculate the average amount spent on groceries.
 */
console.log("Problem 4");

var weeklyTotals = [123,54,75,45,110];
var numWeeks = weeklyTotals.length;

var shopTotal; // Total for all 5 weeks of shopping

for(i=0;i<numWeeks;i++){ // Loops through all indexes of the weeklyTotals array, adding them together in shopTotal
	shopTotal += weeklyTotals[i];
}

var avgCost = shopTotal / numWeeks;

console.log("You have spent a total of $" + shopTotal + " on groceries over 5 weeks.  That is an average of $" + avgCost + " per week");

/**
 * Problem 5: Discounts
 * Calculate the discounted price for an item. Create an expression that will calculate the discounted price,
 * WITH and WITHOUT sales tax.
 */

var origPrice = 50; // Sets the original price of the item
var perDisc = 20; // Sets the percent discount of the item
var itemDesc = "Red Sweater Vest"; // Sets the item description
var perTax = 7; // Sets the percent tax

var itemNoTax = (origPrice - ((20/100) * origPrice)); // Calculates the item price with the percent discount, but no tax
var itemTaxed = (itemNoTax + ((7/100) * itemNoTax)); // Calculates the item price with discount and tax

console.log("Your " + itemDesc + " was originally $" + origPrice + ", but after a(n) " + perDisc + "% discount, it is now $" + itemNoTax + " without tax, and $" + itemTaxed + " with tax.");  
































