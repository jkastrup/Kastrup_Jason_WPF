/**
 * @author Jason Kastrup
 * Conditions Assignment:  Personal
 * 3/20/2014
 * 
 * What should I eat right now?
 */

var isHungry;
var timeOfDay;
var homeOrOut;

isHungry = prompt("Are you hungry? Y/N");

//Starting condition, the user must be hungry in order to eat
if( isHungry === "Y" || isHungry === "y"){	// Determines if the usersaid Yes to being hungry
	
	timeOfDay = prompt("Is it morning, afternoon, or night? M/A/N"); // Asks the user for a response
	
	// Next condition, determines the approximate time of day
	if(timeOfDay === "M" || timeOfDay === "m" || 
		timeOfDay === "A" || timeOfDay === "a" || 
		timeOfDay === "N" || timeOfDay === "n"){	// Determines that the user entered in a proper response
		
		homeOrOut = prompt("Would you like to eat at home or go out? H/O"); // Asks the user for a response
		
		if(homeOrOut === "H" || homeOrOut === "h" || 
		homeOrOut === "O" || homeOrOut === "o"){	// Determines that the user entered in a proper response
			
			if((timeOfDay === "M" || timeOfDay === "m") && (homeOrOut === "H" || homeOrOut === "h")){ // Determines Morning and Home
				console.log("You should make waffles!");	
			}else if((timeOfDay === "M" || timeOfDay === "m") && (homeOrOut === "O" || homeOrOut === "o")){ // Determines Morning and Out
				console.log("You should eat at Tim Horton's!");
			}else if((timeOfDay === "A" || timeOfDay === "a") && (homeOrOut === "H" || homeOrOut === "h")){ // Determines Afternoon and Home
				console.log("You should make a sandwich!");
			}else if((timeOfDay === "A" || timeOfDay === "a") && (homeOrOut === "O" || homeOrOut === "o")){ // Determines Afternoon and Out
				console.log("You should eat at Subway!");
			}else if((timeOfDay === "N" || timeOfDay === "n") && (homeOrOut === "H" || homeOrOut === "h")){ // Determines Night and Home
				console.log("You should order a pizza!");
			}else if((timeOfDay === "N" || timeOfDay === "n") && (homeOrOut === "O" || homeOrOut === "o")){ // Determines Night and Out
				console.log("You should eat at White Castle!");
			}
	
		}else{	// Displays if the user entered anything other than M,m,A,a,N,n
			console.log("Sorry, please enter a valid response!");
		}
	
	}else{	// Displays if the user entered anything other than M,m,A,a,N,n
		console.log("Sorry, please enter a valid response!");
	}
	
	
}else if( isHungry === "N" || isHungry === "n"){	// Determines if the user said No to being hungry
	console.log("Don't eat if you aren't hugnry!");	// Displays if the user is not hungry
}else{
	console.log("Sorry, please enter a valid response!");	// Will display if the user entered anything other than Y,y,N,n
}
