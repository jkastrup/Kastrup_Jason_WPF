/**
 * @author Jason Kastrup
 * Functions_Worksheet
 * 3/27/14
 */

// Problem 1 - Circumeference

var rad = 5;	// Radius of the circle

var circumference = calcCircum(rad);

console.log("Problem 1:\nThe circumference of the circle is " + circumference);

function calcCircum(radius){
	var circum = 2 * radius * 3.14;	//calculates circumference based on equation Pi*Diameter
	return circum;	// returns the circumference of a circle with the given radius
}
