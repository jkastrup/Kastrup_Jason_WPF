/**
 * @author Jason Kastrup
 * Conditions Assignment: Industry
 * 3/20/2014
 * 
 * If only working with ISP's could be this simple!
 */

var services = [];	// Binary array for each service:  0 off, 1 on, for Phone Cable, and Internet in that order
var prices = [15,40, 50];	// Monthly price in dollars for Phone, Cable, and Internet in that order
var totalP = 0;				// Total monthly price
var taxP = .07;				// Tax percent

// Shows the user what options will be presented to them
alert("Kastrup Cable has 3 available services!\n1)Phone\t\t$" + prices[0] + 
	"\n2)Cable\t\t$" + prices[1] + 
	"\n3)Internet\t\t$" + prices[2]);

// Asks the user about the Phone Service
(prompt("Would you like our Phone service? \nType '1' for 'Yes'") > 0) ? services[0] = 1 : services[0] = 0;
// Asks the user about the Cable Service
(prompt("Would you like our Cable service? \nType '1' for 'Yes'") > 0) ? services[1] = 1 : services[1] = 0;
// Asks the user about the Internet Service
(prompt("Would you like our Internet service? \nType '1' for 'Yes'") > 0) ? services[2] = 1 : services[2] = 0;

// Adds the price of each service selected together
for(i=0;i<services.length;i++){
	if(services[i] === 1){
		totalP += prices[i];	// Adds the selected service to the total price
	}
}

totalP = totalP + (totalP * taxP);	// Calculates total price with tax

console.log("Your total monthly payment, with tax, comes to $" + totalP + ".");	// Displays the total monthly payment for the selected services


