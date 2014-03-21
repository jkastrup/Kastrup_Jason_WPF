/**
 * @author Jason Kastrup
 * Conditions Assignment:  Personal
 * 3/20/2014
 * 
 * What should I eat right now?
 */

var isHungry;
var timeOfDay;
var inOrOut;

isHungry = alert("Are you hungry? Y/N");

//Starting condition, the user must be hungry in order to eat
if( isHungry === "Y" || isHungry === "y"){	// Determines if the usersaid Yes to being hungry
	
	timeOfDay = alert("Is it morning, afternoon, or night? M/A/N");
	
	// Next condition, determines the approximate time of day
	if(timeOfDay === "M" || timeOfDay === "m" ){	// Displays if it is Morning
		
	}else if(){
		
	}else if(){
		
	}else{}
	
	
}else if( isHungry === "N" || isHungry === "n"){	// Determines if the user said No to being hungry
	
}else{
	console.log("Sorry, please enter a valid response!");	// Will display if the user entered anything other than Y,y,N,n
}
