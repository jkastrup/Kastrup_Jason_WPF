/**
 * @author Jason Kastrup
 * Conditions Assignment: Wacky
 * 3/20/2014
 * 
 * A simple number guessing game, where the user must guess the number picked by the computer
 * The user may pick the range of numbers
 */

var hasWon = false;
var limit = 0;
var numPick;
var guess;
var guessCount = 0;

alert("SkyNet would like you to play a game... \n\nThe game is 'Pick a Number'");

prompt("SkyNet wants to know the number limit for this game... \n\n10? 100? 10,000?\nPlease enter a limit...");

