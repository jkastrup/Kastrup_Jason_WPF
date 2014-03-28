/**
 * @author Jason Kastrup
 * Functions Assignments: Personal
 * 3/27/14
 * 
 * Below is code to calculat a player's KDA (kills + deaths)/Assists in any game that has those statistics
 */

var yourKDA;	// Keeps track of the user's KDA
var numKills;	// The number of kills the user has
var numDeaths;	// The number of deaths the user has
var numAssists;	// The number of assists the user has


function calcKDA(kills, deaths, assists){
	var kda = (kills + assists) / deaths;
	return kda;
}

