/**
 * @author Jason Kastrup
 * Functions Assignment: Wacky
 * 
 * Below is code to calculate the weight of the user on varius celestial bodies
 */

var gravFactor = [27.9, .38, .91, 1, .17, .38, 2.54, 1.08, .91, 1.19];	// Sun, Mercury, Venus, Earth, Moon, Mars, Jupiter, Saturn, Uranus, Neptune
var planets = ["The Sun", "Mercury", "Venus", "Earth", "The Moon", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
var weight = 0;	// User's 'Earth' Weight in lbs
var planetDest;	// Tracks the celestial body the user wishes to go to;
var newWeight;	// Stores the users theoretical weight on other celestial bodies

weight = parseInt(prompt("Please enter your 'Earth' weight in lbs"));	// Grabs input from user
planetDest = parseInt(prompt("You may visit the following celestial bodies. Enter the index number following the planet you wish to go to.\n\nSun\t1\nMercury\t2\nVenus\t3\nEarth\t4\nMoon\t5\nMars\t6\nJupiter\t7\nSaturn\t8\nUranus\t9\nNeptune\t10"));

newWeight = newPlanetWeight(weight, planetDest);

console.log("Your weight on ")

// Function created to calculate weight based on the input of the user
function newPlanetWeight(earthWeight, planetNum){
	var planetWeight = earthWeight * planets[planetNum-1];
	return planetWeight;
}
