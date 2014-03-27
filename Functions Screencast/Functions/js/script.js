/**
 * @author Jason Kastrup
 * Screencast Functions
 * Functions - Arguments and Paremeters 
 */

/**
var width = 5;

function outpMsg(){
	console.log("Hello World");
}

function calcArea(){
	var width = 20;
	var height = 30;
	vaf area = width * height;
	console.log(aera);
}

calcArea();
console.log(width);


// Functions - Returning Values

var total = calcArea(30,20);

function calcArea(w, h){	// w = width, h = height
	var area = w * h;
	return area;	//functions returns output
}

console.log(total);

function dogYears(age){	// parameters	
	var dogYears = age * 7;
	console.log("Sparky is " + dogYears + " years old.");
}

var age1 = 4;
dogYears(age1);	// Arguments
dogYears(5);
**/

// Functions - Anonymous Functions

var calcArea = function(width, height){
// Code the function runs
	var area = width * height;
	return area;
}

var a = calcArea(20,30);	// invoking

console.log(a);










