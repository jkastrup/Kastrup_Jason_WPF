/**
 * @author Jason Kastrup
 * Expressions Assignment: Wacky
 * 3/13/2014
 * 
 * Something wacky about me is that I spend a lot of my free time gaming.
 * One of the games I spend the most time on is League of Legends.
 * Players are often compared by their KDA (The number of Kills and Assists per Death)
 * 
 * Below is a calculator for obtaining a player's KDA through a number of games.
 */

var numGames = prompt("How many games of League of Legends have you played?");
var gameTotals = [0,0,0]; // Array that will hold 3 values: Kills Deaths and Assists
var numKills = 0; // The total number of kills
var numDeaths = 0; // The total number of deaths
var numAssists = 0; // The total number of Assists
var avgKDA = 0; // Average KDA

for(i=0;i<numGames;i++){  // Loop asking for and totaling kills, deaths, and assists

	gameTotals[0] += parseInt(prompt("How many kills did you have in game " + (i+1) + " ?")); // Asks the user for kills
	gameTotals[1] += parseInt(prompt("How many deaths did you have in game " + (i+1) + " ?")); // Asks the user for deaths
	gameTotals[2] += parseInt(prompt("How many assists did you have in game " + (i+1) + " ?")); // Asks the user for assists
}

avgKDA = (gameTotals[0] + gameTotals[2]) / gameTotals[1]; // Calculates the average KDA for the given amount of games

console.log("With a total of " + gameTotals[0] + " kills, " + gameTotals[1] + " deaths, and " + gameTotals[2] + " assists, " + " You earned an average KDA of " + avgKDA + "!");



