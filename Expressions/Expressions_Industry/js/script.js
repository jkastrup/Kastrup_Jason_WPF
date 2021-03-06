/**
 * @author Jason Kastrup
 * Expressions Assignment: Industry
 * 3/13/2014
 * 
 * Emails are extremely important in any industry today.  Many users often send poorly written emails, full of grammatical errors inappropriate content.
 * Although I cannot teach English, I can create an e-mail contact signature for anyone to use at the bottom of their emails.
 * The script obtains the number of contact information you have, then the name of the site, and your contact information.
 * It then formats it to look clean, easily placed at the bottom of your emails.
 */

var numAccnts = parseInt(prompt("How many contact accounts do you have? I.e. E-mail, Facebook, Twitter, etc.")); //Retrieves the number of social network accounts
var myName = prompt("What is your full Name?"); // Retrieves the users full name
var myAccounts= []; // Creates an array to store the information about each account

for(i=0;i<numAccnts;i++){ // Loop retrieving the name of the networking site and its relavent contact information
	myAccounts[i] = prompt("What is the name of the networking site?") + ": ";
	myAccounts[i] += prompt("What is your contact information for that site?");
}

console.log("Your e-mail signature below:"); //Displays result descriptions
console.log();		// Used for a natural spacer
console.log(myName);// Displays the users name
for(i=0;i<numAccnts;i++){	// Loop displaying each account on a separate line
	console.log(myAccounts[i]);
}
