/**
 * @author Jason Kastrup
 * 3/19/2014
 * Conditionals Worksheet
 */

/**
 * Problem 1: Stuff Your Face
 * Is the contestant 250 lbs or more?
 */

var compWeight = 275;  // Weight of the competitor

if(compWeight >= 250){ 
	// If the competitor's weight is greater than or equal to 250
	console.log("The competitor qualifies for the heavyweight division.");
}else{
	// Otherwise, competitor needs to gain weight
	console.log("The competitor needs to gain some weight!");
}

/**
 * Problem 2 (Group 1):  Last Chance for Gas!
 * Determine whether or not the car will make it 200 miles without filling up for gas?
 */

var carMPG = 37;  // Gas efficiency of the car in miles per gallon
var perGasLeft = 50; // The percentage of gas left in the tank
var tankSize = 10;  // The size of the gas tank in gallons

var milesLeft = (perGasLeft / 100) * tankSize * carMPG; // Calculates the amount of miles left the car can go

if(milesLeft >= 200){
	// If there are at least 200 miles or more left in the car
	console.log("Yes, you can make it without stopping for gas!");
}else{
	// If there is less than 200 miles left in the car
	console.log("You only have " + ((perGasLeft / 100) * tankSize) + " gallons of gas in your tank, better get gas now while you can!");
}

/**
 * Problem 3 (Group 2):  Letter Grade Calculator
 * Determine the appropriate letter grade from a percent using conditional statements.
 * Grades determined using Full Sail Grade Scale
 */

var grade = 15; // The Student's grade as a percent

// Conditional Statements determining what letter grade should be given according to the student's percent grade
if(grade >= 95){
	// 95% and up gives an A+
	console.log("You have a " + grade + "%, which means you have earned an A+ in the class!");
}else if(grade >= 90){
	// 90% - 94% gives an A
	console.log("You have a " + grade + "%, which means you have earned an A in the class!");
}else if(grade >= 85){
	// 85% - 89% gives a B+
	console.log("You have a " + grade + "%, which means you have earned a B+ in the class!");
}else if(grade >= 80){
	// 80% - 84% gives a B
	console.log("You have a " + grade + "%, which means you have earned a B in the class!");
}else if(grade >= 76){
	// 76% - 79% gives a C+
	console.log("You have a " + grade + "%, which means you have earned a C+ in the class!");
}else if(grade >= 73){
	// 73% - 75% gives a C
	console.log("You have a " + grade + "%, which means you have earned a C in the class!");
}else if(grade >= 70){
	//70% - 72% gives a D
	console.log("You have a " + grade + "%, which means you have earned a D in the class!");
}else{
	// Anything less than a 70% will result in an F
	console.log("You have a " + grade + "%, which means you have earned an F in the class!");
}























