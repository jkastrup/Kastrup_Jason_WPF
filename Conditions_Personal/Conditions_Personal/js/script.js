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

isHungry = alert("Are you hungry? Y/N");

//Starting condition, the user must be hungry in order to eat
if( isHungry === "Y" || isHungry === "y"){	// Determines if the usersaid Yes to being hungry
	
	timeOfDay = alert("Is it morning, afternoon, or night? M/A/N");
	
	// Next condition, determines the approximate time of day
	if(timeOfDay === "M" || timeOfDay === "m" || 
		timeOfDay === "A" || timeOfDay === "a" || 
		timeOfDay === "N" || timeOfDay === "n"){	// Determines that the user entered in a proper response
			
	}else{	// Displays if the user entered anything other than M,m,A,a,N,n
		console.log("Sorry, please enter a valid response!");
	}
	
	homeOrOut = alert("Would you like to eat at home or go out? H/O");
	
	
	
	
}else if( isHungry === "N" || isHungry === "n"){	// Determines if the user said No to being hungry
	
}else{
	console.log("Sorry, please enter a valid response!");	// Will display if the user entered anything other than Y,y,N,n
}
