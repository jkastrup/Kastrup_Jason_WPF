/**
 * @author Jason Kastrup
 * Conditions Assignment: Wacky
 * 3/20/2014
 * 
 * A simple number guessing game, where the user must guess the number picked by the computer
 * The user may pick the range of numbers
 */

var hasWon = false;	// Keeps track if the user has guessed the right number
var limit = 0;		// Keeps track of the limit of the game
var legitLim;		// Boolean variable used to determine that the input is valid
var numPick;		// Will be a randomly generated number from 0 - limit
var guess;			// The user's guess
var guessCount = 0;	// Keeps track of the amount of guesses for the user

alert("SkyNet would like you to play a game... \n\nThe game is 'Pick a Number'");

limit = parseInt(prompt("SkyNet wants to know the number limit for this game... \n\n10? 100? 10,000?\nPlease enter a limit..."));

legitLim = !isNaN(parseFloat(limit)) && isFinite(limit);

while(legitLim === false){
	limit = parseInt(prompt("SkyNet cannot use that...\n\n Please enter a valid whole number for a limit"));
	if(!isNaN(parseFloat(limit)) && isFinite(limit)){
		legitLim = true;
	}
}


numPick = Math.floor(Math.random()*(limit+1));

do{
	guess = parseInt(prompt("SkyNet wishes you to guess a number between 0 and " + limit));
	if(guess === numPick){
		hasWon = true;
		guessCount++;
	}else if(guess >= numPick){
		alert("SkyNet has calculated that your 'guess' was too high...\nTry Again?");
		guessCount++;
	}else if(guess <= numPick){
		alert("SkyNet has calculated that your 'guess' was too low...\nTry Again?");
		guessCount++;
	}
}
while(hasWon === false);	// The condition to win the game must be met before it can end...

console.log("You have outsmarted SkyNet...\n\nThe number was " + numPick + 
	"\n\nBut it took you " + guessCount + " guesses...");










